import {IBoardTaskType} from "./BoardTaskType";

export interface IBoardType {
    id: string,
    title: string,
    titleColor: string,
    tasks: IBoardTaskType[]
}