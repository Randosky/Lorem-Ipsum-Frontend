import React, {useEffect} from 'react';
import Header from "../../../UI/Header/Header";
import "../../../Styles/Land/LandActionStyles.scss"
import landStore from "../../../Store/LandStore";
import {useSearchParams} from "react-router-dom";
import ButtonMain from "../../../UI/MyButton/ButtonMain";

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
                </div>
            </div>
        </main>
    );
};

export default LandCard;
