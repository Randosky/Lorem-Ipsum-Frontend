import React, {useCallback, useEffect, useState} from 'react';
import "../../Styles/UI.scss"
import CardInfoModal from "../CardInfoModal/CardInfoModal";
import {ReturnedLandType} from "../../Types/Land/ReturnedLandType";
import {getCurrentEditTitle} from "../../Helpers/LandHelper";

interface ListCardInfoProp {
    itemBlockStyle?: string,
    itemH2: string,
    itemListTitles: string[],
    itemListValues: string[],
    land: ReturnedLandType,
}

const ListCardInfo: React.FC<ListCardInfoProp> = React.memo((props: ListCardInfoProp) => {
    const {itemBlockStyle, itemH2, itemListValues, itemListTitles, land} = props

    const [editClicked, setEditClicked] = useState(false);
    const handleOnEditClicked = useCallback(() => setEditClicked(!editClicked), [editClicked])

    const [objectListClicked, setObjectListClicked] = useState(false);
    const handleOnObjectListClicked = useCallback(() => setObjectListClicked(!objectListClicked), [objectListClicked])

    useEffect(() => {
        if (editClicked || objectListClicked)
            document.body.style.overflow = 'hidden'
        else
            document.body.style.overflow = 'auto'
    }, [editClicked, objectListClicked]);

    return (
        <div className={`item__infoBlock ${itemBlockStyle}`}>
            <div className="infoBlock__header">
                <h2 className="infoBlock__h2">
                    {itemH2}
                </h2>
                {
                    <p className="infoBlock__edit" onClick={handleOnEditClicked}>
                        {
                            itemH2 === "Информация об объектах"
                                ? "Создать объект"
                                : "Редактировать"
                        }
                    </p>
                }
            </div>
            <div className="infoBlock__lists">
                <ul className="infoBlock__list">
                    {
                        itemListTitles.map((title, ind) =>
                            itemH2 === "Информация об объектах" ?
                                <li className="list__field field__link" key={ind} onClick={handleOnObjectListClicked}>
                                    {title}
                                </li>
                                :
                                <li className="list__field" key={ind}>
                                    {title}
                                </li>
                        )
                    }
                </ul>
                <ul className="infoBlock__list">
                    {
                        itemListValues.map((value, ind) =>
                            <li className="list__field" key={ind}>{value}</li>
                        )
                    }
                </ul>
            </div>
            {
                editClicked ? <CardInfoModal editTitle={getCurrentEditTitle(itemH2)}
                                             handleOnClose={handleOnEditClicked} land={land}/> : ""
            }
            {
                objectListClicked ? <CardInfoModal editTitle={"Список объектов"}
                                                   handleOnClose={handleOnObjectListClicked} land={land}/> : ""
            }
        </div>
    );
});

export default ListCardInfo;