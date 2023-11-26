import React from 'react';
import {IBoardType} from "../../../Types/BoardType";
import {Droppable} from "@hello-pangea/dnd";
import KanbanItem from "./KanbanItem";

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
                        {
                            board.tasks.map((task, ind) =>
                                <div className="board__task" key={ind}>
                                    <KanbanItem task={task} ind={ind}/>
                                </div>
                            )
                        }
                        {droppableProvided.placeholder}
                    </div>
            }
        </Droppable>
    );
};

export default KanbanBoard;
