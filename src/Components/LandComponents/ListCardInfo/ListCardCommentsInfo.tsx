import React from 'react';
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";
import "../../../Styles/Comments/AreaCommentsStyles.scss"

interface ListCardCommentsInfoProps {
    land: ReturnedLandType
}

const ListCardCommentsInfo: React.FC<ListCardCommentsInfoProps> = ({land}: ListCardCommentsInfoProps) => {
    return (
        <div className="comments">
            <h2 className="comments__title">
                Комментарии
            </h2>
            <div className="comments__block">

            </div>
        </div>
    );
};

export default ListCardCommentsInfo;
