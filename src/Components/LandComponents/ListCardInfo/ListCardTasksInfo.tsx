import React from 'react';
import landStore from "../../../Store/LandStore";
import schedulerStore from "../../../Store/SchedulerStore";
import CardInfoModal from "../../../UI/CardInfoModal/CardInfoModal";
import {getCurrentEditTitle} from "../../../Helpers/LandHelper";
import {AreaTask} from "../../../Types/Tasks/AreaTask";
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";
import {useNavigate} from "react-router-dom";
import EditIcon from "../../../Assets/Svg/EditIcon";
import CloseIcon from "../../../Assets/Svg/CloseIcon";
import {observer} from "mobx-react-lite";

interface ListCardTasksInfoProps {
    land: ReturnedLandType,
}

const ListCardTasksInfo: React.FC<ListCardTasksInfoProps> = observer(({land}: ListCardTasksInfoProps) => {

    const navigate = useNavigate()

    const tasks = schedulerStore.currentAreaTasks

    const getStatusColor = (color: string) => {
        switch (color.toLowerCase()) {
            case "создана":
                return "#EF3B24"
            case "в работе":
                return "#FFF176"
            case "выполнена":
                return "#9ACA3C"
            default:
                return "#B9BABA"
        }
    }

    return (
        <div className={`item__infoBlock item__tasks`}>
            <div className="infoBlock__header">
                <h2 className="infoBlock__h2">Задачи</h2>
                <p className="infoBlock__edit"
                   onClick={() => landStore.updateIsLandInfoEditClicked("Задачи")}>
                    Создать задачу
                </p>
            </div>
            <div className="infoBlock__tasks">
                {
                    tasks
                        ?
                        tasks.map((task, ind) =>
                            <div className="tasks__task" key={ind}
                                 onClick={() => navigate(`/landCard/task?taskId=${task.id}`)}>
                                <div className="task__header">
                                    <h3 className="task__title">
                                        {
                                            task.name
                                        }
                                    </h3>
                                    <div className="task__header-block">
                                        <p className="task__status"
                                           style={{backgroundColor: getStatusColor(task.status)}}>
                                            {task.status}
                                        </p>
                                        <div className="task__delete"
                                             onClick={e => {
                                                 e.stopPropagation()
                                                 schedulerStore.deleteLandTask(task.id).then()
                                             }}>
                                            <CloseIcon/>
                                        </div>
                                        <div className="task__edit"
                                             onClick={e => {
                                                 e.stopPropagation()
                                                 schedulerStore.updateIsTaskEditClicked(task.id)
                                             }}>
                                            <EditIcon/>
                                        </div>
                                    </div>
                                </div>
                                <p className="task__description">
                                    {
                                        task.description.length > 150
                                            ? task.description.slice(0, 150) + "..."
                                            : task.description
                                    }
                                </p>
                                <div className="task__row">
                                    <p className="task__row-item task__row-title">
                                        Ответственный
                                    </p>
                                    <p className="task__row-item">
                                        {task.executor.last_name + " " + task.executor.first_name}
                                    </p>
                                </div>
                                <div className="task__row">
                                    <p className="task__row-item task__row-title">
                                        Дедлайн
                                    </p>
                                    <p className="task__row-item">
                                        {task.deadline.slice(11, 16)}
                                        &nbsp;&nbsp;&nbsp;
                                        {task.deadline.slice(0, 10).split("-").reverse().join(".")}
                                    </p>
                                </div>
                            </div>
                        )
                        : ""
                }
            </div>
            {
                landStore.isLandInfoEditClicked === "Задачи"
                    ? <CardInfoModal editTitle={getCurrentEditTitle("Задачи")}
                                     handleOnClose={() => landStore.updateIsLandInfoEditClicked("")}
                                     land={land}/> : ""
            }
            {
                schedulerStore.isTaskEditClicked
                    ? <CardInfoModal editTitle={getCurrentEditTitle("Редактирование задачи")}
                                     handleOnClose={() => schedulerStore.updateIsTaskEditClicked("")}
                                     land={land}/> : ""
            }
        </div>
    );
});

export default ListCardTasksInfo;
