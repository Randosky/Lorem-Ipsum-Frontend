import React from 'react';
import "../../Styles/UI.scss"
import CloseIcon from "../../Assets/Svg/CloseIcon";
import MainInfoStage from "../../Components/LandComponents/CardInfoStages/MainInfoStage";
import LegalInfoStage from "../../Components/LandComponents/CardInfoStages/LegalInfoStage";
import ObjectsInfoStage from "../../Components/LandComponents/CardInfoStages/ObjectsInfoStage";
import AdditionalInfoStage from "../../Components/LandComponents/CardInfoStages/AdditionalInfoStage";
import CopyrighterInfoStage from "../../Components/LandComponents/CardInfoStages/CopyrighterInfoStage";
import TasksInfoStage from "../../Components/LandComponents/CardInfoStages/TasksInfoStage";
import landStore from "../../Store/LandStore";
import {ReturnedLandType} from "../../Types/Land/ReturnedLandType";
import ObjectsListStage from "../../Components/LandComponents/CardInfoStages/ObjectsListStage";

interface EditCardInfoProps {
    editTitle: string,
    handleOnClose: () => void,
    land: ReturnedLandType,
}

const CardInfoModal: React.FC<EditCardInfoProps> = (props: EditCardInfoProps) => {
    const {editTitle, handleOnClose, land} = props

    const getCurrentEditStage = (title: string, land: ReturnedLandType) => {
        switch (title) {
            case "Редактирование основной информации":
                return <MainInfoStage land={land} handleOnClose={handleOnClose}/>
            case "Редактирование юридических сведений":
                return <LegalInfoStage land={land} handleOnClose={handleOnClose}/>
            case "Создание объекта":
                return <ObjectsInfoStage land={land} handleOnClose={handleOnClose}/>
            case "Редактирование дополнительной информации":
                return <AdditionalInfoStage land={land} handleOnClose={handleOnClose}/>
            case "Редактирование данных о правообладателе":
                return <CopyrighterInfoStage land={land} handleOnClose={handleOnClose}/>
            case "Создание задачи":
                return <TasksInfoStage land={land} handleOnClose={handleOnClose}/>
            case "Список объектов":
                return <ObjectsListStage land={land} handleOnClose={handleOnClose}/>
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

export default CardInfoModal;
