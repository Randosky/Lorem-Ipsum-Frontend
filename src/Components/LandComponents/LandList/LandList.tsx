import React, {useCallback, useEffect, useState} from 'react';
import Header from "../../../UI/Header/Header";
import "../../../Styles/Land/LandItemStyles.scss"
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import {landsExamples} from "../../../Helpers/LandHelper";
import {useNavigate} from "react-router-dom";
import {LandCardType} from "../../../Types/Land/LandCardType";

const LandList: React.FC = () => {

    const [searchLand, setSearchLand] = useState("");
    const [isArchivedLand, setIsArchivedLand] = useState(false);
    const [currentLands, setCurrentLands] = useState<LandCardType[]>([]);


    const handleOnCurrentLands = useCallback((e: LandCardType[]) => setCurrentLands(e), [])
    const handleOnSearchLand = useCallback((e: string) => setSearchLand(e), [])
    const handleOnArchived = useCallback(() => {
        isArchivedLand
            ? handleOnCurrentLands(landsExamples)
            : handleOnCurrentLands(landsExamples.filter(l => l.landArchived))

        setIsArchivedLand(!isArchivedLand)
    }, [handleOnCurrentLands, isArchivedLand]);

    useEffect(() => handleOnCurrentLands(landsExamples), [handleOnCurrentLands])

    const navigate = useNavigate()


    return (
        <main className="landList">
            <Header/>
            <div className="landList__container">
                <div className="landList__header">
                    <div className="header__left">
                        <h1 className="header__title">
                            {
                                isArchivedLand ? "Архив земельных участков" : "Земельные участки"
                            }
                        </h1>
                        <p className="header__archive" onClick={handleOnArchived}>
                            {
                                isArchivedLand ? "Открыть активные" : "Открыть архив"
                            }
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
                            currentLands.map((land, ind) =>
                                <tr key={ind} className="lands__table-land"
                                    onClick={() => navigate(`/landCard/${land.landId}`)}>
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
