import React, {useCallback, useState} from 'react';
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";
import MyMultiplySelectWithPrefix from "../../../UI/MySelect/MyMultiplySelectWithPrefix";
import {permittedUseOptions, restrictionsOptions} from "../../../Helpers/LandHelper";
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import ButtonMain from "../../../UI/MyButton/ButtonMain";

interface AdditionalInfoStageProps {
    land: ReturnedLandType,
    handleOnClose: () => void,
}

const AdditionalInfoStage: React.FC<AdditionalInfoStageProps> = ({land, handleOnClose}: AdditionalInfoStageProps) => {

    const [landEngineeringNetwork, setLandEngineeringNetwork] = useState("");
    const [landTransport, setLandTransport] = useState("");
    const [landEconomy, setLandEconomy] = useState("");

    const handleOnLandEngineeringNetwork = useCallback((e: string) => setLandEngineeringNetwork(e), [])
    const handleOnLandTransport = useCallback((e: string) => setLandTransport(e), [])
    const handleOnLandEconomy = useCallback((e: string) => setLandEconomy(e), [])


    return (
        <div className="cardInfo__modal">
            <ul className="cardInfo__modal-list">
                <li className="cardInfo__modal-item">
                    <MyInputWithPrefix inputStyle="landActions__item-input"
                                       prefixText="Наличие инженерных сетей" prefixStyle="landActions__item-prefix"
                                       value={landEngineeringNetwork}
                                       type="string"
                                       handleOnChange={(e) => handleOnLandEngineeringNetwork(e.target.value)}/>
                </li>
                <li className="cardInfo__modal-item">
                    <MyInputWithPrefix inputStyle="landActions__item-input"
                                       prefixText="Наличие транспорта" prefixStyle="landActions__item-prefix"
                                       value={landTransport}
                                       type="string"
                                       handleOnChange={(e) => handleOnLandTransport(e.target.value)}/>
                </li>
                <li className="cardInfo__modal-item">
                    <MyInputWithPrefix inputStyle="landActions__item-input"
                                       prefixText="Экономика" prefixStyle="landActions__item-prefix"
                                       value={landEconomy}
                                       type="string"
                                       handleOnChange={(e) => handleOnLandEconomy(e.target.value)}/>
                </li>
            </ul>
            <div className="cardInfo__modal-btn">
                <ButtonMain handleOnClick={handleOnClose}
                            btnText="Сохранить"/>
            </div>
        </div>
    );
};

export default AdditionalInfoStage;
