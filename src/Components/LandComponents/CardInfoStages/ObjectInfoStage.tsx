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

    const [landObjectName, setLandObjectName] = useState(land.area_buildings[objInd].name || "")
    const [landObjectDescription, setLandObjectDescription] = useState(land.area_buildings[objInd].description || "")
    const [landObjectCommissionedYear, setLandObjectCommissionedYear] =
        useState(land.area_buildings[objInd].commissioning_year.toString() || "")


    const handleOnLandObjectName = useCallback((e: string) => setLandObjectName(e), [])
    const handleOnLandObjectDescription = useCallback((e: string) => setLandObjectDescription(e), [])
    const handleOnLandObjectCommissionedYear = useCallback((e: string) => setLandObjectCommissionedYear(e), [])

    const [showObjectSelect, setShowObjectSelect] = useState(false);
    const handleOnShowObjectSelect = useCallback((e: boolean) => setShowObjectSelect(e), [])

    const handleOnSave = () => landStore.updateBuilding(land.area_buildings[objInd].id,
        {
            name: landObjectName,
            description: landObjectDescription,
            commissioning_year: Number(landObjectCommissionedYear),
        })
        .then(() => landStore.updateIsObjectEditClicked(-1))

    return (
        <div className="cardInfo__modal" onClick={() => handleOnShowObjectSelect(false)}
             onKeyDown={(e) => e.key == 'Enter' ? handleOnSave() : ""}>
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
                                       placeholder={new Date().getFullYear().toString()}
                                       prefixText="Год введения в эксплуатацию" prefixStyle="landActions__item-prefix"
                                       value={landObjectCommissionedYear}
                                       type="number"
                                       handleOnChange={(e) => handleOnLandObjectCommissionedYear(e.target.value)}/>
                </li>
            </ul>
            <div className="cardInfo__modal-btn">
                <ButtonMain handleOnClick={handleOnSave} btnText="Редактировать"/>
            </div>
        </div>
    );
};

export default ObjectInfoStage;
