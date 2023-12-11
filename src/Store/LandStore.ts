import {makeAutoObservable} from "mobx";

class LandStore {

    constructor() {
        makeAutoObservable(this)
    }

    async saveLand() {

    }
}

export default new LandStore()