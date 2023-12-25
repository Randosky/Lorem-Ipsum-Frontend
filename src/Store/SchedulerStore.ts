import {makeAutoObservable} from "mobx";

class SchedulerStore {

    constructor() {
        makeAutoObservable(this)
    }

}

export default new SchedulerStore()