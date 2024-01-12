import React from 'react';
import landStore from "../../../Store/LandStore";
import schedulerStore from "../../../Store/SchedulerStore";
import CardInfoModal from "../../../UI/CardInfoModal/CardInfoModal";
import {getCurrentEditTitle} from "../../../Helpers/LandHelper";
import {AreaTask} from "../../../Types/Tasks/AreaTask";
import {ReturnedLandType} from "../../../Types/Land/ReturnedLandType";

interface ListCardTasksInfoProps {
    land: ReturnedLandType,
}

const ListCardTasksInfo: React.FC<ListCardTasksInfoProps> = ({land}: ListCardTasksInfoProps) => {

    const tasks: AreaTask[] = schedulerStore.currentAreaTasks || [
        {
            land_area_id: "22",
            started_at: "2024-01-21T21:32:00",
            deadline: "2024-01-23T21:32:00",
            description: "Описание",
            status: "Создана",
            name: "Название задачи",
            executor_id: "33",
            id: "44",
            author_id: "33",
            executor: {
                email: "123@mail.ru",
                id: "33",
                first_name: "Кирилл",
                last_name: "Овинкин",
            }
        },
        {
            land_area_id: "22",
            started_at: "2024-01-21T21:32:00",
            deadline: "2024-01-23T21:32:00",
            description: "Описание",
            status: "Создана",
            name: "Название задачи",
            executor_id: "33",
            id: "44",
            author_id: "33",
            executor: {
                email: "123@mail.ru",
                id: "33",
                first_name: "Кирилл",
                last_name: "Овинкин",
            }
        },
        {
            land_area_id: "22",
            started_at: "2024-01-21T21:32:00",
            deadline: "2024-01-23T21:32:00",
            description: "Описание",
            status: "Создана",
            name: "Название задачи",
            executor_id: "33",
            id: "44",
            author_id: "33",
            executor: {
                email: "123@mail.ru",
                id: "33",
                first_name: "Кирилл",
                last_name: "Овинкин",
            }
        },
        {
            land_area_id: "22",
            started_at: "2024-01-21T21:32:00",
            deadline: "2024-01-23T21:32:00",
            description: "Описание",
            status: "Создана",
            name: "Название задачи",
            executor_id: "33",
            id: "44",
            author_id: "33",
            executor: {
                email: "123@mail.ru",
                id: "33",
                first_name: "Кирилл",
                last_name: "Овинкин",
            }
        },
        {
            land_area_id: "22",
            started_at: "2024-01-21T21:32:00",
            deadline: "2024-01-23T21:32:00",
            description: "Описание",
            status: "Создана",
            name: "Название задачи",
            executor_id: "33",
            id: "44",
            author_id: "33",
            executor: {
                email: "123@mail.ru",
                id: "33",
                first_name: "Кирилл",
                last_name: "Овинкин",
            }
        },
        {
            land_area_id: "22",
            started_at: "2024-01-21T21:32:00",
            deadline: "2024-01-23T21:32:00",
            description: "Описание",
            status: "Создана",
            name: "Название задачи",
            executor_id: "33",
            id: "44",
            author_id: "33",
            executor: {
                email: "123@mail.ru",
                id: "33",
                first_name: "Кирилл",
                last_name: "Овинкин",
            }
        },
        {
            land_area_id: "22",
            started_at: "2024-01-21T21:32:00",
            deadline: "2024-01-23T21:32:00",
            description: "Описание",
            status: "Создана",
            name: "Название задачи",
            executor_id: "33",
            id: "44",
            author_id: "33",
            executor: {
                email: "123@mail.ru",
                id: "33",
                first_name: "Кирилл",
                last_name: "Овинкин",
            }
        },
        {
            land_area_id: "22",
            started_at: "2024-01-21T21:32:00",
            deadline: "2024-01-23T21:32:00",
            description: "Описание",
            status: "Создана",
            name: "Название задачи",
            executor_id: "33",
            id: "44",
            author_id: "33",
            executor: {
                email: "123@mail.ru",
                id: "33",
                first_name: "Кирилл",
                last_name: "Овинкин",
            }
        },
        {
            land_area_id: "22",
            started_at: "2024-01-21T21:32:00",
            deadline: "2024-01-23T21:32:00",
            description: "Описание",
            status: "Создана",
            name: "Название задачи",
            executor_id: "33",
            id: "44",
            author_id: "33",
            executor: {
                email: "123@mail.ru",
                id: "33",
                first_name: "Кирилл",
                last_name: "Овинкин",
            }
        },
    ]

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
                                 onClick={() => schedulerStore.updateIsTaskEditClicked(task.id)}>
                                <div className="task__header">
                                    <h3 className="task__title">{task.name}</h3>
                                    <p className="task__status">{task.status}</p>
                                </div>
                                <p className="task__description">
                                    {task.description}
                                </p>
                                <div className="task__row">
                                    <p className="task__row-item task__row-title">
                                        Ответственный
                                    </p>
                                    <p className="task__row-item">
                                        {task.executor.last_name + " " + task.executor.first_name}
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
};

export default ListCardTasksInfo;
