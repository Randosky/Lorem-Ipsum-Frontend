import {makeAutoObservable} from "mobx";
import LandService from "../Services/LandService";
import {ILandType} from "../Types/Land/ILandType";
import {ReturnedLandType} from "../Types/Land/ReturnedLandType";
import {MainLandInfoType} from "../Types/Land/MainLandInfoType";
import {AreaOwnersType} from "../Types/Land/AreaOwnersType";
import {LandBuildings} from "../Types/Land/LandBuildings";
import {ExtraDataType} from "../Types/Land/ExtraDataType";
import {ReturnedAreaOwnersType} from "../Types/Land/ReturnedAreaOwnersType";
import {ReturnedExtraDataType} from "../Types/Land/ReturnedExtraDataType";
import {ReturnedBuildingType} from "../Types/Land/ReturnedBuildingType";
import {
    createExtraDataRequest,
    createLandRequest,
    getAllLandsRequest,
    getLandByIdRequest, updateBuildingRequest, updateExtraDataRequest,
    updateMainLandInfoRequest, updateOwnerRequest
} from "../Helpers/RequestRefreshHelper";

class LandStore {

    isObjectEditClicked: number = -1;
    isObjectListClicked: boolean = false;
    isLandInfoEditClicked: string = "";
    selectedLand: ReturnedLandType | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    updateSelectedLand(land: ReturnedLandType | null) {
        this.selectedLand = land;
    }

    updateSelectedLandMainInfo(editedMainInfo: MainLandInfoType) {
        if (this.selectedLand)
            this.selectedLand = {...this.selectedLand, ...editedMainInfo}
    }

    updateSelectedLandOwnerInfo(editedOwnerInfo: ReturnedAreaOwnersType) {
        if (this.selectedLand) {
            const currentOwnerIndex = this.selectedLand.owners.findIndex(owner => owner.id === editedOwnerInfo.id)
            this.selectedLand.owners[currentOwnerIndex] = editedOwnerInfo
        }
    }

    updateSelectedLandExtraDataInfo(editedExtraDataInfo: ReturnedExtraDataType) {
        if (this.selectedLand)
            this.selectedLand.extra_data = editedExtraDataInfo
    }

    updateSelectedLandBuildingInfo(editedBuildingInfo: ReturnedBuildingType) {
        if (this.selectedLand) {
            const currentBuildingIndex = this.selectedLand.area_buildings.findIndex(b => b.id === editedBuildingInfo.id)
            this.selectedLand.area_buildings[currentBuildingIndex] = editedBuildingInfo
        }
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
        const data = await createLandRequest([land])

        if (data) {
            this.updateSelectedLand(data.result)
            return data
        }

        return null
    }

    async getLandById(landId: string) {
        const data = await getLandByIdRequest([landId])

        if (data) {
            this.updateSelectedLand(data.result)
            return data
        }

        return null
    }

    async getAllLands(offset: number, limit: number, sortParams: string[], order: string) {
        const data = await getAllLandsRequest([offset, limit, sortParams, order])
        return data ? data : null
    }

    async updateMainLandInfo(landId: string, landArea: MainLandInfoType) {
        const data = await updateMainLandInfoRequest([landId, landArea])

        if (data) {
            this.updateSelectedLandMainInfo({
                name: data.result.name,
                cadastral_number: data.result.cadastral_number,
                area_category: data.result.area_category,
                area_square: data.result.area_square,
                address: data.result.address,
                search_channel: data.result.search_channel,
                working_status: data.result.working_status,
                stage: data.result.stage,
            })
            return data
        }

        return null
    }

    async updateOwner(ownerId: string, ownerData: AreaOwnersType) {
        const data = await updateOwnerRequest([ownerId, ownerData])

        if (data) {
            this.updateSelectedLandOwnerInfo({
                name: data.result.name,
                email: data.result.email,
                phone_number: data.result.phone_number,
                location: data.result.location,
                id: data.result.id,
                land_area_id: data.result.land_area_id,
            })
            return data
        }

        return null
    }

    async updateBuilding(buildingId: string, buildingData: LandBuildings) {
        const data = await updateBuildingRequest([buildingId, buildingData])

        if (data) {
            this.updateSelectedLandBuildingInfo({
                name: data.result.name,
                commissioning_year: data.result.commissioning_year,
                description: data.result.description,
                id: data.result.id,
                land_area_id: data.result.land_area_id,
            })
            return data
        }

        return null
    }

    async updateExtraData(extraDataId: string, extraData: ExtraDataType) {
        const data = await updateExtraDataRequest([extraDataId, extraData])

        if (data) {
            this.updateSelectedLandExtraDataInfo({
                id: data.result.id,
                land_area_id: data.result.land_area_id,
                engineering_networks: data.result.engineering_networks,
                result: data.result.result,
                transport: data.result.transport,
            })
            return data
        }

        return null
    }

    async createExtraData(landId: string, extraData: ExtraDataType) {
        const data = await createExtraDataRequest([landId, extraData])

        if (data) {
            this.updateSelectedLandExtraDataInfo({
                id: data.result.id,
                land_area_id: data.result.land_area_id,
                engineering_networks: data.result.engineering_networks,
                result: data.result.result,
                transport: data.result.transport,
            })
            return data
        }

        return null
    }
}

export default new LandStore()