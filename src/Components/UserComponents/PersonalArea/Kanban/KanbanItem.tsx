import React from 'react';
import {IBoardTaskType} from "../../../../Types/BoardTaskType";
import {Draggable} from "@hello-pangea/dnd";
import kanbanStore from "../../../../Store/KanbanStore";

type KanbanItemProps = {
    task: IBoardTaskType,
    ind: number,
};

const KanbanItem: React.FC<KanbanItemProps> = ({task, ind}: KanbanItemProps) => {
    return (
        <Draggable draggableId={task.id} index={ind} key={task.id}>
            {
                (draggableProvided) =>
                    <div className="task__task"
                         onDragStart={() => kanbanStore.updateDragTask(task)}
                         ref={draggableProvided.innerRef}
                         {...draggableProvided.draggableProps}
                         {...draggableProvided.dragHandleProps}>
                        <p>
                            {task.title}
                        </p>
                    </div>
            }
        </Draggable>
    );
};

export default KanbanItem;
