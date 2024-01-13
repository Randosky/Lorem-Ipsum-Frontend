import React, {useCallback, useState} from 'react';
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";
import landStore from "../../../Store/LandStore";
import MySelectWithPrefix from "../../../UI/MySelect/MySelectWithPrefix";
import {objectOptions} from "../../../Helpers/LandHelper";
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import ButtonMain from "../../../UI/MyButton/ButtonMain";
import schedulerStore from "../../../Store/SchedulerStore";
import employeeActionsStore from "../../../Store/EmployeeActionsStore";
import {AreaTask} from "../../../Types/Tasks/AreaTask";

interface TasksInfoStageProps {
    land: ReturnedLandType,
}

const TasksInfoStage: React.FC<TasksInfoStageProps> = ({land}: TasksInfoStageProps) => {

    const tasks: AreaTask[] = schedulerStore.currentAreaTasks || []

    const clickedTaskInd = tasks.findIndex(t => t.id === schedulerStore.isTaskEditClicked)
    const clickedTask = tasks[clickedTaskInd]

    const [taskName, setTaskName] = useState(clickedTask.name || "")
    const [taskDescription, setTaskDescription] = useState(clickedTask.description || "")
    const [taskDeadline, setTaskDeadline] = useState(clickedTask.deadline || "")

    const handleOnTaskName = useCallback((e: string) => setTaskName(e), [])
    const handleOnTaskDescription = useCallback((e: string) => setTaskDescription(e), [])
    const handleOnTaskDeadline = useCallback((e: string) => setTaskDeadline(e), [])

    const date = new Date()
    const currentDate = date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart(2, "0") + '-' +
        date.getDate().toString().padStart(2, "0")
    const currentDateTime = date.getHours().toString().padStart(2, "0") + ":" + date.getMinutes().toString().padStart(2, "0")


    const handleOnSave = () => employeeActionsStore.getEmployeeProfileInfoByAccessToken()
        .then(() => schedulerStore.updateLandTask({
            name: taskName,
            status: clickedTask.status,
            description: taskDescription,
            executor_id: clickedTask.executor_id,
            deadline: taskDeadline,
            land_area_id: land.id,
            started_at: clickedTask.started_at,
        }, clickedTask.id)
            .then(() => schedulerStore.getAreaTasks(land.id)
                .then(() => schedulerStore.updateIsTaskEditClicked(""))))

    return (
        <div className="cardInfo__modal" onKeyDown={(e) => e.key == 'Enter' ? handleOnSave() : ""}>
            <ul className="cardInfo__modal-list">
                <li className="cardInfo__modal-item" onClick={e => e.stopPropagation()}>
                    <MyInputWithPrefix value={taskName}
                                       prefixText="Название"
                                       handleOnChange={(e) => handleOnTaskName(e.target.value)}/>
                </li>
                <li className="cardInfo__modal-item" onClick={e => e.stopPropagation()}>
                    <p className="cardInfo__modal-prefix">Описание</p>
                    <textarea className="cardInfo__modal-textarea" value={taskDescription}
                              onChange={(e) => handleOnTaskDescription(e.target.value)}/>
                </li>
                <li className="cardInfo__modal-item" onClick={e => e.stopPropagation()}>
                    <MyInputWithPrefix value={taskDeadline}
                                       type="datetime-local"
                                       handleOnChange={(e) => handleOnTaskDeadline(e.target.value)}
                                       min={currentDate + "T" + currentDateTime}
                                       prefixText="Конечный срок выполнения"/>
                </li>
            </ul>
            <div className="cardInfo__modal-btn">
                <ButtonMain handleOnClick={handleOnSave} btnText="Сохранить"/>
            </div>
        </div>
    );
};

export default TasksInfoStage;
