import React, {useCallback, useState} from 'react';
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";
import MyMultiplySelectWithPrefix from "../../../UI/MySelect/MyMultiplySelectWithPrefix";
import {objectOptions, permittedUseOptions, restrictionsOptions} from "../../../Helpers/LandHelper";
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import ButtonMain from "../../../UI/MyButton/ButtonMain";
import MySelectWithPrefix from "../../../UI/MySelect/MySelectWithPrefix";
import landStore from "../../../Store/LandStore";

interface ObjectsInfoStageProps {
    land: ReturnedLandType,
}

const CreateObjectStage: React.FC<ObjectsInfoStageProps> = (props: ObjectsInfoStageProps) => {

    const {land} = props

    const [landObjectName, setLandObjectName] = useState("")
    const [landObjectDescription, setLandObjectDescription] = useState("")
    const [landObjectCommissionedYear, setLandObjectCommissionedYear] = useState("")

    const handleOnLandObjectName = useCallback((e: string) => setLandObjectName(e), [])
    const handleOnLandObjectDescription = useCallback((e: string) => setLandObjectDescription(e), [])
    const handleOnLandObjectCommissionedYear = useCallback((e: string) => setLandObjectCommissionedYear(e), [])

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
                                       placeholder={new Date().getFullYear().toString()}
                                       type="number"
                                       handleOnChange={(e) => handleOnLandObjectCommissionedYear(e.target.value)}/>
                </li>
            </ul>
            <div className="cardInfo__modal-btn">
                <ButtonMain handleOnClick={() => landStore.updateIsLandInfoEditClicked("")}
                            btnText="Создать"/>
            </div>
        </div>
    )
};

export default CreateObjectStage;
