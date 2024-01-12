import {TaskType} from "./TaskType";

export interface EmployeeTask extends TaskType {
    id: string,
    author_id: string,
    land_area: {
        id: string,
        name: string,
        cadastral_number: string
    }
}