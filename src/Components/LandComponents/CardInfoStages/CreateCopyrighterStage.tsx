import React, {useCallback, useState} from 'react';
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";
import landStore from "../../../Store/LandStore";
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import ButtonMain from "../../../UI/MyButton/ButtonMain";

interface CreateCopyrighterStageProps {
    land: ReturnedLandType,
}

const CreateCopyrighterStage: React.FC<CreateCopyrighterStageProps> = ({land}: CreateCopyrighterStageProps) => {

    const [landCopyrightHolder, setLandCopyrightHolder] = useState("");
    const [landCopyrightHolderEmail, setLandCopyrightHolderEmail] = useState("");
    const [landCopyrightHolderPhone, setLandCopyrightHolderPhone] = useState("");

    const handleOnLandCopyrightHolder = useCallback((e: string) => setLandCopyrightHolder(e), [])
    const handleOnLandCopyrightHolderEmail = useCallback((e: string) => setLandCopyrightHolderEmail(e), [])
    const handleOnLandCopyrightHolderPhone = useCallback((e: string) => setLandCopyrightHolderPhone(e), [])

    const handleOnSave = () => landStore.addOwner(land.id, {
        name: landCopyrightHolder,
        location: "Нет данных",
        email: landCopyrightHolderEmail,
        phone_number: landCopyrightHolderPhone,
    })
        .then(() => landStore.updateIsLandInfoEditClicked(""))

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
                                       value={landCopyrightHolderPhone}
                                       type="tel"
                                       placeholder="+7"
                                       handleOnChange={(e) => handleOnLandCopyrightHolderPhone(e.target.value)}/>
                </li>
            </ul>
            <div className="cardInfo__modal-btn">
                <ButtonMain handleOnClick={handleOnSave} btnText="Добавить"/>
            </div>
        </div>
    );
};

export default CreateCopyrighterStage;
