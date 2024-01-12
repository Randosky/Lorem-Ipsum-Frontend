import {makeAutoObservable} from "mobx";
import {AreaOwnersType} from "../Types/Land/AreaOwnersType";
import {
    changeTaskStatusRequest,
    createLandTaskRequest, getAreaTaskByIdRequest, getAreaTasksRequest,
    getEmployeeTasksRequest,
    updateLandTaskRequest,
    updateOwnerRequest
} from "../Helpers/RequestRefreshHelper";
import {TaskType} from "../Types/Tasks/TaskType";
import {CreatedTask} from "../Types/Tasks/CreatedTask";
import {UpdatedTask} from "../Types/Tasks/UpdatedTask";
import {EmployeeTask} from "../Types/Tasks/EmployeeTask";
import {AreaTask} from "../Types/Tasks/AreaTask";

class SchedulerStore {

    isTaskEditClicked: string = ""
    selectedAreaTask: CreatedTask | null = null
    currentEmployeeTasks: EmployeeTask[] | null = null
    currentAreaTasks: AreaTask[] | null = null

    constructor() {
        makeAutoObservable(this)
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

    updateCurrentEmployeeTasks(landTask: EmployeeTask[]) {
        this.currentEmployeeTasks = landTask
    }

    updateCurrentAreaTasks(landTask: AreaTask[]) {
        this.currentAreaTasks = landTask
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
            this.updateCurrentEmployeeTasks(data.result)
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
}

export default new SchedulerStore()