import React from 'react';
import {IBoardType} from "../../../../Types/Board/BoardType";
import {Droppable} from "@hello-pangea/dnd";
import KanbanItem from "./KanbanItem";
import {EmployeeTask} from "../../../../Types/Tasks/EmployeeTask";

type KanbanBoard = {
    board: IBoardType,
    index: number,
};

const KanbanBoard: React.FC<KanbanBoard> = ({board, index}: KanbanBoard) => {
    return (
        <Droppable droppableId={board.id} key={index}>
            {
                (droppableProvided) =>
                    <div className="board__board"
                         ref={droppableProvided.innerRef}
                         {...droppableProvided.droppableProps}>
                        <div className="board__scrollable">
                            {
                                board.tasks.map((task, ind) =>
                                    <KanbanItem task={task} ind={ind} key={ind}/>
                                )
                            }
                        </div>
                        {droppableProvided.placeholder}
                    </div>
            }
        </Droppable>
    );
};

export default KanbanBoard;
