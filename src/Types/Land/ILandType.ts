import {MainLandInfoType} from "./MainLandInfoType";
import {AreaOwnersType} from "./AreaOwnersType";
import {LandBuildings} from "./LandBuildings";

export interface ILandType {
    landArea: MainLandInfoType,
    areaOwners: AreaOwnersType[],
    buildings: LandBuildings[]
}