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

    async saveCurrentEmployeeData() {

    }

    async getEmployeeProfileInfo() {
        return await employeeService.getEmployeeProfileInfo()
            .then(data => {
                if ("result" in data)
                    this.updateCurrentEmployeeInfo({
                        fio: `${data.result.last_name} ${data.result.first_name} ${data.result.patronymic}`,
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
}

export default new EmployeeActionsStore()