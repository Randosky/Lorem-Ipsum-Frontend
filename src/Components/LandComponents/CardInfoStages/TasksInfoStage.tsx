import React from 'react';
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";

interface TasksInfoStageProps {
    land: ReturnedLandType,
    handleOnClose: () => void,
}

const TasksInfoStage: React.FC<TasksInfoStageProps> = ({land, handleOnClose}: TasksInfoStageProps) => {
    return (
        <div>

        </div>
    );
};

export default TasksInfoStage;
