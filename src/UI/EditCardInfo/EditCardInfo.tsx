import React from 'react';
import "../../Styles/UI.scss"
import CloseIcon from "../../Assets/Svg/CloseIcon";
import MainInfoStage from "../../Components/LandComponents/EditCardInfoStages/MainInfoStage";
import LegalInfoStage from "../../Components/LandComponents/EditCardInfoStages/LegalInfoStage";
import ObjectsInfoStage from "../../Components/LandComponents/EditCardInfoStages/ObjectsInfoStage";
import AdditionalInfoStage from "../../Components/LandComponents/EditCardInfoStages/AdditionalInfoStage";
import CopyrighterInfoStage from "../../Components/LandComponents/EditCardInfoStages/CopyrighterInfoStage";
import TasksInfoStage from "../../Components/LandComponents/EditCardInfoStages/TasksInfoStage";
import landStore from "../../Store/LandStore";
import {ReturnedLandType} from "../../Types/Land/ReturnedLandType";

interface EditCardInfoProps {
    editTitle: string,
    handleOnClose: () => void,
    land: ReturnedLandType,
}

const EditCardInfo: React.FC<EditCardInfoProps> = (props: EditCardInfoProps) => {
    const {editTitle, handleOnClose, land} = props

    const getCurrentEditStage = (title: string, land: ReturnedLandType) => {
        switch (title) {
            case "Основная информация":
                return <MainInfoStage land={land} handleOnClose={handleOnClose}/>
            case "Юридические сведения":
                return <LegalInfoStage land={land} handleOnClose={handleOnClose}/>
            case "Информация об объектах":
                return <ObjectsInfoStage land={land} handleOnClose={handleOnClose}/>
            case "Дополнительная информация":
                return <AdditionalInfoStage land={land} handleOnClose={handleOnClose}/>
            case "Данные о правообладателе":
                return <CopyrighterInfoStage land={land} handleOnClose={handleOnClose}/>
            case "Задачи":
                return <TasksInfoStage land={land} handleOnClose={handleOnClose}/>
        }
    }

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
                    {
                        land ? getCurrentEditStage(editTitle, land) : ""
                    }
                </div>
            </div>
        </div>
    );
};

export default EditCardInfo;
