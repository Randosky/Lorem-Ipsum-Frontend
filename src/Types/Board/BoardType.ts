import {EmployeeTask} from "../Tasks/EmployeeTask";


export interface IBoardType {
    id: string,
    title: string,
    titleColor: string,
    tasks: EmployeeTask[]
}