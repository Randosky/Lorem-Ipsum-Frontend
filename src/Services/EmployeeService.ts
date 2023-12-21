import axios from "axios"
import {getCookie} from "../Helpers/ServicesHelper";

const authAPIURL = import.meta.env.VITE_AUTH_API_KEY

class EmployeeSevice {

    async getEmployeeProfileInfo () {
        return await axios.post(`${authAPIURL}/get_employee_profile_info`, {
            "jsonrpc": "2.0",
            "method": "get_employee_profile_info",
            "id": "0",
            "params": {}
        }, {
            headers: {
                'authorization': localStorage.getItem("userToken"),
            }
        })
            .then(response => response.data)
    }
}

export default new EmployeeSevice()