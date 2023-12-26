import React, {useCallback, useState} from 'react';
import MyInputWithPrefix from "../MyInput/MyInputWithPrefix";
import "../../Styles/UI.scss"

interface MyMultiplySelectProps {
    showSelect: boolean,
    handleOnShowSelect: (e: boolean) => void,
    handleOnChangeInputValue: (e: string[]) => void,
    selectOptions: string[],
    prefixText: string,
}

const MyMultiplySelectWithPrefix: React.FC<MyMultiplySelectProps> = (props: MyMultiplySelectProps) => {
    const {showSelect, handleOnShowSelect, handleOnChangeInputValue, selectOptions, prefixText} = props

    const [inputValueLocal, setInputValueLocal] = useState<string[]>([]);
    const handleOnInputValueLocal = useCallback((ind: number) => {
        const objToAdd = selectOptions[ind]
        const optionsArray = inputValueLocal

        if (optionsArray.includes(objToAdd)) {
            const objInd = optionsArray.findIndex(l => l === objToAdd)
            optionsArray.splice(objInd, 1)
            setInputValueLocal([...optionsArray])
            handleOnChangeInputValue([...optionsArray])
        } else {
            setInputValueLocal([...optionsArray, objToAdd])
            handleOnChangeInputValue([...optionsArray, objToAdd])
        }

    }, [handleOnChangeInputValue, inputValueLocal, selectOptions])

    return (
        <div>
            <div onClick={() => handleOnShowSelect(!showSelect)} className="ui__multiply-main">
                <MyInputWithPrefix inputStyle="ui__multiply-input"
                                   prefixText={prefixText} prefixStyle=""
                                   value={inputValueLocal}
                                   handleOnChange={() => {
                                   }}/>
            </div>
            {
                showSelect
                    ?
                    <div className="ui__multiply-popup">
                        <div className="popup__header">
                            <h2 className="popup__title">
                                {prefixText}
                            </h2>
                            <div className="popup__close"
                                 onClick={(e) => {
                                     e.stopPropagation()
                                     handleOnShowSelect(false)
                                 }}>
                                X
                            </div>
                        </div>
                        <div className="popup__objects">
                            {
                                selectOptions.map((opt, ind) =>
                                    <div onClick={() => handleOnInputValueLocal(ind)}
                                         key={ind}
                                         className={`popup__object 
                                                         ${inputValueLocal.includes(selectOptions[ind])
                                             ? "popup__object-selected" : ""
                                         }`}
                                    >
                                        {opt}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    : ""
            }
        </div>
    );
};

export default MyMultiplySelectWithPrefix;
