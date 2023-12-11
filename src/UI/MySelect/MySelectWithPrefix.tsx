import React, {ChangeEvent} from 'react';

interface MySelectWithPrefixProps {
    handleOnChange: (e: ChangeEvent<HTMLSelectElement>) => void,
    value: string | number | readonly string[] | undefined,
    prefixText: string,
    options: string[],
    optionsValues: string[],
    defaultOption: string,
    defaultOptionValue: string,
    prefixStyle?: string,
    selectStyle?: string,
    multiplySelect?: boolean,
    size?: number,
}

const MySelectWithPrefix: React.FC<MySelectWithPrefixProps> = ({
                                                                   handleOnChange,
                                                                   value,
                                                                   options,
                                                                   optionsValues,
                                                                   defaultOption,
                                                                   defaultOptionValue,
                                                                   prefixText,
                                                                   prefixStyle,
                                                                   selectStyle,
                                                                   multiplySelect,
                                                                   size,
                                                               }: MySelectWithPrefixProps) => {
    return (
        <label className="ui__label">
            <p className={`ui__label-prefix ${prefixStyle}`}>
                {prefixText}
            </p>
            <select value={value} onChange={e => handleOnChange(e)} className={`ui__label-select ${selectStyle}`}
                    multiple={multiplySelect}
                    size={size}>
                <option value={defaultOption} disabled>
                    {defaultOptionValue}
                </option>
                {
                    options.map((op, ind) =>
                        <option value={optionsValues[ind]} key={ind}>
                            {op}
                        </option>
                    )
                }
            </select>
        </label>
    );
};

export default MySelectWithPrefix;
