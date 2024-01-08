import {makeAutoObservable} from "mobx";
import employeeService from "../Services/EmployeeService";
import {IEmployeeType} from "../Types/Employee/EmployeeType";
import {
    getEmployeeProfileInfoByAccessTokenRequest,
    getEmployeeProfileInfoByIdRequest,
    getEmployeeProfilePhotoRequest,
    setEmployeeProfilePhotoRequest,
    updateEmployeeProfileInfoRequest
} from "../Helpers/RequestRefreshHelper";

class EmployeeActionsStore {

    currentEmployeeInfo: IEmployeeType | null = null

    constructor() {
        makeAutoObservable(this)
    }

    updateCurrentEmployeeInfo(info: IEmployeeType) {
        this.currentEmployeeInfo = info
    }

    async getEmployeeProfileInfoById(employee_id: string) {
        const data = await getEmployeeProfileInfoByIdRequest([employee_id])
        if (data)
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
    }

    async getEmployeeProfileInfoByAccessToken() {
        const data = await getEmployeeProfileInfoByAccessTokenRequest([])
        if (data) {
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
        }

        return null
    }

    async getEmployeeProfilePhoto(employee_id: string) {
        const data = await getEmployeeProfilePhotoRequest([employee_id])
        if (data && this.currentEmployeeInfo) {
            const newInfo: IEmployeeType = {
                ...this.currentEmployeeInfo,
                s3_avatar_file: data.result.profile_photo_link,
            }

            this.updateCurrentEmployeeInfo(newInfo)
        }
    }

    async setEmployeeProfilePhoto(file: File) {
        const formData = new FormData()
        formData.append("file", file)

        const data = await setEmployeeProfilePhotoRequest([formData])
        if ("profile_photo_link" in data && this.currentEmployeeInfo) {
            const newInfo: IEmployeeType = {
                ...this.currentEmployeeInfo,
                s3_avatar_file: data.profile_photo_link,
            }

            this.updateCurrentEmployeeInfo(newInfo)

            return data.profile_photo_link
        }

        return ""
    }

    async updateEmployeeProfileInfo(fio: string, phone_number: string) {
        const splitedFIO = fio.split(" ")

        let last_name = ""
        let first_name = ""
        let patronymic = ""

        if (splitedFIO.length === 3) {
            last_name = splitedFIO[0]
            first_name = splitedFIO[1]
            patronymic = splitedFIO[2]
        } else
            first_name = fio

        const data = await updateEmployeeProfileInfoRequest([last_name, first_name, patronymic, phone_number])

        this.getEmployeeProfileInfoByAccessToken()
            .then((data) => data ? this.getEmployeeProfilePhoto(data.result.id) : null)
    }
}

export default new EmployeeActionsStore()