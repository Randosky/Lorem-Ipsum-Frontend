import authStore from "../Store/AuthStore";
import landService from "../Services/LandService";
import authService from "../Services/AuthService";
import employeeService from "../Services/EmployeeService";
import schedulerService from "../Services/SchedulerService";
import landCommentService from "../Services/LandCommentService";

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
            return await authStore.refreshSession().then((data) => {
                if ("error" in data && typeof data.error.data === "string" && (
                    data.error.data.toLowerCase().includes("user") ||
                    data.error.data.toLowerCase().includes("agent") ||
                    data.error.data.toLowerCase().includes("incorrect")
                ))
                    // return null
                    alert("Похоже ваш user-agent некорректный. Пожалуйста нажмите на кнопку выхода и повторно авторизуйтесь")
                else
                    requestFunction(args)
            })
        } else if ("error" in data) {
            alert(typeof data.error.data === "string" ? data.error.data : data.error.data?.errors[0].msg)
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
export const addObjectRequest = request(landService.addObject)
export const addOwnerRequest = request(landService.addOwner)
export const getAreaLegalInfoRequest = request(landService.getAreaLegalInfo)
export const getLegalOptionsRequest = request(landService.getLegalOptions)
export const updateAreaLegalInfoRequest = request(landService.updateAreaLegalInfo)

// EMPLOYEE

export const getEmployeeProfileInfoByIdRequest = request(employeeService.getEmployeeProfileInfoById)
export const getEmployeeProfileInfoByAccessTokenRequest = request(employeeService.getEmployeeProfileInfoByAccessToken)
export const getEmployeeProfilePhotoRequest = request(employeeService.getEmployeeProfilePhoto)
export const setEmployeeProfilePhotoRequest = request(employeeService.setEmployeeProfilePhoto)
export const updateEmployeeProfileInfoRequest = request(employeeService.updateEmployeeProfileInfo)

// SCHEDULER

export const createLandTaskRequest = request(schedulerService.createLandTask)
export const updateLandTaskRequest = request(schedulerService.updateLandTask)
export const getEmployeeTasksRequest = request(schedulerService.getEmployeeTasks)
export const getAreaTasksRequest = request(schedulerService.getAreaTasks)
export const getAreaTaskByIdRequest = request(schedulerService.getAreaTaskById)
export const changeTaskStatusRequest = request(schedulerService.changeTaskStatus)
export const deleteLandTaskRequest = request(schedulerService.deleteLandTask)
export const addTaskCommentRequest = request(schedulerService.addTaskComment)
export const deleteTaskCommentRequest = request(schedulerService.deleteTaskComment)

// AREA_COMMENTS

export const uploadAreaCommentRequest = request(landCommentService.uploadAreaComment)
export const editAreaCommentRequest = request(landCommentService.editAreaComment)
export const deleteAreaCommentRequest = request(landCommentService.deleteAreaComment)