import {makeAutoObservable} from "mobx";
import LandService from "../Services/LandService";
import {ILandType} from "../Types/Land/ILandType";
import {ReturnedLandType} from "../Types/Land/ReturnedLandType";
import {MainLandInfoType} from "../Types/Land/MainLandInfoType";

class LandStore {

    constructor() {
        makeAutoObservable(this)
    }

    async saveLand(land: ILandType) {

        return await LandService.createLand(land).then(data => data)
    }

    async getLandById(landId: string) {
        return await LandService.getLandById(landId).then(data => data)
    }

    async getAllLands(offset: number, limit: number, sortParams: string[], order: string) {

        return await LandService.getAllLands(offset, limit, sortParams, order).then(data => data)
    }

    async updateMainLandInfo(landId: string, landArea: MainLandInfoType) {
        return await LandService.updateMainLandInfo(landId, landArea)
            .then(data => {
            })
    }
}

export default new LandStore()