import React, {useEffect} from 'react';
import Header from "../../../UI/Header/Header";
import "../../../Styles/Land/LandActionStyles.scss"
import landStore from "../../../Store/LandStore";
import {useParams} from "react-router-dom";

const LandCard: React.FC = () => {

    const {landCardId} = useParams()

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
