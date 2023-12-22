import axios from "axios"
import {getCookie} from "../Helpers/ServicesHelper";

const authAPIURL = import.meta.env.VITE_AUTH_API_KEY

class EmployeeService {

    async getEmployeeProfileInfo() {
        return await fetch(`${authAPIURL}/get_employee_profile_info`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "method": "get_employee_profile_info",
                "id": "0",
                "params": {}
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }
}

export default new EmployeeService()