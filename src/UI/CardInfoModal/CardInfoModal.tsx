import React, {useEffect} from 'react';
import "../../Styles/UI.scss"
import CloseIcon from "../../Assets/Svg/CloseIcon";
import MainInfoStage from "../../Components/LandComponents/CardInfoStages/MainInfoStage";
import LegalInfoStage from "../../Components/LandComponents/CardInfoStages/LegalInfoStage";
import CreateObjectStage from "../../Components/LandComponents/CardInfoStages/CreateObjectStage";
import AdditionalInfoStage from "../../Components/LandComponents/CardInfoStages/AdditionalInfoStage";
import CopyrighterInfoStage from "../../Components/LandComponents/CardInfoStages/CopyrighterInfoStage";
import TasksInfoStage from "../../Components/LandComponents/CardInfoStages/TasksInfoStage";
import {ReturnedLandType} from "../../Types/Land/ReturnedLandType";
import ObjectsListStage from "../../Components/LandComponents/CardInfoStages/ObjectsListStage";
import {observer} from "mobx-react-lite";
import landStore from "../../Store/LandStore";
import ObjectInfoStage from "../../Components/LandComponents/CardInfoStages/ObjectInfoStage";
import CopyrighterListStage from "../../Components/LandComponents/CardInfoStages/CopyrighterListStage";
import CreateCopyrighterStage from "../../Components/LandComponents/CardInfoStages/CreateCopyrighterStage";
import CreateTaskStage from "../../Components/LandComponents/CardInfoStages/CreateTaskStage";
import schedulerStore from "../../Store/SchedulerStore";

interface EditCardInfoProps {
    editTitle: string,
    land: ReturnedLandType,
    handleOnClose: () => void,
}

const CardInfoModal: React.FC<EditCardInfoProps> = (props: EditCardInfoProps) => {
    const {editTitle, land, handleOnClose} = props

    const getCurrentEditStage = (title: string, land: ReturnedLandType) => {
        switch (title) {
            case "Редактирование основной информации":
                return <MainInfoStage land={land}/>
            case "Редактирование юридических сведений":
                return <LegalInfoStage land={land}/>
            case "Редактирование дополнительной информации":
                return <AdditionalInfoStage land={land}/>
            case "Создание задачи":
                return <CreateTaskStage land={land}/>
            case "Редактирование задачи":
                return <TasksInfoStage land={land}/>
            case "Создание объекта":
                return <CreateObjectStage land={land}/>
            case "Список объектов":
                return <ObjectsListStage land={land}/>
            case "Редактирование объекта":
                return <ObjectInfoStage land={land}/>
            case "Добавление правообладателя":
                return <CreateCopyrighterStage land={land}/>
            case "Список правообладателей":
                return <CopyrighterListStage land={land}/>
            case "Редактирование данных о правообладателе":
                return <CopyrighterInfoStage land={land}/>
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
