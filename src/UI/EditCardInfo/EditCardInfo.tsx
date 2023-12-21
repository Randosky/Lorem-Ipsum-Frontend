import React from 'react';
import "../../Styles/UI.scss"
import CloseIcon from "../../Assets/Svg/CloseIcon";

interface EditCardInfoProps {
    editTitle: string,
    handleOnClose: () => void,
}

const EditCardInfo: React.FC<EditCardInfoProps> = (props: EditCardInfoProps) => {
    const {editTitle, handleOnClose} = props

    return (
        <div className="ui__edit">
            <div className="ui__edit-front">
                <div className="ui__edit-header">
                    <h2 className="ui__edit-title">
                        {editTitle}
                    </h2>
                    <div className="ui__edit-close" onClick={handleOnClose}>
                        <CloseIcon/>
                    </div>
                </div>
                <div className="ui__edit-editInfo">
                </div>
            </div>
        </div>
    );
};

export default EditCardInfo;
