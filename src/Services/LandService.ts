import {ILandType} from "../Types/Land/ILandType";
import {MainLandInfoType} from "../Types/Land/MainLandInfoType";

const areaAPIURL = import.meta.env.VITE_AREAS_API_KEY


class LandService {

    async createLand(land: ILandType) {
        return await fetch(`${areaAPIURL}/create_cadastral_land_area`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": "0",
                "method": "create_cadastral_land_area",
                "params": {
                    "land_area": {
                        "name": land.landArea.name,
                        "cadastral_number": land.landArea.cadastral_number,
                        "area_category": land.landArea.area_category,
                        "area_square": land.landArea.area_square,
                        "address": land.landArea.address,
                        "search_channel": land.landArea.search_channel
                    },
                    "area_owners": [
                        {
                            "name": land.areaOwners[0].name,
                            "email": land.areaOwners[0].email,
                            "phone_number": land.areaOwners[0].phone_number,
                            "location": land.areaOwners[0].location
                        }
                    ],
                    "buildings": [
                        {
                            "name": land.buildings[0].name,
                            "description": land.buildings[0].description,
                            "commissioning_year": land.buildings[0].commissioning_year,
                        }
                    ]
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async getLandById(landId: string) {
        return await fetch(`${areaAPIURL}/get_land_area`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": "0",
                "method": "get_land_area",
                "params": {
                    "id": landId
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async getAllLands(offset = 0, limit = 20) {
        return await fetch(`${areaAPIURL}/select_land_area`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": "0",
                "method": "select_land_area",
                "params": {
                    "limit_offset": {
                        "offset": offset,
                        "limit": limit
                    },
                    "sort_params": {
                        "fields": [
                            "string"
                        ],
                        "order": "asc"
                    }
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async updateMainLandInfo(landId: string, landArea: MainLandInfoType) {
        return await fetch(`${areaAPIURL}/update_cadastral_land_area`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": "0",
                "method": "update_cadastral_land_area",
                "params": {
                    "land_area": {
                        "name": landArea.name,
                        "cadastral_number": landArea.cadastral_number,
                        "area_category": landArea.area_category,
                        "area_square": landArea.area_square,
                        "address": landArea.address,
                        "search_channel": landArea.search_channel
                    },
                    "id": landId
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

}

export default new LandService()