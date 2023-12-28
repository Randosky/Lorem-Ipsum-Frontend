import React, {useCallback, useState} from 'react';
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import ButtonMain from "../../../UI/MyButton/ButtonMain";

interface CopyrighterInfoStageProps {
    land: ReturnedLandType,
    handleOnClose: () => void,
}

const CopyrighterInfoStage: React.FC<CopyrighterInfoStageProps> = ({land, handleOnClose}: CopyrighterInfoStageProps) => {

    const [landCopyrightHolder, setLandCopyrightHolder] = useState(land.owners[0].name || "");
    const [landCopyrightHolderEmail, setLandCopyrightHolderEmail] = useState(land.owners[0].email || "");
    const [landCopyrightHolderPhone, setLandCopyrightHolderPhone] = useState(land.owners[0].phone_number || "");

    const handleOnLandCopyrightHolder = useCallback((e: string) => setLandCopyrightHolder(e), [])
    const handleOnLandCopyrightHolderEmail = useCallback((e: string) => setLandCopyrightHolderEmail(e), [])
    const handleOnLandCopyrightHolderPhone = useCallback((e: string) => setLandCopyrightHolderPhone(e), [])

    return (
        <div className="cardInfo__modal">
            <ul className="cardInfo__modal-list">
                <li className="cardInfo__modal-item">
                    <MyInputWithPrefix inputStyle="landActions__item-input"
                                       prefixText="Правообладатель" prefixStyle="landActions__item-prefix"
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
                                       handleOnChange={(e) => handleOnLandCopyrightHolderPhone(e.target.value)}/>
                </li>
            </ul>
            <div className="cardInfo__modal-btn">
                <ButtonMain handleOnClick={handleOnClose}
                            btnText="Сохранить"/>
            </div>
        </div>
    );
};

export default CopyrighterInfoStage;
