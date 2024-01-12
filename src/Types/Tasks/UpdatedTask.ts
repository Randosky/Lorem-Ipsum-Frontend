import {TaskType} from "./TaskType";

export interface UpdatedTask extends TaskType {
    id: string,
    author_id: string
}