import {makeAutoObservable} from "mobx";

class EmployeeActionsStore {
    constructor() {
        makeAutoObservable(this)
    }

    async saveCurrentEmployeeData() {

    }
}

export default new EmployeeActionsStore()