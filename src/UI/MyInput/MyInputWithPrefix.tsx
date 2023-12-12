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
};

const MyInputWithPrefix: React.FC<MyInputWithPrefixProps> = ({
                                                                 handleOnChange,
                                                                 value,
                                                                 placeholder,
                                                                 type,
                                                                 min,
                                                                 max,
                                                                 prefixText,
                                                                 prefixStyle,
                                                                 inputStyle,
                                                                 pattern,
                                                                 labelStyle,
                                                             }: MyInputWithPrefixProps) => {
    return (
        <label className={"ui__label" + " " + labelStyle}>
            <p className={`ui__label-prefix ${prefixStyle}`}>
                {prefixText}
            </p>
            <input min={min} max={max} type={type} value={value} placeholder={placeholder}
                   pattern={pattern}
                   onChange={e => handleOnChange(e)} className={`ui__label-input ${inputStyle}`}/>
        </label>
    );
};

export default MyInputWithPrefix;