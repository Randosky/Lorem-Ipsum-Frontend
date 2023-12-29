import React, {useCallback, useState} from 'react';
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";
import {permittedUseOptions, restrictionsOptions} from "../../../Helpers/LandHelper";
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import ButtonMain from "../../../UI/MyButton/ButtonMain";
import MyMultiplySelectWithPrefix from "../../../UI/MySelect/MyMultiplySelectWithPrefix";
import landStore from "../../../Store/LandStore";

interface LegalInfoStageProps {
    land: ReturnedLandType,
}

const LegalInfoStage: React.FC<LegalInfoStageProps> = ({land}: LegalInfoStageProps) => {

    const [landPermittedUse, setLandPermittedUse] = useState<string[]>([]);
    const [landRestrictions, setLandRestrictions] = useState<string[]>([]);
    const [landCost, setLandCost] = useState("");

    const handleOnLandPermittedUse = useCallback((e: string[]) => setLandPermittedUse(e), [])
    const handleOnLandRestrictions = useCallback((e: string[]) => setLandRestrictions(e), [])
    const handleOnLandCost = useCallback((e: string) => setLandCost(e), [])

    const [showPermittedUseSelect, setShowPermittedUseSelect] = useState(false);
    const [showRestrictionsSelect, setShowRestrictionsSelect] = useState(false);

    const handleOnShowPermittedUseSelect = useCallback((e: boolean) => {
        setShowPermittedUseSelect(e)
        setShowRestrictionsSelect(false)
    }, [])
    const handleOnShowRestrictionsSelect = useCallback((e: boolean) => {
        setShowPermittedUseSelect(false)
        setShowRestrictionsSelect(e)
    }, [])


    return (
        <div className="cardInfo__modal" onClick={() => {
            handleOnShowPermittedUseSelect(false)
            handleOnShowRestrictionsSelect(false)
        }}>
            <ul className="cardInfo__modal-list">
                <li className="cardInfo__modal-item" onClick={e => e.stopPropagation()}>
                    <MyMultiplySelectWithPrefix showSelect={showPermittedUseSelect}
                                                prefixText="Вид разрешенного использования"
                                                inputValue={landPermittedUse}
                                                selectOptions={permittedUseOptions}
                                                handleOnShowSelect={(e) => handleOnShowPermittedUseSelect(e)}
                                                handleOnChangeInputValue={(e) => handleOnLandPermittedUse(e)}/>
                </li>
                <li className="cardInfo__modal-item" onClick={e => e.stopPropagation()}>
                    <MyMultiplySelectWithPrefix showSelect={showRestrictionsSelect}
                                                prefixText="Ограничения и обременения"
                                                inputValue={landRestrictions}
                                                selectOptions={restrictionsOptions}
                                                handleOnShowSelect={(e) => handleOnShowRestrictionsSelect(e)}
                                                handleOnChangeInputValue={(e) => handleOnLandRestrictions(e)}/>
                </li>
                <li className="cardInfo__modal-item">
                    <MyInputWithPrefix inputStyle="landActions__item-input"
                                       prefixText="Кадастровая стоимость" prefixStyle="landActions__item-prefix"
                                       value={landCost}
                                       type="number"
                                       handleOnChange={(e) => handleOnLandCost(e.target.value)}/>
                </li>
            </ul>
            <div className="cardInfo__modal-btn">
                <ButtonMain handleOnClick={() => landStore.updateIsLandInfoEditClicked("")}
                            btnText="Сохранить"/>
            </div>
        </div>
    );
};

export default LegalInfoStage;
