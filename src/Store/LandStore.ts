import {makeAutoObservable} from "mobx";

class LandStore {

    constructor() {
        makeAutoObservable(this)
    }

    async saveLand() {

    }

    async getCardInfo(id: string) {

    }
}

export default new LandStore()