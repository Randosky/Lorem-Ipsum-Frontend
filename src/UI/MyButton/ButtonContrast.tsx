import React from 'react';
import "../../Styles/UI.scss"

type ButtonContrastPropsType = {
    handleOnClick: () => void,
    btnStyle?: string,
    textStyle?: string,
    btnText?: string,
};

const ButtonContrast: React.FC<ButtonContrastPropsType> = (props: ButtonContrastPropsType) => {
    const {handleOnClick, btnStyle, btnText, textStyle} = props

    return (
        <button onClick={handleOnClick} className={"ui__button-contrast " + btnStyle}>
            <span className={textStyle}>
                {btnText}
            </span>
        </button>
    );
};

export default ButtonContrast;
