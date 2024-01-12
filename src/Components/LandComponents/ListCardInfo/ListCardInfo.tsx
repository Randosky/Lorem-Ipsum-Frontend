import React, {useCallback, useEffect, useState} from 'react';
import "../../../Styles/Land/LandItemStyles.scss"
import CardInfoModal from "../../../UI/CardInfoModal/CardInfoModal";
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";
import {getCurrentEditTitle} from "../../../Helpers/LandHelper";
import landStore from "../../../Store/LandStore";
import {observer} from "mobx-react-lite";

interface ListCardInfoProp {
    itemBlockStyle?: string,
    itemH2: string,
    itemListTitles: string[],
    itemListValues: string[],
    land: ReturnedLandType,
}

const ListCardInfo: React.FC<ListCardInfoProp> = observer((props: ListCardInfoProp) => {
    const {itemBlockStyle, itemH2, itemListValues, itemListTitles, land} = props

    const getEditButtonTitle = () => {
        switch (itemH2) {
            case "Информация об объектах":
                return "Создать объект"
            case "Данные о правообладателях":
                return "Добавить правообладателя"
            default:
                return "Редактировать"
        }
    }

    const getRowField = (title: string) => {
        switch (itemH2) {
            case "Информация об объектах":
                return (
                    <p className="row__field field__objects"
                       onClick={() => {
                           landStore.updateIsLandInfoEditClicked("")
                           landStore.updateIsObjectListClicked()
                       }}>
                        {title}
                    </p>
                )
            case "Данные о правообладателях":
                return (
                    <p className="row__field field__objects"
                       onClick={() => {
                           landStore.updateIsLandInfoEditClicked("")
                           landStore.updateIsCopyrighterListClicked()
                       }}>
                        {title}
                    </p>
                )
            default:
                return (
                    <p className="row__field">
                        {title}
                    </p>
                )
        }
    }

    return (
        <div className={`item__infoBlock ${itemBlockStyle}`}>
            <div className="infoBlock__header">
                <h2 className="infoBlock__h2">
                    {itemH2}
                </h2>
                <p className="infoBlock__edit" onClick={() => landStore.updateIsLandInfoEditClicked(itemH2)}>
                    {
                        getEditButtonTitle()
                    }
                </p>
            </div>
            <div className="infoBlock__rows">
                {
                    itemListTitles.map((title, ind) =>
                        <div className="infoBlock__row" key={ind}>
                            {
                                getRowField(title)
                            }
                            <p className="row__field">
                                {itemListValues[ind]}
                            </p>
                        </div>
                    )
                }
            </div>
            {
                landStore.isObjectListClicked && itemH2 === "Информация об объектах"
                    ? <CardInfoModal editTitle={getCurrentEditTitle("Список объектов")}
                                     handleOnClose={() => landStore.updateIsObjectListClicked()}
                                     land={land}/> : ""
            }
            {
                landStore.isObjectEditClicked !== -1 && itemH2 === "Информация об объектах"
                    ? <CardInfoModal editTitle={getCurrentEditTitle("Редактирование объекта")}
                                     handleOnClose={() => landStore.updateIsObjectEditClicked(-1)}
                                     land={land}/> : ""
            }
            {
                landStore.isCopyrighterListClicked && itemH2 === "Данные о правообладателях"
                    ? <CardInfoModal editTitle={getCurrentEditTitle("Список правообладателей")}
                                     handleOnClose={() => landStore.updateIsCopyrighterListClicked()}
                                     land={land}/> : ""
            }
            {
                landStore.isCopyrighterEditClicked !== -1 && itemH2 === "Данные о правообладателях"
                    ? <CardInfoModal editTitle={getCurrentEditTitle("Редактирование данных о правообладателе")}
                                     handleOnClose={() => landStore.updateIsCopyrighterEditClicked(-1)}
                                     land={land}/> : ""
            }
            {
                landStore.isLandInfoEditClicked === itemH2
                    ? <CardInfoModal editTitle={getCurrentEditTitle(itemH2)}
                                     handleOnClose={() => landStore.updateIsLandInfoEditClicked("")}
                                     land={land}/> : ""
            }
        </div>
    );
});

export default ListCardInfo;