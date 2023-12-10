import React from 'react';
import Logo from "../../Assets/Svg/Logo";
import ButtonContrast from "../MyButton/ButtonContrast";
import "../../Styles/UI.scss"
import {useNavigate} from "react-router-dom";

const Header: React.FC = () => {
    const navigate = useNavigate()

    return (
        <header className="ui__header">
            <div className="header__container">
                <Logo/>
                <ButtonContrast btnText=""
                                btnStyle="header__button-contrast"
                                textStyle="header__button-contrast-text"
                                handleOnClick={() => navigate("/authentication")}/>
            </div>
        </header>
    );
};

export default Header;
