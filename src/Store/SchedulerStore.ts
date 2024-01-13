import {makeAutoObservable} from "mobx";
import {AreaOwnersType} from "../Types/Land/AreaOwnersType";
import {
    addTaskCommentRequest,
    changeTaskStatusRequest,
    createLandTaskRequest, deleteLandTaskRequest, deleteTaskCommentRequest, getAreaTaskByIdRequest, getAreaTasksRequest,
    getEmployeeTasksRequest,
    updateLandTaskRequest,
    updateOwnerRequest
} from "../Helpers/RequestRefreshHelper";
import {TaskType} from "../Types/Tasks/TaskType";
import {CreatedTask} from "../Types/Tasks/CreatedTask";
import {UpdatedTask} from "../Types/Tasks/UpdatedTask";
import {EmployeeTask} from "../Types/Tasks/EmployeeTask";
import {AreaTask} from "../Types/Tasks/AreaTask";
import {IBoardType} from "../Types/Board/BoardType";
import {DraggableLocation, DropResult} from "@hello-pangea/dnd";

class SchedulerStore {

    isTaskEditClicked: string = ""
    selectedAreaTask: CreatedTask | null = null
    currentAreaTasks: AreaTask[] | null = null
    kanban: IBoardType[] | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    updateKanban(allTasks: EmployeeTask[] | null) {
        if (allTasks)
            this.kanban = [
                {
                    id: "Создана",
                    title: "Создана",
                    titleColor: "#EF3B24",
                    tasks: allTasks.filter(t => t.status === "Создана"),
                },
                {
                    id: "В работе",
                    title: "В работе",
                    titleColor: "#FFF176",
                    tasks: allTasks.filter(t => t.status === "В работе"),
                },
                {
                    id: "Выполнена",
                    title: "Выполнена",
                    titleColor: "#9ACA3C",
                    tasks: allTasks.filter(t => t.status === "Выполнена"),
                },
            ]
    }

    updateBoard(source: DraggableLocation, destination: DraggableLocation, result: DropResult) {
        if (this.kanban) {
            const sourceBoardIndex: number = this.kanban.findIndex(b => b.id === source.droppableId)
            const destinationBoardIndex: number = this.kanban.findIndex(b => b.id === destination.droppableId)

            if (source.droppableId !== destination.droppableId) {
                const sourceTasks = this.kanban[sourceBoardIndex].tasks
                const destinationTasks = this.kanban[destinationBoardIndex].tasks

                const [removed] = sourceTasks.splice(source.index, 1);
                destinationTasks.splice(destination.index, 0, removed);

                this.kanban[sourceBoardIndex].tasks = sourceTasks;
                this.kanban[destinationBoardIndex].tasks = destinationTasks;
                this.changeTaskStatus(result.draggableId, destination.droppableId).then()
            } else {
                const copiedTasks = this.kanban[sourceBoardIndex].tasks

                const [removed] = copiedTasks.splice(source.index, 1);
                copiedTasks.splice(destination.index, 0, removed)

                this.kanban[sourceBoardIndex].tasks = copiedTasks
            }
        }
    }

    updateIsTaskEditClicked(taskId: string) {
        this.isTaskEditClicked = taskId
    }

    updateSelectedAreaTask(landTask: CreatedTask) {
        this.selectedAreaTask = landTask
    }

    editSelectedAreaTask(editedInfo: UpdatedTask) {
        if (this.selectedAreaTask)
            this.selectedAreaTask = {...this.selectedAreaTask, ...editedInfo}
    }

    updateCurrentAreaTasks(landTask: AreaTask[]) {
        this.currentAreaTasks = landTask
    }

    deleteSelectedAreaTask(taskId: string) {
        if (this.currentAreaTasks)
            this.currentAreaTasks = this.currentAreaTasks.filter(t => t.id !== taskId)
    }

    async createLandTask(landTask: TaskType) {
        const data = await createLandTaskRequest([landTask])

        if (data) {
            this.updateSelectedAreaTask(data.result)
            return data
        }

        return null
    }

    async updateLandTask(landTask: TaskType, landTaskId: string) {
        const data = await updateLandTaskRequest([landTask, landTaskId])

        if (data && this.selectedAreaTask) {
            this.editSelectedAreaTask({
                id: data.result.id,
                author_id: data.result.author_id,
                name: data.result.name,
                description: data.result.description,
                executor_id: data.result.executor_id,
                land_area_id: data.result.land_area_id,
                started_at: data.result.started_at,
                deadline: data.result.deadline,
                status: data.result.status,
            })
            return data
        }

        return null
    }

    async getEmployeeTasks() {
        const data = await getEmployeeTasksRequest([])

        if (data) {
            this.updateKanban(data.result)
            return data
        }

        return null
    }

    async getAreaTasks(landId: string) {
        const data = await getAreaTasksRequest([landId])

        if (data) {
            this.updateCurrentAreaTasks(data.result)
            return data
        }

        return null
    }

    async getAreaTaskById(landTaskId: string) {
        const data = await getAreaTaskByIdRequest([landTaskId])

        if (data) {
            this.updateSelectedAreaTask(data.result)
            return data
        }

        return null
    }

    async changeTaskStatus(landTaskId: string, statusName: string) {
        const data = await changeTaskStatusRequest([landTaskId, statusName])

        if (data) {
            this.editSelectedAreaTask({
                id: data.result.id,
                author_id: data.result.author_id,
                name: data.result.name,
                description: data.result.description,
                executor_id: data.result.executor_id,
                land_area_id: data.result.land_area_id,
                started_at: data.result.started_at,
                deadline: data.result.deadline,
                status: data.result.status,
            })
            return data
        }

        return null
    }

    async deleteLandTask(landTaskId: string) {
        const data = await deleteLandTaskRequest([landTaskId])

        if (data) {
            this.deleteSelectedAreaTask(landTaskId)
            return data
        }

        return null
    }

    async addTaskComment(landTaskId: string, text: string) {
        const data = await addTaskCommentRequest([landTaskId, text])

        if (data) {
            return data
        }

        return null
    }

    async deleteTaskComment(landTaskCommentId: string) {
        const data = await deleteTaskCommentRequest([landTaskCommentId])

        if (data) {
            return data
        }

        return null
    }
}

export default new SchedulerStore()