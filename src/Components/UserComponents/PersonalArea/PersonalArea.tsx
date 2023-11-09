import React from 'react';
import "../../../Styles/PersonalArea/PersonalArea.scss"
import PersonalAreaUserInfo from "./PersonalAreaUserInfo";
import PersonalAreaUserAbilities from "./PersonalAreaUserAbilities";

const PersonalArea: React.FC = () => {
    return (
        <main className="personalArea">
            <div className="personalArea__container">
                <PersonalAreaUserInfo/>
                <PersonalAreaUserAbilities/>
            </div>
        </main>
    );
};

export default PersonalArea;
