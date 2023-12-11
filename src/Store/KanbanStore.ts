import {makeAutoObservable} from "mobx";
import {IBoardType} from "../Types/Board/BoardType";
import {DraggableLocation} from "@hello-pangea/dnd";
import {IBoardTaskType} from "../Types/Board/BoardTaskType";

class KanbanStore {
    kanban: IBoardType[] = [
        {
            id: "СозданаАЙДИ",
            title: "Создана",
            titleColor: "#EF3B24",
            tasks: [{id: "1", title: "Купить рыбку"}, {id: "2", title: "Поймать слона"}]
        },
        {
            id: "В работеАЙДИ",
            title: "В работе",
            titleColor: "#FFF176",
            tasks: [{id: "3", title: "Пожарить ослика"}, {id: "4", title: "Сходить в лес"}]
        },
        {
            id: "ВыполненаАЙДИ",
            title: "Выполнена",
            titleColor: "#9ACA3C",
            tasks: [{id: "5", title: "Накопать морковку"}, {id: "6", title: "Построить сына"}]
        },
    ];
    currentDragTask: IBoardTaskType | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    updateBoard(source: DraggableLocation, destination: DraggableLocation) {
        const sourceBoardIndex: number = this.kanban.findIndex(b => b.id === source.droppableId)
        const destinationBoardIndex: number = this.kanban.findIndex(b => b.id === destination.droppableId)

        if (source.droppableId !== destination.droppableId) {
            const sourceTasks = this.kanban[sourceBoardIndex].tasks
            const destinationTasks = this.kanban[destinationBoardIndex].tasks

            const [removed] = sourceTasks.splice(source.index, 1);
            destinationTasks.splice(destination.index, 0, removed);

            this.kanban[sourceBoardIndex].tasks = sourceTasks;
            this.kanban[destinationBoardIndex].tasks = destinationTasks;
        } else {
            const copiedTasks = this.kanban[sourceBoardIndex].tasks

            const [removed] = copiedTasks.splice(source.index, 1);
            copiedTasks.splice(destination.index, 0, removed)

            this.kanban[sourceBoardIndex].tasks = copiedTasks
        }
    }

    updateDragTask(task: IBoardTaskType) {
        this.currentDragTask = task
    }

}

export default new KanbanStore()