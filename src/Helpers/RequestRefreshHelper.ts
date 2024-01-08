import authStore from "../Store/AuthStore";
import landService from "../Services/LandService";
import authService from "../Services/AuthService";
import employeeService from "../Services/EmployeeService";

const request = (requestFunction: (args: any[]) => any) => {
    return async (args: any[]) => {

        const data = await requestFunction(args);
        // console.log(data)

        if ("error" in data && typeof data.error.data === "string" && (
            data.error.data.toLowerCase().includes("expired") ||
            data.error.data.toLowerCase().includes("access") ||
            data.error.data.toLowerCase().includes("token")
        )) {
            // console.log("рефреш")
            return await authStore.refreshSession().then(() => requestFunction(args))

        } else if ("error" in data) {
            alert(data.error.data?.errors[0].msg || data.error.data)
            return null
        }

        return data
    }
}

// AUTH

export const logoutRequest = request(authService.logout)

// LAND

export const createLandRequest = request(landService.createLand)
export const getLandByIdRequest = request(landService.getLandById)
export const getAllLandsRequest = request(landService.getAllLands)
export const updateMainLandInfoRequest = request(landService.updateMainLandInfo)
export const updateOwnerRequest = request(landService.updateOwner)
export const updateBuildingRequest = request(landService.updateBuilding)
export const updateExtraDataRequest = request(landService.updateExtraData)
export const createExtraDataRequest = request(landService.createExtraData)

// EMPLOYEE

export const getEmployeeProfileInfoByIdRequest = request(employeeService.getEmployeeProfileInfoById)
export const getEmployeeProfileInfoByAccessTokenRequest = request(employeeService.getEmployeeProfileInfoByAccessToken)
export const getEmployeeProfilePhotoRequest = request(employeeService.getEmployeeProfilePhoto)
export const setEmployeeProfilePhotoRequest = request(employeeService.setEmployeeProfilePhoto)
export const updateEmployeeProfileInfoRequest = request(employeeService.updateEmployeeProfileInfo)