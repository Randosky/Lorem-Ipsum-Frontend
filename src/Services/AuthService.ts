import axios from "axios"

const authAPIURL = import.meta.env.VITE_AUTH_API_KEY


class AuthService {
    async register(email: string, password: string) {
        return await axios.post(`${authAPIURL}/register_user`, {
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
        return await axios.post(`${authAPIURL}/login_user`, {
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
            }
        })
            .then((response) => {
                if (response.data.result) {
                    localStorage.setItem("userToken", response.data.result.access_token);
                }
                return response.data;
            });

    }

    async refreshSession() {
        return await axios.post(`${authAPIURL}/refresh_session`, {
            "jsonrpc": "2.0",
            "method": "refresh_session",
            "id": "0",
            "params": {}
        }, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => {
                if (response.data.result) {
                    localStorage.setItem("userToken", response.data.result.access_token);
                }
                return response.data;
            });
    }

    async logout() {
        return await axios.post(`${authAPIURL}/logout`, {
            "jsonrpc": "2.0",
            "method": "logout",
            "id": "0",
            "params": {}
        }, {
            withCredentials: true,
            headers: {
                'authorization': localStorage.getItem("userToken"),
                "Content-Type": "application/json",
            }
        })
            .then(response => {
                if (response.data.result) {
                    localStorage.removeItem("userToken");
                }
                return response.data
            })
    }
}

export default new AuthService()