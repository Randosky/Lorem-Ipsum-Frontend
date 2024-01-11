import React, {useCallback, useEffect, useState} from 'react';
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";
import ButtonMain from "../../../UI/MyButton/ButtonMain";
import MyMultiplySelectWithPrefix from "../../../UI/MySelect/MyMultiplySelectWithPrefix";
import landStore from "../../../Store/LandStore";

interface LegalInfoStageProps {
    land: ReturnedLandType,
}

const LegalInfoStage: React.FC<LegalInfoStageProps> = React.memo(({land}: LegalInfoStageProps) => {

    // Полученные дефолтные массивы (полные)
    const landPU = landStore.landLegalOptions?.permitted_uses || []
    const landRS = landStore.landLegalOptions?.limits || []
    // Полученные дефолтные имена
    const permittedUseOptions = landPU.map(u => u.name) || []
    const restrictionsOptions = landRS.map(l => l.name) || []
    // Полученные выбранные имена
    const landLegalInfoPermittedNames = landStore.selectedLandLegalInfo?.permitted_uses.map(u => u.name) || []
    const landLegalInfoLimitsNames = landStore.selectedLandLegalInfo?.limits.map(l => l.name) || []

    // Массив выбранных имен
    const [landPermittedUse, setLandPermittedUse] = useState<string[]>(landLegalInfoPermittedNames || []);
    const [landRestrictions, setLandRestrictions] = useState<string[]>(landLegalInfoLimitsNames || []);

    // Обработка выбранных имен
    const handleOnLandPermittedUse = useCallback((e: string[]) => setLandPermittedUse(e), [])
    const handleOnLandRestrictions = useCallback((e: string[]) => setLandRestrictions(e), [])

    // Показ всплывающего окна
    const [showPermittedUseSelect, setShowPermittedUseSelect] = useState(false);
    const [showRestrictionsSelect, setShowRestrictionsSelect] = useState(false);

    // Обработка показа всплывающего окна
    const handleOnShowPermittedUseSelect = useCallback((e: boolean) => {
        setShowPermittedUseSelect(e)
        setShowRestrictionsSelect(false)
    }, [])
    const handleOnShowRestrictionsSelect = useCallback((e: boolean) => {
        setShowPermittedUseSelect(false)
        setShowRestrictionsSelect(e)
    }, [])

    useEffect(() => {
        landStore.getLegalOptions().then()
    }, []);

    const [errorMsg, setErrorMsg] = useState(false);

    const handleOnSave = () => {
        if (landPermittedUse.length !== 0 && landRestrictions.length !== 0) {
            type objType = { name: string, id: string }[]

            const landPermittedUseObject: objType = []
            const landRestrictionsObject: objType = []

            landPU.map(pu => landPermittedUse.includes(pu.name) ? landPermittedUseObject.push(pu) : "")
            landRS.map(l => landRestrictions.includes(l.name) ? landRestrictionsObject.push(l) : "")

            landStore.updateAreaLegalInfo(land.id, {
                limits: landRestrictionsObject,
                permitted_uses: landPermittedUseObject
            }).then((result) => result ? landStore.updateIsLandInfoEditClicked("") : setErrorMsg(true))
        }
    }

    return (
        <div className="cardInfo__modal" onClick={() => {
            handleOnShowPermittedUseSelect(false)
            handleOnShowRestrictionsSelect(false)
        }} onKeyDown={(e) => e.key == 'Enter' ? handleOnSave() : ""}>
            {
                landPermittedUse.length === 0 || landRestrictions.length === 0
                    ?
                    <p className="cardInfo__modal-error">
                        Заполните все поля! Они не должны быть пустыми
                    </p>
                    : ""
            }
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
            </ul>
            <div className="cardInfo__modal-btn">
                <ButtonMain handleOnClick={handleOnSave}
                            btnText="Сохранить"/>
            </div>
        </div>
    );
});

export default LegalInfoStage;
