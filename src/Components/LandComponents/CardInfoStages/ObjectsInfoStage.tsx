import React, {useCallback, useState} from 'react';
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";
import MyMultiplySelectWithPrefix from "../../../UI/MySelect/MyMultiplySelectWithPrefix";
import {objectOptions, permittedUseOptions, restrictionsOptions} from "../../../Helpers/LandHelper";
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import ButtonMain from "../../../UI/MyButton/ButtonMain";
import MySelectWithPrefix from "../../../UI/MySelect/MySelectWithPrefix";

interface ObjectsInfoStageProps {
    land: ReturnedLandType,
    handleOnClose: () => void,
}

const ObjectsInfoStage: React.FC<ObjectsInfoStageProps> = ({land, handleOnClose}: ObjectsInfoStageProps) => {
    const [landObjectName, setLandObjectName] = useState<string>("");
    const [landObjectDescription, setLandObjectDescription] = useState<string>("");
    const [landObjectAddress, setLandObjectAddress] = useState<string>("");
    const [landObjectCommissionedYear, setLandObjectCommissionedYear] = useState<string>("");

    const handleOnLandObjectName = useCallback((e: string) => setLandObjectName(e), [])
    const handleOnLandObjectDescription = useCallback((e: string) => setLandObjectDescription(e), [])
    const handleOnLandObjectAddress = useCallback((e: string) => setLandObjectAddress(e), [])
    const handleOnLandObjectCommissionedYear = useCallback((e: string) => setLandObjectCommissionedYear(e), [])

    const [showObjectSelect, setShowObjectSelect] = useState(false);
    const handleOnShowObjectSelect = useCallback((e: boolean) => setShowObjectSelect(e), [])


    return (
        <div className="cardInfo__modal" onClick={() => handleOnShowObjectSelect(false)}>
            <ul className="cardInfo__modal-list">
                <li className="cardInfo__modal-item" onClick={e => e.stopPropagation()}>
                    <MySelectWithPrefix showSelect={showObjectSelect} selectOptions={objectOptions}
                                        handleOnShowSelect={(e) => handleOnShowObjectSelect(e)}
                                        prefixText="Название"
                                        handleOnChangeInputValue={(e) => handleOnLandObjectName(e)}/>
                </li>
                <li className="cardInfo__modal-item">
                    <p className="cardInfo__modal-prefix">Описание</p>
                    <textarea className="cardInfo__modal-textarea" value={landObjectDescription}
                              onChange={(e) => handleOnLandObjectDescription(e.target.value)}/>
                </li>
            </ul>
            <div className="cardInfo__modal-row">
                <div className="cardInfo__modal-block">
                    <MyInputWithPrefix inputStyle="landActions__item-input"
                                       prefixText="Адрес" prefixStyle="landActions__item-prefix"
                                       value={landObjectAddress}
                                       handleOnChange={(e) => handleOnLandObjectAddress(e.target.value)}/>
                </div>
                <div className="cardInfo__modal-block">
                    <MyInputWithPrefix inputStyle="landActions__item-input"
                                       prefixText="Год введения в эксплуатацию" prefixStyle="landActions__item-prefix"
                                       value={landObjectCommissionedYear}
                                       type="date"
                                       handleOnChange={(e) => handleOnLandObjectCommissionedYear(e.target.value)}/>
                </div>
            </div>
            <div className="cardInfo__modal-btn">
                <ButtonMain handleOnClick={handleOnClose}
                            btnText="Создать"/>
            </div>
        </div>
    )
};

export default ObjectsInfoStage;
