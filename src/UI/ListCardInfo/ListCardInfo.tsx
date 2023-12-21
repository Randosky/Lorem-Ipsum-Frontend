import React from 'react';
import "../../Styles/UI.scss"

interface ListCardInfoProp {
    itemBlockStyle?: string,
    itemH2: string,
    itemListTitles: string[],
    itemListValues: string[],
}

const ListCardInfo: React.FC<ListCardInfoProp> = (props: ListCardInfoProp) => {
    const {itemBlockStyle, itemH2, itemListValues, itemListTitles} = props

    return (
        <div className={`item__infoBlock ${itemBlockStyle}`}>
            <div className="infoBlock__header">
                <h2 className="infoBlock__h2">
                    {itemH2}
                </h2>
                <p className="infoBlock__edit">
                    Редактировать
                </p>
            </div>
            <div className="infoBlock__lists">
                <ul className="infoBlock__list">
                    {
                        itemListTitles.map((title, ind) =>
                            <li className="list__field" key={ind}>{title}</li>
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
        </div>
    );
};

export default ListCardInfo;