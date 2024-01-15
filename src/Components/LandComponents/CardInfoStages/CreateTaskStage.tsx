import React, {useCallback, useState} from 'react';
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";
import employeeActionsStore from "../../../Store/EmployeeActionsStore";
import schedulerStore from "../../../Store/SchedulerStore";
import landStore from "../../../Store/LandStore";
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import ButtonMain from "../../../UI/MyButton/ButtonMain";

interface CreateTaskStageProps {
    land: ReturnedLandType,
}

const CreateTaskStage: React.FC<CreateTaskStageProps> = ({land}: CreateTaskStageProps) => {

    const [taskName, setTaskName] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [taskDeadline, setTaskDeadline] = useState("")

    const handleOnTaskName = useCallback((e: string) => {
        if (e.length < 30) {
            setTaskName(e)
        }
    }, [])
    const handleOnTaskDescription = useCallback((e: string) => setTaskDescription(e), [])
    const handleOnTaskDeadline = useCallback((e: string) => setTaskDeadline(e), [])

    const date = new Date()
    const currentDate = date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart(2, "0") + '-' +
        date.getDate().toString().padStart(2, "0")
    const currentDateTime = date.getHours().toString().padStart(2, "0") + ":" + date.getMinutes().toString().padStart(2, "0")


    const handleOnSave = () => employeeActionsStore.getEmployeeProfileInfoByAccessToken()
        .then(() => schedulerStore.createLandTask({
            name: taskName,
            status: "Создана",
            description: taskDescription,
            executor_id: employeeActionsStore.currentEmployeeInfo?.id || "",
            land_area_id: land.id,
            deadline: taskDeadline,
            started_at: currentDate + "T" + currentDateTime,
        })
            .then(() => schedulerStore.getAreaTasks(land.id)
                .then(() => landStore.updateIsLandInfoEditClicked(""))))

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
                <ButtonMain handleOnClick={handleOnSave} btnText="Создать"/>
            </div>
        </div>
    );
};

export default CreateTaskStage;
