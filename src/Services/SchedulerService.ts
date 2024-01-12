import {TaskType} from "../Types/Tasks/TaskType";

const backAPIURL = import.meta.env.VITE_BACKEND_API_KEY

class SchedulerService {
    async createLandTask(args: TaskType[]) {

        const task = args[0]

        return await fetch(`${backAPIURL}/api/v1/scheduler/create_land_area_task`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": "0",
                "method": "create_land_area_task",
                "params": {
                    "task": {
                        "name": task.name,
                        "description": task.description,
                        "executor_id": task.executor_id,
                        "started_at": task.started_at,
                        "deadline": task.deadline,
                        "status": task.status,
                        "land_area_id": task.land_area_id,
                    }
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async updateLandTask(args: (TaskType | string)[]) {

        const task = args[0]
        const taskId = args[1]

        if (typeof task === "object")
            return await fetch(`${backAPIURL}/api/v1/scheduler/update_land_area_task`, {
                method: "POST",
                headers: {
                    'Authorization': `${localStorage.getItem("userToken")}`,
                },
                body: JSON.stringify({
                    "jsonrpc": "2.0",
                    "id": "0",
                    "method": "update_land_area_task",
                    "params": {
                        "edited_task": {
                            "name": task.name,
                            "description": task.description,
                            "executor_id": task.executor_id,
                            "started_at": task.started_at,
                            "deadline": task.deadline,
                            "status": task.status,
                        },
                        "task_id": taskId
                    }
                }),
            })
                .then((response) => response.json())
                .then((data) => data);
    }

    async getEmployeeTasks() {
        return await fetch(`${backAPIURL}/api/v1/scheduler/get_employee_tasks`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": "0",
                "method": "get_employee_tasks",
                "params": {}
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async getAreaTasks(args: string[]) {

        const landId = args[0]

        return await fetch(`${backAPIURL}/api/v1/scheduler/get_area_tasks`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": "0",
                "method": "get_area_tasks",
                "params": {
                    "land_area_id": landId
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async getAreaTaskById(args: string[]) {

        const landTaskId = args[0]

        return await fetch(`${backAPIURL}/api/v1/scheduler/get_task_by_id`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": "0",
                "method": "get_task_by_id",
                "params": {
                    "task_id": landTaskId
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async changeTaskStatus(args: string[]) {

        const landTaskId = args[0]
        const statusName = args[1]

        return await fetch(`${backAPIURL}/api/v1/scheduler/change_task_status`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": "0",
                "method": "change_task_status",
                "params": {
                    "task_id": landTaskId,
                    "status_name": statusName
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async deleteLandTask(args: string[]) {

        const taskId = args[0]

        return await fetch(`${backAPIURL}/api/v1/scheduler/delete_land_area_task`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": "0",
                "method": "delete_land_area_task",
                "params": {
                    "task_id": taskId
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async addTaskComment(args: string[]) {

        const taskId = args[0]
        const text = args[1]

        return await fetch(`${backAPIURL}/api/v1/scheduler/add_task_comment`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": "0",
                "method": "add_task_comment",
                "params": {
                    "comment": {
                        "task_id": taskId,
                        "text": text
                    }
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async deleteTaskComment(args: string[]) {

        const taskCommentId = args[0]

        return await fetch(`${backAPIURL}/api/v1/scheduler/delete_task_comment`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": "0",
                "method": "delete_task_comment",
                "params": {
                    "task_comment_id": taskCommentId
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }
}

export default new SchedulerService()