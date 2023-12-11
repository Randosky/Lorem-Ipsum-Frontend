import React from 'react';
import Header from "../../../UI/Header/Header";
import "../../../Styles/Land/LandActionStyles.scss"

interface LandCardProps {

}

const LandCard: React.FC<LandCardProps> = (props: LandCardProps) => {
    return (
        <main className="landCard">
            <Header/>
            <div className="landCard__container">

            </div>
        </main>
    );
};

export default LandCard;
