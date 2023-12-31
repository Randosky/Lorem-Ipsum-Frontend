import React, {ChangeEvent} from 'react';
import "../../Styles/UI.scss"

type MyInputWithPrefixProps = {
    handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void,
    value: string | number | readonly string[] | undefined,
    placeholder?: string,
    type?: string,
    min?: string | number,
    max?: string | number,
    prefixText: string,
    prefixStyle?: string,
    inputStyle?: string,
    pattern?: string,
    labelStyle?: string,
    isReadOnly?: boolean,
    errorStyle?: string,
    errorText?: string,
};

const MyInputWithPrefix: React.FC<MyInputWithPrefixProps> = props => {
    const {
        handleOnChange,
        value, placeholder, type, min, max, prefixText, prefixStyle, inputStyle, pattern, labelStyle,
        isReadOnly, errorStyle, errorText
    } = props

    return (
        <label className={"ui__label" + " " + labelStyle}>
            <p className={errorStyle}>
                {errorText ? errorText : ""}
            </p>
            <p className={`ui__label-prefix ${prefixStyle}`}>
                {prefixText}
            </p>
            <input min={min} max={max} type={type} value={value} placeholder={placeholder}
                   readOnly={isReadOnly}
                   pattern={pattern}
                   onChange={e => handleOnChange(e)}
                   className={`ui__label-input ${inputStyle} ${isReadOnly ? "ui__input-readonly" : ""}`}/>
        </label>
    );
};

export default MyInputWithPrefix;
