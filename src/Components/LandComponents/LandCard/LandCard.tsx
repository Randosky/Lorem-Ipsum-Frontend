import React, {useEffect} from 'react';
import Header from "../../../UI/Header/Header";
import "../../../Styles/Land/LandActionStyles.scss"
import landStore from "../../../Store/LandStore";
import {useSearchParams} from "react-router-dom";

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
                        <div className="item__infoBlock item__mainInfo">

                        </div>
                        <div className="item__infoBlock item__legalInfo">

                        </div>
                    </div>
                    <div className="item__row">
                        <div className="item__infoBlock item__objectsInfo">

                        </div>
                        <div className="item__infoBlock item__additionalInfo">

                        </div>
                    </div>
                    <div className="item__row">
                        <div className="item__infoBlock item__copyrightInfo">

                        </div>
                        <div className="item__infoBlock item__tasks">

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LandCard;
