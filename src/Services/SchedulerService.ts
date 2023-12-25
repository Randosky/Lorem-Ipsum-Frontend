import {TaskType} from "../Types/Tasks/TaskType";

const schedulerAPIURL = import.meta.env.VITE_SCHEDULER_API_KEY

class SchedulerService {
    async createLandTask(task: TaskType) {
        return await fetch(`${schedulerAPIURL}/create_land_area_task`, {
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
                        "land_area_id": task.land_area_id,
                        "started_at": task.started_at,
                        "deadline": task.deadline
                    }
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async updateLandTask(task: TaskType, taskId: string) {
        return await fetch(`${schedulerAPIURL}/update_land_area_task`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": "0",
                "method": "update_land_area_task",
                "params": {
                    "task": {
                        "name": task.name,
                        "description": task.description,
                        "executor_id": task.executor_id,
                        "land_area_id": task.land_area_id,
                        "started_at": task.started_at,
                        "deadline": task.deadline,
                        "status": task.status,
                    },
                    "id": taskId
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async getEmployeeTasks() {
        return await fetch(`${schedulerAPIURL}/get_employee_tasks`, {
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

}

export default new SchedulerService()