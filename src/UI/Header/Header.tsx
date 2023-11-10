import React from 'react';
import Logo from "../../Assets/Svg/Logo";
import ButtonContrast from "../MyButton/ButtonContrast";
import "../../Styles/UI.scss"

const Header: React.FC = () => {
    return (
        <header className="ui__header">
            <Logo/>
            <ButtonContrast btnText="LOG OUT"
                            btnStyle="header__button-contrast"
                            textStyle="header__button-contrast-text"
                            handleOnClick={() => {}}/>
        </header>
    );
};

export default Header;
