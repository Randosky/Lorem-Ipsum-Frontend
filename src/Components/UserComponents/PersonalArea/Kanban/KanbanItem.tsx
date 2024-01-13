import React from 'react';
import {Draggable} from "@hello-pangea/dnd";
import {EmployeeTask} from "../../../../Types/Tasks/EmployeeTask";
import schedulerStore from "../../../../Store/SchedulerStore";
import {useNavigate} from "react-router-dom";

type KanbanItemProps = {
    task: EmployeeTask,
    ind: number,
};

const KanbanItem: React.FC<KanbanItemProps> = ({task, ind}: KanbanItemProps) => {
    const navigate = useNavigate()


    return (
        <Draggable draggableId={task.id} index={ind} key={task.id}>
            {
                (draggableProvided) =>
                    <div className="task__task"
                         onClick={() => navigate(`/landCard/task?taskId=${task.id}`)}
                         ref={draggableProvided.innerRef}
                         {...draggableProvided.draggableProps}
                         {...draggableProvided.dragHandleProps}>
                        <p className="task__name">
                            {
                                task.name.length > 30
                                    ? task.name.slice(0, 30) + "..."
                                    : task.name
                            }
                        </p>
                        <div className="task__row">
                            <p className="task__row-item">
                                Земельный участок
                            </p>
                            <p className="task__row-item">
                                {
                                    task.land_area.name.length > 30
                                    ? task.land_area.name.slice(0, 30) + "..."
                                    : task.land_area.name
                                }
                            </p>
                        </div>
                        <div className="task__row">
                            <p className="task__row-item">
                                Дедлайн
                            </p>
                            <p className="task__row-item">
                                {task.deadline.slice(11, -3)}
                                &nbsp;
                                {task.deadline.slice(0, 10).split("-").reverse().join(".")}
                            </p>
                        </div>
                    </div>
            }
        </Draggable>
    );
};

export default KanbanItem;
