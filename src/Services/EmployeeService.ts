
const backAPIURL = import.meta.env.VITE_BACKEND_API_KEY

class EmployeeService {

    async getEmployeeProfileInfoById(employee_id: string) {
        return await fetch(`${backAPIURL}/api/v1/usr/get_employee_profile_by_id`, {
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
        return await fetch(`${backAPIURL}/api/v1/usr/get_profile`, {
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

    async getEmployeeProfilePhoto(employee_id: string) {
        return await fetch(`${backAPIURL}/api/v1/usr/get_employee_profile_photo`, {
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

    async setEmployeeProfilePhoto(formData: FormData) {
        return await fetch(`${backAPIURL}/rest/api/v1/usr/set_profile_avatar`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async updateEmployeeProfileInfo(last_name: string, first_name: string, patronymic: string, phone_number: string) {
        return await fetch(`${backAPIURL}/api/v1/usr/update_profile_info`, {
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