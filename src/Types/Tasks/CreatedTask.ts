import {TaskType} from "./TaskType";

export interface CreatedTask extends TaskType {
    id: string,
    author_id: string,
    executor: {
        id: string,
        email: string,
        last_name: string,
        first_name: string
    },
    author: {
        id: string,
        email: string,
        last_name: string,
        first_name: string
    },
    land_area: {
        id: string,
        name: string,
        cadastral_number: string
    },
    task_comments: {
        task_id: string,
        text: string,
        id: string,
        employee_id: string,
        created_at: string,
        employee: {
            id: string,
            email: string,
            last_name: string,
            first_name: string
        }
    }[]
}