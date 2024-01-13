import React, {useEffect} from 'react';
import {DragDropContext, DropResult} from '@hello-pangea/dnd';
import {observer} from "mobx-react-lite"
import KanbanBoard from "./KanbanBoard";
import {EmployeeTask} from "../../../../Types/Tasks/EmployeeTask";
import schedulerStore from "../../../../Store/SchedulerStore";


const Kanban: React.FC = observer(() => {

    function onDragEndHandle(result: DropResult) {
        if (!result.destination) return;
        if (result.destination.droppableId === result.source.droppableId
            && result.destination.index === result.source.index)
            return

        const {source, destination} = result;

        schedulerStore.updateBoard(source, destination, result)
    }

    useEffect(() => {
        schedulerStore.getEmployeeTasks().then()
    }, [])

    return (
        <div className="personalArea__kanban">
            <h2 className="kanban__title">
                Мои задачи
            </h2>
            <DragDropContext onDragEnd={(result) => onDragEndHandle(result)}>
                <div className="kanban__boards">
                    {
                        schedulerStore.kanban
                            ?
                            schedulerStore.kanban.map((board, index) =>
                                <div key={index} className="kanban__board">
                                    <h3 className="board__title" style={{backgroundColor: board.titleColor}}>
                                        {
                                            board.title
                                        }
                                    </h3>
                                    <KanbanBoard board={board} index={index} key={index}/>
                                </div>
                            )
                            : ""
                    }
                </div>
            </DragDropContext>
        </div>
    );
});

export default Kanban;
