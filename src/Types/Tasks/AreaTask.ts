import {TaskType} from "./TaskType";

export interface AreaTask extends TaskType {
    id: string,
    author_id: string,
    executor: {
        id: string,
        email: string,
        last_name: string,
        first_name: string
    }
}