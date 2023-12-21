import axios from "axios"

const apiURL = import.meta.env.VITE_AUTH_API_KEY

class AuthService {
    async register(email: string, password: string) {
        return await axios.post(`${apiURL}/register_user`, {
                "jsonrpc": "2.0",
                "id": "0",
                "method": "register_user",
                "params": {
                    "user": {
                        "email": email,
                        "password": password,
                        "password_repeat": password,
                        "last_name": "da",
                        "first_name": "da",
                        "patronymic": "dad",
                        "phone_number": "+79630946834"
                    },
                }
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
            .then(response => response.data)
    }

    async authentication(email: string, password: string) {
        return await axios.post(`${apiURL}/login_user`, {
            "jsonrpc": "2.0",
            "method": "login_user",
            "id": "0",
            "params": {
                "login_data": {
                    "email": email,
                    "password": password,
                },
            }
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(response => response.data)
    }
}

export default new AuthService()