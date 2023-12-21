import React, {useEffect} from 'react';
import Header from "../../../UI/Header/Header";
import "../../../Styles/Land/LandActionStyles.scss"
import landStore from "../../../Store/LandStore";
import {useSearchParams} from "react-router-dom";
import ListCardInfo from "../../../UI/ListCardInfo/ListCardInfo";
import {
    additionalInfoTitles,
    copyrightInfoTitles,
    legalInfoTitles,
    mainInfoTitles,
    objectsInfoTitles, tasksInfoTitles
} from "../../../Helpers/LandHelper";

const LandCard: React.FC = () => {

    const [params] = useSearchParams()
    const landCardId = params.get("landCardId")

    useEffect(() => {
        landStore.getCardInfo(landCardId || "").then()
    }, [landCardId])

    return (
        <main className="landCard">
            <Header/>
            <div className="landCard__container">
                <div className="landCard__item">
                    <div className="item__header">
                        <h1 className="item__title">
                            Земельный участок "Тест"
                        </h1>
                    </div>
                    <div className="item__row">
                        <ListCardInfo itemBlockStyle="item__mainInfo" itemH2="Основная информация"
                                      itemListTitles={mainInfoTitles}
                                      itemListValues={mainInfoTitles}/>
                        <ListCardInfo itemBlockStyle="item__legalInfo" itemH2="Юридические сведения"
                                      itemListTitles={legalInfoTitles}
                                      itemListValues={legalInfoTitles}/>
                    </div>
                    <div className="item__row">
                        <ListCardInfo itemBlockStyle="item__objectsInfo" itemH2="Информация об объектах"
                                      itemListTitles={objectsInfoTitles}
                                      itemListValues={objectsInfoTitles}/>
                        <ListCardInfo itemBlockStyle="item__additionalInfo" itemH2="Дополнительная информация"
                                      itemListTitles={additionalInfoTitles}
                                      itemListValues={additionalInfoTitles}/>
                    </div>
                    <div className="item__row">
                        <ListCardInfo itemBlockStyle="item__copyrightInfo" itemH2="Данные о правообладателе"
                                      itemListTitles={copyrightInfoTitles}
                                      itemListValues={copyrightInfoTitles}/>
                        <ListCardInfo itemBlockStyle="item__tasks" itemH2="Задачи"
                                      itemListTitles={tasksInfoTitles}
                                      itemListValues={tasksInfoTitles}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LandCard;
