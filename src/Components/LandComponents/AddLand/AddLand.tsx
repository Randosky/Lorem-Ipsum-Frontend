import React, {useCallback, useEffect, useState} from 'react';
import Header from "../../../UI/Header/Header";
import "../../../Styles/Land/LandActionStyles.scss"
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import ButtonMain from "../../../UI/MyButton/ButtonMain";
import landStore from "../../../Store/LandStore";
import MySelectWithPrefix from "../../../UI/MySelect/MySelectWithPrefix";
import {
    categoryOptions,
    objectOptions,
    searchChannelOptions,
} from "../../../Helpers/LandHelper";
import MyMultiplySelectWithPrefix from "../../../UI/MySelect/MyMultiplySelectWithPrefix";
import {useNavigate} from "react-router-dom";
import authStore from "../../../Store/AuthStore";

const AddLand: React.FC = () => {
    const [landTitle, setLandTitle] = useState("");
    const [landCadastrial, setLandCadastrial] = useState("");
    const [landSquare, setLandSquare] = useState("");
    const [landAddress, setLandAddress] = useState("");
    const [landCategory, setLandCategory] = useState("");
    const [landObject, setLandObject] = useState<string[]>([]);
    const [landSearchChannel, setLandSearchChannel] = useState("");
    const [landCopyrightHolder, setLandCopyrightHolder] = useState("");
    const [landCopyrightHolderEmail, setLandCopyrightHolderEmail] = useState("");
    const [landCopyrightHolderPhone, setLandCopyrightHolderPhone] = useState("");
    const [showObjectSelect, setShowObjectSelect] = useState(false);
    const [showCategorySelect, setShowCategorySelect] = useState(false);
    const [showChannelSelect, setShowChannelSelect] = useState(false);

    const handleOnLandTitle = useCallback((e: string) => setLandTitle(e), [])
    const handleOnLandCadastrial = useCallback((e: string) => {
        if (!/[a-zA-Zа-яА-Я]/.test(e))
            setLandCadastrial(e)
    }, [])
    const handleOnLandSquare = useCallback((e: string) => setLandSquare(e), [])
    const handleOnLandAddress = useCallback((e: string) => setLandAddress(e), [])
    const handleOnLandCategory = useCallback((e: string) => setLandCategory(e), [])
    const handleOnLandObject = useCallback((objects: string[]) => setLandObject(objects), [])
    const handleOnLandSearchChannel = useCallback((e: string) => setLandSearchChannel(e), [])
    const handleOnLandCopyrightHolder = useCallback((e: string) => setLandCopyrightHolder(e), [])
    const handleOnLandCopyrightHolderEmail = useCallback((e: string) => setLandCopyrightHolderEmail(e), [])
    const handleOnLandCopyrightHolderPhone = useCallback((e: string) => setLandCopyrightHolderPhone(e), [])

    const handleOnShowObjectSelect = useCallback((e: boolean) => {
        setShowCategorySelect(false)
        setShowChannelSelect(false)
        setShowObjectSelect(e)
    }, [])
    const handleOnShowCategorySelect = useCallback((e: boolean) => {
        setShowCategorySelect(e)
        setShowChannelSelect(false)
        setShowObjectSelect(false)
    }, [])
    const handleOnShowChannelSelect = useCallback((e: boolean) => {
        setShowCategorySelect(false)
        setShowChannelSelect(e)
        setShowObjectSelect(false)
    }, [])

    const navigate = useNavigate()

    return (
        <main className="landActions"
              onClick={() => {
                  handleOnShowObjectSelect(false)
                  handleOnShowCategorySelect(false)
                  handleOnShowChannelSelect(false)
              }}>
            <Header/>
            <div className="landActions__container">
                <h1 className="landActions__title">
                    Добавление земельного участка
                </h1>
                <div className="landActions__lists">
                    <ul className="landActions__list">
                        <li className="landActions__item">
                            <MyInputWithPrefix prefixText="Название" value={landTitle}
                                               handleOnChange={(e) => handleOnLandTitle(e.target.value)}/>
                        </li>
                        <li className="landActions__item">
                            <MyInputWithPrefix prefixText="Кадастровый номер" value={landCadastrial}
                                               handleOnChange={(e) => handleOnLandCadastrial(e.target.value)}/>
                        </li>
                        <li className="landActions__item">
                            <MyInputWithPrefix prefixText="Площадь (м2)" type="number"
                                               value={landSquare}
                                               handleOnChange={(e) => handleOnLandSquare(e.target.value)}/>
                        </li>
                        <li className="landActions__item"
                            onClick={(e) => e.stopPropagation()}>
                            <MySelectWithPrefix showSelect={showChannelSelect}
                                                prefixText="Канал поиска"
                                                selectOptions={searchChannelOptions}
                                                handleOnShowSelect={(e) => handleOnShowChannelSelect(e)}
                                                handleOnChangeInputValue={(e) => handleOnLandSearchChannel(e)}/>
                        </li>
                        <li className="landActions__item">
                            <MyInputWithPrefix inputStyle="landActions__item-input"
                                               prefixText="Адрес" prefixStyle="landActions__item-prefix"
                                               value={landAddress}
                                               handleOnChange={(e) => handleOnLandAddress(e.target.value)}/>
                        </li>
                    </ul>
                    <ul className="landActions__list">
                        <li className="landActions__item"
                            onClick={(e) => e.stopPropagation()}>
                            <MySelectWithPrefix showSelect={showCategorySelect}
                                                prefixText="Категория"
                                                selectOptions={categoryOptions}
                                                handleOnShowSelect={(e) => handleOnShowCategorySelect(e)}
                                                handleOnChangeInputValue={(e) => handleOnLandCategory(e)}/>
                        </li>
                        <li className="landActions__item"
                            onClick={(e) => e.stopPropagation()}>
                            <MyMultiplySelectWithPrefix showSelect={showObjectSelect} selectOptions={objectOptions}
                                                        handleOnShowSelect={(e) => handleOnShowObjectSelect(e)}
                                                        prefixText="Объект"
                                                        handleOnChangeInputValue={(e) => handleOnLandObject(e)}/>
                        </li>
                        <li className="landActions__item">
                            <MyInputWithPrefix inputStyle="landActions__item-input"
                                               prefixText="Правообладатель" prefixStyle="landActions__item-prefix"
                                               value={landCopyrightHolder}
                                               handleOnChange={(e) => handleOnLandCopyrightHolder(e.target.value)}/>
                        </li>
                        <li className="landActions__item">
                            <MyInputWithPrefix inputStyle="landActions__item-input"
                                               type="email"
                                               prefixText="Почта" prefixStyle="landActions__item-prefix"
                                               value={landCopyrightHolderEmail}
                                               handleOnChange={(e) => handleOnLandCopyrightHolderEmail(e.target.value)}/>
                        </li>
                        <li className="landActions__item">
                            <MyInputWithPrefix inputStyle="landActions__item-input"
                                               type="tel"
                                               placeholder="+79000000000"
                                               prefixText="Телефон" prefixStyle="landActions__item-prefix"
                                               value={landCopyrightHolderPhone.slice(0, 15)}
                                               handleOnChange={(e) => handleOnLandCopyrightHolderPhone(e.target.value)}/>
                        </li>
                    </ul>
                </div>
                <ButtonMain btnStyle="landActions__button-button"
                            btnText="Добавить"
                            handleOnClick={
                                () => landStore.saveLand({
                                    landArea: {
                                        name: landTitle,
                                        address: landAddress,
                                        area_category: landCategory,
                                        area_square: Number(landSquare),
                                        cadastral_number: landCadastrial,
                                        search_channel: landSearchChannel,
                                        working_status: "Новый",
                                        stage: "Поиск",
                                    },
                                    areaOwners: [
                                        {
                                            name: landCopyrightHolder,
                                            email: landCopyrightHolderEmail,
                                            phone_number: landCopyrightHolderPhone,
                                            location: "Нет данных",
                                        },
                                    ],
                                    buildings: [
                                        {
                                            name: landObject[0],
                                            description: "Нет данных",
                                            commissioning_year: new Date().getFullYear()
                                        },
                                    ],
                                })
                                    .then((data) => data ? navigate(`/landCard?landCardId=${data.result.id}`) : "")}/>
            </div>
        </main>
    );
};

export default AddLand;
