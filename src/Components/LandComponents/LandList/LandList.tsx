import React, {useCallback, useState} from 'react';
import Header from "../../../UI/Header/Header";
import "../../../Styles/Land/LandItemStyles.scss"
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import {landsExamples} from "../../../Helpers/LandHelper";
import {useNavigate} from "react-router-dom";

const LandList: React.FC = () => {

    const [searchLand, setSearchLand] = useState("");
    const handleOnSearchLand = useCallback((e: string) => setSearchLand(e), [])

    const navigate = useNavigate()


    return (
        <main className="landList">
            <Header/>
            <div className="landList__container">
                <div className="landList__header">
                    <div className="header__left">
                        <h1 className="header__title">
                            Земельные участки
                        </h1>
                        <p className="header__archive">
                            Открыть архив
                        </p>
                    </div>
                    <MyInputWithPrefix inputStyle="header__search" prefixText="" labelStyle="header__label"
                                       value={searchLand} handleOnChange={(e) => handleOnSearchLand(e.target.value)}
                                       prefixStyle="header__search-text"/>
                </div>
                <div className="landList__lands">
                    <table className="lands__table">
                        <thead>
                        <tr>
                            <th>Статус</th>
                            <th>Название</th>
                            <th>Категория</th>
                            <th>Кадстровый номер</th>
                            <th>Правообладатель</th>
                            <th>Кадастровая стоимость</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            landsExamples.map((land, ind) =>
                                <tr key={ind} className="lands__table-land"
                                    onClick={() => navigate(`/landCard?landCardId=${land.landId}`)}>
                                    <td>{land.landStatus}</td>
                                    <td>{land.landTitle}</td>
                                    <td>{land.landCategory}</td>
                                    <td>{land.landCadastrial}</td>
                                    <td>{land.landCopyrightHolder}</td>
                                    <td>20 000</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
                <div className="landList__pagination">
                    <p className="pagination__objects">
                        Объектов в списке: N
                    </p>
                    <p className="pagination__pages">
                        Страница: 1 2 ... N
                    </p>
                </div>
            </div>
        </main>
    );
};

export default LandList;
