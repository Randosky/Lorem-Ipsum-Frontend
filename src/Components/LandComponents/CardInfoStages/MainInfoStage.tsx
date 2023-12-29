import React, {useCallback, useState} from 'react';
import {categoryOptions} from "../../../Helpers/LandHelper";
import MySelectWithPrefix from "../../../UI/MySelect/MySelectWithPrefix";
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import "../../../Styles/Land/LandEditInfoStyles.scss"
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";
import ButtonMain from "../../../UI/MyButton/ButtonMain";
import landStore from "../../../Store/LandStore";
import {observer} from "mobx-react-lite";

interface MainInfoStageProps {
    land: ReturnedLandType
}

const MainInfoStage: React.FC<MainInfoStageProps> = ({land}: MainInfoStageProps) => {

    const [landSquare, setLandSquare] = useState(land.area_square || 0);
    const [landAddress, setLandAddress] = useState(land.address || "");
    const [landCategory, setLandCategory] = useState(land.area_category || "");

    const handleOnLandSquare = useCallback((e: number) => setLandSquare(e), [])
    const handleOnLandAddress = useCallback((e: string) => setLandAddress(e), [])
    const handleOnLandCategory = useCallback((e: string) => setLandCategory(e), [])

    const [showCategorySelect, setShowCategorySelect] = useState(false);
    const handleOnShowCategorySelect = useCallback((e: boolean) => setShowCategorySelect(e), [])

    return (
        <div className="cardInfo__modal" onClick={() => handleOnShowCategorySelect(false)}>
            <ul className="cardInfo__modal-list">
                <li className="cardInfo__modal-item" onClick={e => e.stopPropagation()}>
                    <MySelectWithPrefix showSelect={showCategorySelect}
                                        prefixText="Категория"
                                        inputValue={landCategory}
                                        selectOptions={categoryOptions}
                                        handleOnShowSelect={(e) => handleOnShowCategorySelect(e)}
                                        handleOnChangeInputValue={(e) => handleOnLandCategory(e)}/>
                </li>
                <li className="cardInfo__modal-item">
                    <MyInputWithPrefix prefixText="Площадь" type="number"
                                       value={landSquare}
                                       handleOnChange={(e) => handleOnLandSquare(Number(e.target.value))}/>
                </li>
                <li className="cardInfo__modal-item">
                    <MyInputWithPrefix inputStyle="landActions__item-input"
                                       prefixText="Адрес" prefixStyle="landActions__item-prefix"
                                       value={landAddress}
                                       handleOnChange={(e) => handleOnLandAddress(e.target.value)}/>
                </li>
            </ul>
            <div className="cardInfo__modal-btn">
                <ButtonMain handleOnClick={() => landStore.updateMainLandInfo(land.id, {
                    name: land.name,
                    cadastral_number: land.cadastral_number,
                    area_category: landCategory,
                    area_square: landSquare,
                    address: landAddress,
                    search_channel: land.search_channel,
                    working_status: land.working_status,
                    stage: land.stage,
                })
                    .then(() => landStore.updateIsLandInfoEditClicked(""))
                    .then(() => window.location.reload())}
                            btnText="Сохранить"/>
            </div>
        </div>
    );
};

export default MainInfoStage;
