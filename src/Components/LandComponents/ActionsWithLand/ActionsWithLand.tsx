import React, {useCallback, useState} from 'react';
import Header from "../../../UI/Header/Header";
import "../../../Styles/Land/LandActionStyles.scss"
import {useSearchParams} from "react-router-dom"
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import ButtonMain from "../../../UI/MyButton/ButtonMain";
import landStore from "../../../Store/LandStore";
import MySelectWithPrefix from "../../../UI/MySelect/MySelectWithPrefix";
import {
    categoryOptions,
    categoryOptionsValues,
    objectOptions,
    objectOptionsValues,
    searchChannelOptions, searchChannelOptionsValues
} from "../../../Helpers/LandHelper";

interface ActionsWithLandProps {
    landTitleProps?: string,
    landCadastrialProps?: string,
    landSquareProps?: string,
    landAddressProps?: string,
    landCopyrightHolderProps?: string,
    landCategoryProps?: string,
    landObjectProps?: string,
    landSearchChannelProps?: string,
    landAddingDateProps?: "",
}

const ActionsWithLand: React.FC<ActionsWithLandProps> = (props: ActionsWithLandProps) => {
    const {
        landTitleProps,
        landCadastrialProps,
        landSquareProps,
        landAddressProps,
        landCopyrightHolderProps,
        landCategoryProps,
        landObjectProps,
        landSearchChannelProps,
        landAddingDateProps,
    } = props

    const [params] = useSearchParams()
    const actionType = params.get("actionType")

    const [landTitle, setLandTitle] = useState(landTitleProps || "");
    const [landCadastrial, setLandCadastrial] = useState(landCadastrialProps || "");
    const [landSquare, setLandSquare] = useState(landSquareProps || "");
    const [landAddress, setLandAddress] = useState(landAddressProps || "");
    const [landCopyrightHolder, setLandCopyrightHolder] = useState(landCopyrightHolderProps || "");
    const [landCategory, setLandCategory] = useState(landCategoryProps || "");
    const [landObject, setLandObject] = useState(landObjectProps || [""]);
    const [landSearchChannel, setLandSearchChannel] = useState(landSearchChannelProps || "");
    const [landAddingDate, setLandAddingDate] = useState(landAddingDateProps || "");

    const handleOnLandTitle = useCallback(
        (e: string) => setLandTitle(e), [])

    const handleOnLandCadastrial = useCallback(
        (e: string) => setLandCadastrial(e), [])

    const handleOnLandSquare = useCallback(
        (e: string) => setLandSquare(e), [])

    const handleOnLandAddress = useCallback(
        (e: string) => setLandAddress(e), [])

    const handleOnLandCopyrightHolder = useCallback(
        (e: string) => setLandCopyrightHolder(e), [])

    const handleOnLandCategory = useCallback(
        (e: string) => setLandCategory(e), [])

    const handleOnLandObject = useCallback(
        (e: string) => setLandObject([...landObject, e]), [landObject])

    const handleOnLandSearchChannel = useCallback(
        (e: string) => setLandSearchChannel(e), [])

    const handleOnLandAddingDate = useCallback(
        (e: string) => setLandAddingDate(e), [])


    const getDate = () => new Date().getFullYear().toString() + "-" +
        (new Date().getMonth() + 1).toString().padStart(2, "0") + "-" +
        new Date().getDate().toString().padStart(2, "0")

    return (
        <main className="landActions">
            <Header/>
            <div className="landActions__container">
                <h1 className="landActions__title">
                    {
                        actionType === "ADD"
                            ? "Добавление земельного участка"
                            : "Редактирование земельного участка"
                    }
                </h1>
                <div className="landActions__lists">
                    <ul className="landActions__list">
                        <li className="landActions__item">
                            <MyInputWithPrefix inputStyle="landActions__item-input"
                                               prefixText="Название" prefixStyle="landActions__item-prefix"
                                               value={landTitle}
                                               handleOnChange={(e) => handleOnLandTitle(e.target.value)}/>
                        </li>
                        <li className="landActions__item">
                            <MyInputWithPrefix inputStyle="landActions__item-input"
                                               prefixText="Кадастровый номер" prefixStyle="landActions__item-prefix"
                                               value={landCadastrial}
                                               handleOnChange={(e) => handleOnLandCadastrial(e.target.value)}/>
                        </li>
                        <li className="landActions__item">
                            <MyInputWithPrefix inputStyle="landActions__item-input"
                                               prefixText="Площадь" prefixStyle="landActions__item-prefix"
                                               type="number"
                                               value={landSquare}
                                               handleOnChange={(e) => handleOnLandSquare(e.target.value)}/>
                        </li>
                        <li className="landActions__item">
                            <MyInputWithPrefix inputStyle="landActions__item-input"
                                               prefixText="Адрес" prefixStyle="landActions__item-prefix"
                                               value={landAddress}
                                               handleOnChange={(e) => handleOnLandAddress(e.target.value)}/>
                        </li>
                        <li className="landActions__item">
                            <MyInputWithPrefix inputStyle="landActions__item-input"
                                               prefixText="Правообладатель" prefixStyle="landActions__item-prefix"
                                               value={landCopyrightHolder}
                                               handleOnChange={(e) => handleOnLandCopyrightHolder(e.target.value)}/>
                        </li>
                    </ul>
                    <ul className="landActions__list">
                        <li className="landActions__item">
                            <MySelectWithPrefix selectStyle="landActions__item-select"
                                                prefixText="Категория" prefixStyle="landActions__item-prefix"
                                                value={landCategory}
                                                handleOnChange={(e) => handleOnLandCategory(e.target.value)}
                                                defaultOption="" defaultOptionValue=""
                                                options={categoryOptions} optionsValues={categoryOptionsValues}/>
                        </li>
                        <li className="landActions__item">
                            <MySelectWithPrefix selectStyle="landActions__item-select"
                                                prefixText="Объект" prefixStyle="landActions__item-prefix"
                                                value={landObject}
                                                multiplySelect size={1}
                                                handleOnChange={(e) => handleOnLandObject(e.target.value)}
                                                defaultOption="" defaultOptionValue=""
                                                options={objectOptions} optionsValues={objectOptionsValues}/>
                        </li>
                        <li className="landActions__item">
                            <MySelectWithPrefix selectStyle="landActions__item-select"
                                                prefixText="Канал поиска" prefixStyle="landActions__item-prefix"
                                                value={landSearchChannel}
                                                handleOnChange={(e) => handleOnLandSearchChannel(e.target.value)}
                                                defaultOption="" defaultOptionValue=""
                                                options={searchChannelOptions}
                                                optionsValues={searchChannelOptionsValues}/>
                        </li>
                        {
                            actionType === "ADD"
                                ?
                                <li className="landActions__item">
                                    <MyInputWithPrefix inputStyle="landActions__item-input"
                                                       prefixText="Дата внесения в базу"
                                                       prefixStyle="landActions__item-prefix"
                                                       type="date"
                                                       max={getDate()}
                                                       value={landAddingDate}
                                                       handleOnChange={(e) => handleOnLandAddingDate(e.target.value)}/>
                                </li>
                                : ""
                        }
                    </ul>
                    <ButtonMain btnStyle="landActions__button-button"
                                btnText="Сохранить"
                                handleOnClick={() => landStore.saveLand()}/>
                </div>
            </div>
        </main>
    );
};

export default ActionsWithLand;
