import {makeAutoObservable} from "mobx";
import LandService from "../Services/LandService";
import {ILandType} from "../Types/Land/ILandType";
import {ReturnedLandType} from "../Types/Land/ReturnedLandType";
import {MainLandInfoType} from "../Types/Land/MainLandInfoType";
import {AreaOwnersType} from "../Types/Land/AreaOwnersType";
import {LandBuildings} from "../Types/Land/LandBuildings";
import {ExtraDataType} from "../Types/Land/ExtraDataType";

class LandStore {

    isObjectEditClicked: number = -1;
    isObjectListClicked: boolean = false;
    isLandInfoEditClicked: string = "";
    // TODO поменять во всех компонентах land на selectedLand, которое нужно закинуть в стейт менеджер
    //  и изменять при соответствующих методах, чтобы всё изменялось динамически (без обновления страницы как сейчас),
    //  после этого можно будет убрать обновление страницы в соответствующих методах

    constructor() {
        makeAutoObservable(this)
    }

    updateIsObjectEditClicked(ind: number) {
        this.isObjectEditClicked = ind
    }

    updateIsObjectListClicked() {
        this.isObjectListClicked = !this.isObjectListClicked;
    }

    updateIsLandInfoEditClicked(currentInfoEdit: string) {
        this.isLandInfoEditClicked = currentInfoEdit
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

    async updateOwner(ownerId: string, ownerData: AreaOwnersType) {
        return await LandService.updateOwner(ownerId, ownerData)
            .then(data => {

            })
    }

    async updateBuilding(buildingId: string, buildingData: LandBuildings) {
        return await LandService.updateBuilding(buildingId, buildingData)
            .then(data => {

            })
    }

    async updateExtraData(extraDataId: string, data: ExtraDataType) {
        return await LandService.updateExtraData(extraDataId, data)
            .then(data => {

            })
    }

    async createExtraData(landId: string, data: ExtraDataType) {
        return await LandService.createExtraData(landId, data)
            .then(data => {

            })
    }
}

export default new LandStore()