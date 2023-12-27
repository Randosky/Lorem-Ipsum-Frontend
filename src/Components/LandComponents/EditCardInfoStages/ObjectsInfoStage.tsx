import React, {useCallback, useState} from 'react';
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";
import MyMultiplySelectWithPrefix from "../../../UI/MySelect/MyMultiplySelectWithPrefix";
import {objectOptions, permittedUseOptions, restrictionsOptions} from "../../../Helpers/LandHelper";
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import ButtonMain from "../../../UI/MyButton/ButtonMain";

interface ObjectsInfoStageProps {
    land: ReturnedLandType,
    handleOnClose: () => void,
}

const ObjectsInfoStage: React.FC<ObjectsInfoStageProps> = ({land, handleOnClose}: ObjectsInfoStageProps) => {
    const [landObject, setLandObject] = useState<string[]>([]);

    const handleOnLandObject = useCallback((objects: string[]) => setLandObject(objects), [])

    const [showObjectSelect, setShowObjectSelect] = useState(false);

    const handleOnShowObjectSelect = useCallback((e: boolean) => setShowObjectSelect(e), [])


    return (
        <div className="editInfo__modal" onClick={() => handleOnShowObjectSelect(false)}>
            <ul className="editInfo__modal-list">
                <li className="editInfo__modal-item" onClick={e => e.stopPropagation()}>
                    <MyMultiplySelectWithPrefix showSelect={showObjectSelect} selectOptions={objectOptions}
                                                handleOnShowSelect={(e) => handleOnShowObjectSelect(e)}
                                                prefixText="Объект"
                                                handleOnChangeInputValue={(e) => handleOnLandObject(e)}/>
                </li>
            </ul>
            <div className="editInfo__modal-btn">
                <ButtonMain handleOnClick={handleOnClose}
                            btnText="Сохранить"/>
            </div>
        </div>
    )
};

export default ObjectsInfoStage;
