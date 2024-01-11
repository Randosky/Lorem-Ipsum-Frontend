import {ILandType} from "../Types/Land/ILandType";
import {MainLandInfoType} from "../Types/Land/MainLandInfoType";
import {AreaOwnersType} from "../Types/Land/AreaOwnersType";
import {LandBuildings} from "../Types/Land/LandBuildings";
import {ExtraDataType} from "../Types/Land/ExtraDataType";
import {LegalInfoType} from "../Types/Land/LegalInfoType";

const backAPIURL = import.meta.env.VITE_BACKEND_API_KEY

class LandService {

    async createLand(args: ILandType[]) {

        const land: ILandType = args[0]

        return await fetch(`${backAPIURL}/api/v1/areas/create_cadastral_land_area`, {
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
                        "cadastral_cost": land.landArea.cadastral_cost,
                        "area_square": land.landArea.area_square,
                        "address": land.landArea.address,
                        "search_channel": land.landArea.search_channel,
                        "working_status": land.landArea.working_status,
                        "stage": land.landArea.stage,
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

    async getLandById(args: string[]) {

        const landId: string = args[0]

        return await fetch(`${backAPIURL}/api/v1/areas/get_land_area`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": "0",
                "method": "get_land_area",
                "params": {
                    "land_area_id": landId
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async getAllLands(args: (number | string[] | string)[]) {

        const offset = args[0];
        const limit = args[1];
        const sortParams = args[2];
        const order = args[3];

        return await fetch(`${backAPIURL}/api/v1/areas/select_land_area`, {
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
                        "fields": sortParams,
                        "order": order
                    }
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async updateMainLandInfo(args: (string | MainLandInfoType)[]) {

        const landId = args[0]
        const landArea = args[1]

        if (typeof landArea === "object")
            return await fetch(`${backAPIURL}/api/v1/areas/update_cadastral_land_area`, {
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
                            "cadastral_cost": landArea.cadastral_cost,
                            "area_square": landArea.area_square,
                            "address": landArea.address,
                            "search_channel": landArea.search_channel,
                            "working_status": landArea.working_status,
                            "stage": landArea.stage,
                        },
                        "land_area_id": landId
                    }
                }),
            })
                .then((response) => response.json())
                .then((data) => data);
    }

    async updateOwner(args: (string | AreaOwnersType)[]) {

        const ownerId = args[0]
        const ownerData = args[1]

        if (typeof ownerData === "object")
            return await fetch(`${backAPIURL}/api/v1/areas/update_owner`, {
                method: "POST",
                headers: {
                    'Authorization': `${localStorage.getItem("userToken")}`,
                },
                body: JSON.stringify({
                    "jsonrpc": "2.0",
                    "id": "0",
                    "method": "update_owner",
                    "params": {
                        "owner": {
                            "name": ownerData.name,
                            "email": ownerData.email,
                            "phone_number": ownerData.phone_number,
                            "location": ownerData.location,
                        },
                        "owner_id": ownerId
                    }
                }),
            })
                .then((response) => response.json())
                .then((data) => data);
    }

    async updateBuilding(args: (string | LandBuildings)[]) {

        const buildingId = args[0];
        const buildingData = args[1];

        if (typeof buildingData === "object")
            return await fetch(`${backAPIURL}/api/v1/areas/update_building`, {
                method: "POST",
                headers: {
                    'Authorization': `${localStorage.getItem("userToken")}`,
                },
                body: JSON.stringify({
                    "jsonrpc": "2.0",
                    "id": "0",
                    "method": "update_building",
                    "params": {
                        "building": {
                            "name": buildingData.name,
                            "description": buildingData.description,
                            "commissioning_year": buildingData.commissioning_year,
                        },
                        "building_id": buildingId,
                    }
                }),
            })
                .then((response) => response.json())
                .then((data) => data);
    }

    async updateExtraData(args: (string | ExtraDataType)[]) {

        const extraDataId = args[0]
        const data = args[1]

        if (typeof data === "object")
            return await fetch(`${backAPIURL}/api/v1/extra_data/edit_extra_data`, {
                method: "POST",
                headers: {
                    'Authorization': `${localStorage.getItem("userToken")}`,
                },
                body: JSON.stringify({
                    "jsonrpc": "2.0",
                    "id": "0",
                    "method": "edit_extra_data",
                    "params": {
                        "data": {
                            "engineering_networks": data.engineering_networks,
                            "transport": data.transport,
                            "result": data.result
                        },
                        "id": extraDataId
                    }
                }),
            })
                .then((response) => response.json())
                .then((data) => data);
    }

    async createExtraData(args: (string | ExtraDataType)[]) {

        const landId = args[0]
        const data = args[1]

        if (typeof data === "object")
            return await fetch(`${backAPIURL}/api/v1/extra_data/create_extra_data`, {
                method: "POST",
                headers: {
                    'Authorization': `${localStorage.getItem("userToken")}`,
                },
                body: JSON.stringify({
                    "jsonrpc": "2.0",
                    "id": "0",
                    "method": "create_extra_data",
                    "params": {
                        "data": {
                            "engineering_networks": data.engineering_networks,
                            "transport": data.transport,
                            "result": data.result,
                            "land_area_id": landId
                        }
                    }
                }),
            })
                .then((response) => response.json())
                .then((data) => data);
    }

    async addObject(args: (string | LandBuildings)[]) {

        const landId = args[0]
        const building_schema = args[1]

        if (typeof building_schema === "object")
            return await fetch(`${backAPIURL}/api/v1/areas/add_building`, {
                method: "POST",
                headers: {
                    'Authorization': `${localStorage.getItem("userToken")}`,
                },
                body: JSON.stringify({
                    "jsonrpc": "2.0",
                    "id": "0",
                    "method": "add_building",
                    "params": {
                        "building_schema": {
                            "name": building_schema.name,
                            "description": building_schema.description,
                            "commissioning_year": building_schema.commissioning_year,
                        },
                        "land_area_id": landId
                    }
                }),
            })
                .then((response) => response.json())
                .then((data) => data);
    }

    async addOwner(args: (string | AreaOwnersType)[]) {

        const landId = args[0]
        const owner_schema = args[1]

        if (typeof owner_schema === "object")
            return await fetch(`${backAPIURL}/api/v1/areas/add_owner`, {
                method: "POST",
                headers: {
                    'Authorization': `${localStorage.getItem("userToken")}`,
                },
                body: JSON.stringify({
                    "jsonrpc": "2.0",
                    "id": "0",
                    "method": "add_owner",
                    "params": {
                        "owner_schema": {
                            "name": owner_schema.name,
                            "email": owner_schema.email,
                            "phone_number": owner_schema.phone_number,
                            "location": owner_schema.location,
                        },
                        "land_area_id": landId
                    }
                }),
            })
                .then((response) => response.json())
                .then((data) => data);
    }

    async getAreaLegalInfo(args: string[]) {

        const landId = args[0]

        return await fetch(`${backAPIURL}/api/v1/juristic_data/get_area_juristic_data`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": "0",
                "method": "get_area_juristic_data",
                "params": {
                    "land_area_id": landId
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async getLegalOptions() {
        return await fetch(`${backAPIURL}/api/v1/juristic_data/get_juristic_options`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": "0",
                "method": "get_juristic_options",
                "params": {}
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async updateAreaLegalInfo(args: (string | LegalInfoType)[]) {

        const landId = args[0]
        const params = args[1]

        if (typeof params === "object")
            return await fetch(`${backAPIURL}/api/v1/juristic_data/update_area_juristic_data`, {
                method: "POST",
                headers: {
                    'Authorization': `${localStorage.getItem("userToken")}`,
                },
                body: JSON.stringify({
                    "jsonrpc": "2.0",
                    "id": "0",
                    "method": "update_area_juristic_data",
                    "params": {
                        "limits": params.limits,
                        "permitted_uses": params.permitted_uses,
                        "land_area_id": landId
                    }
                }),
            })
                .then((response) => response.json())
                .then((data) => data);
    }
}

export default new LandService()