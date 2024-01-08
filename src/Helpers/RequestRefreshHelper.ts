import authStore from "../Store/AuthStore";
import landService from "../Services/LandService";

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

export const createLandRequest = request(landService.createLand)