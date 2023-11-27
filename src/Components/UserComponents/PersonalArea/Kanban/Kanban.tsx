import React from 'react';
import {DragDropContext, DropResult} from '@hello-pangea/dnd';
import {observer} from "mobx-react-lite"
import kanbanStore from "../../../../Store/KanbanStore";
import KanbanBoard from "./KanbanBoard";

const Kanban: React.FC = observer(() => {

    function onDragEndHandle(result: DropResult) {
        if (!result.destination) return;
        if (result.destination.droppableId === result.source.droppableId
            && result.destination.index === result.source.index)
            return

        const {source, destination} = result;

        kanbanStore.updateBoard(source, destination)
    }

    return (
        <div className="personalArea__kanban">
            <DragDropContext onDragEnd={(result) => onDragEndHandle(result)}>
                <h2 className="kanban__title">
                    Мои задачи
                </h2>
                <div className="kanban__boards">
                    {
                        kanbanStore.kanban.map((board, index) =>
                            <div key={index} className="kanban__board">
                                <h3 className="board__title" style={{backgroundColor: board.titleColor}}>
                                    {
                                        board.title
                                    }
                                </h3>
                                <KanbanBoard board={board} index={index} key={index}/>
                            </div>
                        )
                    }
                </div>
            </DragDropContext>
        </div>
    );
});

export default Kanban;
