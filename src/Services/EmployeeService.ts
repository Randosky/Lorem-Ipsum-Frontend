const backAPIURL = import.meta.env.VITE_BACKEND_API_KEY

class EmployeeService {

    async getEmployeeProfileInfoById(args: string[]) {

        const employee_id = args[0]

        return await fetch(`${backAPIURL}/api/v1/employee/get_employee_profile_by_id`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "method": "get_employee_profile_by_id",
                "id": "0",
                "params": {
                    "employee_id": employee_id
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async getEmployeeProfileInfoByAccessToken() {
        return await fetch(`${backAPIURL}/api/v1/employee/get_profile`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": "0",
                "method": "get_profile",
                "params": {}
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async getEmployeeProfilePhoto(args: string[]) {

        const employee_id: string = args[0]

        return await fetch(`${backAPIURL}/api/v1/employee/get_employee_profile_photo`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "method": "get_employee_profile_photo",
                "id": "0",
                "params": {
                    "employee_id": employee_id
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async setEmployeeProfilePhoto(args: FormData[]) {

        const formData: FormData = args[0]

        return await fetch(`${backAPIURL}/rest/api/v1/employee/set_profile_avatar`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async updateEmployeeProfileInfo(args: string[]) {

        const last_name: string = args[0]
        const first_name: string = args[1]
        const patronymic: string = args[2]
        const phone_number: string = args[3]

        return await fetch(`${backAPIURL}/api/v1/employee/update_profile_info`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": "0",
                "method": "update_profile_info",
                "params": {
                    "edited_info": {
                        "last_name": last_name,
                        "first_name": first_name,
                        "patronymic": patronymic,
                        "phone_number": phone_number
                    }
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }
}

export default new EmployeeService()