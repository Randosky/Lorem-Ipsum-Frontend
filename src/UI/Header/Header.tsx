import React from 'react';
import Logo from "../../Assets/Svg/Logo";
import ButtonContrast from "../MyButton/ButtonContrast";
import "../../Styles/UI.scss"
import {useNavigate} from "react-router-dom";
import {landActionTypes} from "../../Helpers/LandHelper";

const Header: React.FC = () => {
    const navigate = useNavigate()

    return (
        <header className="ui__header">
            <div className="header__container">
                <div className="header__left">
                    <div onClick={() => navigate("/personalArea")}>
                        <Logo/>
                    </div>
                    <ButtonContrast btnText="Добавить"
                                    handleOnClick={() => navigate(`/landAction?actionType=${landActionTypes[0]}`)}
                                    btnStyle="header__left-button header__left-add"/>
                    <ButtonContrast btnText="Перейти"
                                    handleOnClick={() => navigate("/landList")}
                                    btnStyle="header__left-button header__left-landList"/>
                </div>
                <ButtonContrast btnText=""
                                btnStyle="header__button-contrast"
                                textStyle="header__button-contrast-text"
                                handleOnClick={() => navigate("/authentication")}/>
            </div>
        </header>
    );
};

export default Header;
