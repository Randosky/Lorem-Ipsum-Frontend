import React, {useCallback, useEffect, useState} from 'react';
import Header from "../../../UI/Header/Header";
import "../../../Styles/Land/LandItemStyles.scss"
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import {useNavigate} from "react-router-dom";
import {LandListCardType} from "../../../Types/Land/LandListCardType";
import landStore from "../../../Store/LandStore";

const LandList: React.FC = () => {

    const [searchLand, setSearchLand] = useState("");
    const [isArchivedLand, setIsArchivedLand] = useState(false);
    const [currentLands, setCurrentLands] = useState<LandListCardType[] | null>(null);


    const handleOnCurrentLands = useCallback((e: LandListCardType[]) => setCurrentLands(e), [])
    const handleOnSearchLand = useCallback((e: string) => setSearchLand(e), [])
    // const handleOnArchived = useCallback(() => {
    //     isArchivedLand
    //         ? handleOnCurrentLands(currentLands)
    //         : handleOnCurrentLands(currentLands.filter(l => l.status.status_name === "Archived"))
    //
    //     setIsArchivedLand(!isArchivedLand)
    // }, [handleOnCurrentLands, isArchivedLand]);

    useEffect(() => {
        landStore.getAllLands(0, 20, ["name"], "asc")
            .then((data) => "result" in data ? handleOnCurrentLands(data.result) : "")
    }, [handleOnCurrentLands]);


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
                        <p className="header__archive"
                            // onClick={handleOnArchived}
                        >
                            {
                                isArchivedLand ? "Открыть активные" : "Открыть архив"
                            }
                        </p>
                    </div>
                    <MyInputWithPrefix inputStyle="header__search" prefixText="" labelStyle="header__label"
                                       value={searchLand} handleOnChange={(e) => handleOnSearchLand(e.target.value)}
                                       prefixStyle="header__search-text"/>
                </div>
                {
                    currentLands && currentLands.length !== 0
                        ?
                        <div className="landList__lands">
                            <table className="lands__table">
                                <thead>
                                <tr>
                                    <th>Статус</th>
                                    <th>Название</th>
                                    <th>Категория</th>
                                    <th>Кадстровый номер</th>
                                    <th>Правообладатель</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    currentLands.map((land, ind) =>
                                        <tr key={ind} className="lands__table-land"
                                            onClick={() => navigate(`/landCard?landCardId=${land.id}`)}>
                                            <td>{land.working_status}</td>
                                            <td>{land.name}</td>
                                            <td>{land.area_category}</td>
                                            <td>{land.cadastral_number}</td>
                                            <td>{land.owners[0].name}</td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                        :
                        <p className="landList__none">
                            Нет земельных участков
                        </p>
                }
                <div className="landList__pagination">
                    <p className="pagination__objects">
                        Объектов в списке: 20
                    </p>
                    <p className="pagination__pages">
                        Страница: 1
                    </p>
                </div>
            </div>
        </main>
    );
};

export default LandList;
