import React from 'react';

type ButtonMainPropsType = {
    handleOnClick: () => void,
    btnStyle?: string,
    textStyle?: string,
    btnText?: string,
};

const ButtonMain: React.FC<ButtonMainPropsType> = (props: ButtonMainPropsType) => {
    const {handleOnClick, btnStyle, btnText, textStyle} = props

    return (
        <button onClick={handleOnClick} className={"ui__button-main " + btnStyle}>
            <span className={textStyle}>
                {btnText}
            </span>
        </button>
    );
};

export default ButtonMain;
