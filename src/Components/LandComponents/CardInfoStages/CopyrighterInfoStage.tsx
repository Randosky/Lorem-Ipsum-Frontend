import React, {useCallback, useState} from 'react';
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import ButtonMain from "../../../UI/MyButton/ButtonMain";
import landStore from "../../../Store/LandStore";

interface CopyrighterInfoStageProps {
    land: ReturnedLandType,
}

const CopyrighterInfoStage: React.FC<CopyrighterInfoStageProps> = ({land}: CopyrighterInfoStageProps) => {

    const ownerInd = landStore.isCopyrighterEditClicked

    const [landCopyrightHolder, setLandCopyrightHolder] = useState(land.owners[ownerInd].name || "");
    const [landCopyrightHolderEmail, setLandCopyrightHolderEmail] = useState(land.owners[ownerInd].email || "");
    const [landCopyrightHolderPhone, setLandCopyrightHolderPhone] = useState(land.owners[ownerInd].phone_number || "");

    const handleOnLandCopyrightHolder = useCallback((e: string) => setLandCopyrightHolder(e), [])
    const handleOnLandCopyrightHolderEmail = useCallback((e: string) => setLandCopyrightHolderEmail(e), [])
    const handleOnLandCopyrightHolderPhone = useCallback((e: string) => setLandCopyrightHolderPhone(e), [])

    const handleOnSave = () => landStore.updateOwner(land.owners[ownerInd].id, {
        name: landCopyrightHolder,
        location: land.owners[ownerInd].location,
        email: landCopyrightHolderEmail,
        phone_number: landCopyrightHolderPhone,
    })
        .then(() => landStore.updateIsCopyrighterEditClicked(-1))

    return (
        <div className="cardInfo__modal"
             onKeyDown={(e) => e.key == 'Enter' ? handleOnSave() : ""}>
            <ul className="cardInfo__modal-list">
                <li className="cardInfo__modal-item">
                    <MyInputWithPrefix inputStyle="landActions__item-input"
                                       prefixText="ФИО правообладателя" prefixStyle="landActions__item-prefix"
                                       value={landCopyrightHolder}
                                       type="text"
                                       handleOnChange={(e) => handleOnLandCopyrightHolder(e.target.value)}/>
                </li>
                <li className="cardInfo__modal-item">
                    <MyInputWithPrefix inputStyle="landActions__item-input"
                                       prefixText="Почта" prefixStyle="landActions__item-prefix"
                                       value={landCopyrightHolderEmail}
                                       type="email"
                                       handleOnChange={(e) => handleOnLandCopyrightHolderEmail(e.target.value)}/>
                </li>
                <li className="cardInfo__modal-item">
                    <MyInputWithPrefix inputStyle="landActions__item-input"
                                       prefixText="Телефон" prefixStyle="landActions__item-prefix"
                                       value={landCopyrightHolderPhone.slice(0, 15)}
                                       type="tel"
                                       placeholder="+7"
                                       handleOnChange={(e) => handleOnLandCopyrightHolderPhone(e.target.value)}/>
                </li>
            </ul>
            <div className="cardInfo__modal-btn">
                <ButtonMain handleOnClick={() => {
                    landStore.updateIsCopyrighterEditClicked(-1)
                    landStore.updateIsCopyrighterListClicked()
                }} btnText="Назад"/>
                <ButtonMain handleOnClick={handleOnSave} btnText="Сохранить"/>
            </div>
        </div>
    );
};

export default CopyrighterInfoStage;
