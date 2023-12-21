import {makeAutoObservable} from "mobx";
import employeeService from "../Services/EmployeeService";

class EmployeeActionsStore {

    currentEmployeeInfo: string = ""

    constructor() {
        makeAutoObservable(this)
    }

    async saveCurrentEmployeeData() {

    }

    async getEmployeeProfileInfo() {
        return await employeeService.getEmployeeProfileInfo()
            .then(data => {
                if ("result" in data) {
                    console.log(data.result)
                    // this.currentEmployeeInfo = data.result
                }
            })
    }
}

export default new EmployeeActionsStore()