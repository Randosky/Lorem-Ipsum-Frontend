import React, {useCallback, useState} from 'react';
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";
import landStore from "../../../Store/LandStore";
import ButtonMain from "../../../UI/MyButton/ButtonMain";
import MySelectWithPrefix from "../../../UI/MySelect/MySelectWithPrefix";
import {objectOptions} from "../../../Helpers/LandHelper";
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";

interface ObjectInfoStageProps {
    land: ReturnedLandType,
}

const ObjectInfoStage: React.FC<ObjectInfoStageProps> = (props: ObjectInfoStageProps) => {

    const {land} = props
    const objInd = landStore.isObjectEditClicked

    const [landObjectName, setLandObjectName] = useState<string>(land.area_buildings[objInd].name || "")
    const [landObjectDescription, setLandObjectDescription] = useState<string>(land.area_buildings[objInd].description || "")
    const [landObjectCommissionedYear, setLandObjectCommissionedYear] = useState<number>(land.area_buildings[objInd].commissioning_year || new Date().getFullYear())


    const handleOnLandObjectName = useCallback((e: string) => setLandObjectName(e), [])
    const handleOnLandObjectDescription = useCallback((e: string) => setLandObjectDescription(e), [])
    const handleOnLandObjectCommissionedYear = useCallback((e: number) => setLandObjectCommissionedYear(e), [])

    const [showObjectSelect, setShowObjectSelect] = useState(false);
    const handleOnShowObjectSelect = useCallback((e: boolean) => setShowObjectSelect(e), [])

    return (
        <div className="cardInfo__modal" onClick={() => handleOnShowObjectSelect(false)}>
            <ul className="cardInfo__modal-list">
                <li className="cardInfo__modal-item" onClick={e => e.stopPropagation()}>
                    <MySelectWithPrefix showSelect={showObjectSelect} selectOptions={objectOptions}
                                        handleOnShowSelect={(e) => handleOnShowObjectSelect(e)}
                                        inputValue={landObjectName}
                                        prefixText="Название"
                                        handleOnChangeInputValue={(e) => handleOnLandObjectName(e)}/>
                </li>
                <li className="cardInfo__modal-item">
                    <p className="cardInfo__modal-prefix">Описание</p>
                    <textarea className="cardInfo__modal-textarea" value={landObjectDescription}
                              onChange={(e) => handleOnLandObjectDescription(e.target.value)}/>
                </li>
                <li className="cardInfo__modal-item">
                    <MyInputWithPrefix inputStyle="landActions__item-input"
                                       prefixText="Год введения в эксплуатацию" prefixStyle="landActions__item-prefix"
                                       value={landObjectCommissionedYear}
                                       type="number"
                                       handleOnChange={(e) => handleOnLandObjectCommissionedYear(Number(e.target.value))}/>
                </li>
            </ul>
            <div className="cardInfo__modal-btn">
                <ButtonMain handleOnClick={() => landStore.updateBuilding(land.area_buildings[objInd].id,
                    {
                        name: landObjectName,
                        description: landObjectDescription,
                        commissioning_year: landObjectCommissionedYear,
                    })
                    .then(() => landStore.updateIsObjectEditClicked(-1))
                    .then(() => window.location.reload())}
                            btnText="Редактировать"/>
            </div>
        </div>
    );
};

export default ObjectInfoStage;
