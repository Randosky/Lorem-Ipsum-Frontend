import React, {useCallback, useState} from 'react';
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";
import MyMultiplySelectWithPrefix from "../../../UI/MySelect/MyMultiplySelectWithPrefix";
import {permittedUseOptions, restrictionsOptions} from "../../../Helpers/LandHelper";
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import ButtonMain from "../../../UI/MyButton/ButtonMain";
import landStore from "../../../Store/LandStore";

interface AdditionalInfoStageProps {
    land: ReturnedLandType,
}

const AdditionalInfoStage: React.FC<AdditionalInfoStageProps> = ({land}: AdditionalInfoStageProps) => {

    const [landEngineeringNetwork, setLandEngineeringNetwork] = useState(land.extra_data?.engineering_networks || "");
    const [landTransport, setLandTransport] = useState(land.extra_data?.transport || "");
    const [landEconomy, setLandEconomy] = useState(land.extra_data?.result || "");

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
                                       type="text"
                                       handleOnChange={(e) => handleOnLandEngineeringNetwork(e.target.value)}/>
                </li>
                <li className="cardInfo__modal-item">
                    <MyInputWithPrefix inputStyle="landActions__item-input"
                                       prefixText="Наличие транспорта" prefixStyle="landActions__item-prefix"
                                       value={landTransport}
                                       type="text"
                                       handleOnChange={(e) => handleOnLandTransport(e.target.value)}/>
                </li>
                <li className="cardInfo__modal-item">
                    <MyInputWithPrefix inputStyle="landActions__item-input"
                                       prefixText="Экономика" prefixStyle="landActions__item-prefix"
                                       value={landEconomy}
                                       type="text"
                                       handleOnChange={(e) => handleOnLandEconomy(e.target.value)}/>
                </li>
            </ul>
            <div className="cardInfo__modal-btn">
                {
                    land.extra_data?.id
                        ?
                        <ButtonMain handleOnClick={() => landStore.updateExtraData(land.extra_data?.id, {
                            engineering_networks: landEngineeringNetwork,
                            transport: landTransport,
                            result: landEconomy,
                        })
                            .then(() => landStore.updateIsLandInfoEditClicked(""))
                            .then(() => window.location.reload())} btnText="Сохранить"/>
                        :
                        <ButtonMain handleOnClick={() => landStore.createExtraData(land.id, {
                            engineering_networks: landEngineeringNetwork,
                            transport: landTransport,
                            result: landEconomy,
                        })
                            .then(() => landStore.updateIsLandInfoEditClicked(""))
                            .then(() => window.location.reload())} btnText="Сохранить"/>
                }

            </div>
        </div>
    );
};

export default AdditionalInfoStage;
