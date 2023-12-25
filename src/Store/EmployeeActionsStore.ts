import {makeAutoObservable} from "mobx";
import employeeService from "../Services/EmployeeService";
import {IEmployeeType} from "../Types/Employee/EmployeeType";

class EmployeeActionsStore {

    currentEmployeeInfo: IEmployeeType | null = null

    constructor() {
        makeAutoObservable(this)
    }

    updateCurrentEmployeeInfo(info: IEmployeeType) {
        this.currentEmployeeInfo = info
    }

    async getEmployeeProfileInfoById(employee_id: string) {
        return await employeeService.getEmployeeProfileInfoById(employee_id)
            .then(data => {
                if ("result" in data)
                    this.updateCurrentEmployeeInfo({
                        last_name: data.result.last_name,
                        first_name: data.result.first_name,
                        patronymic: data.result.patronymic,
                        email: data.result.email,
                        employee_head: data.result.employee_head,
                        department: data.result.department,
                        department_id: data.result.department_id,
                        id: data.result.id,
                        phone_number: data.result.phone_number,
                        position: data.result.position,
                        position_id: data.result.position_id,
                        s3_avatar_file: data.result.s3_avatar_file,
                    })
            })
    }

    async getEmployeeProfileInfoByAccessToken() {
        return await employeeService.getEmployeeProfileInfoByAccessToken()
            .then(data => {
                if ("result" in data)
                    this.updateCurrentEmployeeInfo({
                        last_name: data.result.last_name,
                        first_name: data.result.first_name,
                        patronymic: data.result.patronymic,
                        email: data.result.email,
                        employee_head: data.result.employee_head,
                        department: data.result.department,
                        department_id: data.result.department_id,
                        id: data.result.id,
                        phone_number: data.result.phone_number,
                        position: data.result.position,
                        position_id: data.result.position_id,
                        s3_avatar_file: data.result.s3_avatar_file,
                    })

                return data
            })
    }

    async getEmployeeProfilePhoto(employee_id: string) {
        return await employeeService.getEmployeeProfilePhoto(employee_id)
            .then(data => {
                if ("result" in data && this.currentEmployeeInfo) {
                    const newInfo: IEmployeeType = {
                        ...this.currentEmployeeInfo,
                        s3_avatar_file: data.result.profile_photo_link,
                    }

                    this.updateCurrentEmployeeInfo(newInfo)
                }
            })
    }

    async setEmployeeProfilePhoto(file: File) {
        const formData = new FormData()
        formData.append("file", file)

        return await employeeService.setEmployeeProfilePhoto(formData)
            .then(data => {
                if ("profile_photo_link" in data && this.currentEmployeeInfo) {
                    const newInfo: IEmployeeType = {
                        ...this.currentEmployeeInfo,
                        s3_avatar_file: data.profile_photo_link,
                    }

                    this.updateCurrentEmployeeInfo(newInfo)

                    return data.profile_photo_link
                }

                return ""
            })
    }

    async updateEmployeeProfileInfo(fio: string, phone_number: string) {
        const splitedFIO = fio.split(" ")
        const last_name: string = splitedFIO[0]
        const first_name: string = splitedFIO[1]
        const patronymic: string = splitedFIO[2]

        return await employeeService.updateEmployeeProfileInfo(last_name, first_name, patronymic, phone_number)
            .then(() => this.getEmployeeProfileInfoByAccessToken()
                .then((data) => this.getEmployeeProfilePhoto(data.result.id)))
    }
}

export default new EmployeeActionsStore()