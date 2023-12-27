import React, {useCallback, useEffect, useState} from 'react';
import "../../Styles/UI.scss"
import EditCardInfo from "../EditCardInfo/EditCardInfo";
import {ReturnedLandType} from "../../Types/Land/ReturnedLandType";

interface ListCardInfoProp {
    itemBlockStyle?: string,
    itemH2: string,
    itemListTitles: string[],
    itemListValues: string[],
    land: ReturnedLandType,
    linkTitlesIndexes?: number[],
    linkTitlesHandles?: (() => void)[],
}

const ListCardInfo: React.FC<ListCardInfoProp> = React.memo((props: ListCardInfoProp) => {
    const {itemBlockStyle, itemH2, itemListValues, itemListTitles, land, linkTitlesIndexes, linkTitlesHandles} = props

    const [editClicked, setEditClicked] = useState(false);
    const handleOnEditClicked = useCallback(() => setEditClicked(!editClicked), [editClicked])

    useEffect(() => {
        editClicked ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }, [editClicked]);


    return (
        <div className={`item__infoBlock ${itemBlockStyle}`}>
            <div className="infoBlock__header">
                <h2 className="infoBlock__h2">
                    {itemH2}
                </h2>
                {
                    itemH2 === "Информация об объектах"
                        ? ""
                        : <p className="infoBlock__edit" onClick={handleOnEditClicked}>
                            Редактировать
                        </p>
                }
            </div>
            <div className="infoBlock__lists">
                <ul className="infoBlock__list">
                    {
                        itemListTitles.map((title, ind) => {
                                if (linkTitlesIndexes && linkTitlesHandles && linkTitlesIndexes.includes(ind))
                                    return <li className="list__field field__link" key={ind}
                                               onClick={() => linkTitlesHandles[ind]()}>
                                        {title}
                                    </li>
                                else
                                    return <li className="list__field" key={ind}>{title}</li>
                            }
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
                editClicked ? <EditCardInfo editTitle={itemH2} handleOnClose={handleOnEditClicked} land={land}/> : ""
            }
        </div>
    );
});

export default ListCardInfo;