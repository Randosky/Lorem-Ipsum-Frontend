import React from 'react';
import Logo from "../../Assets/Svg/Logo";
import ButtonContrast from "../MyButton/ButtonContrast";
import "../../Styles/UI.scss"

const Header: React.FC = () => {
    return (
        <header className="ui__header">
            <div className="header__container">
                <Logo/>
                <ButtonContrast btnText=""
                                btnStyle="header__button-contrast"
                                textStyle="header__button-contrast-text"
                                handleOnClick={() => {}}/>
            </div>
        </header>
    );
};

export default Header;
