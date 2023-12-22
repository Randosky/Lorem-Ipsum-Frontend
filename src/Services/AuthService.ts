import axios from "axios"


const authAPIURL = import.meta.env.VITE_AUTH_API_KEY


class AuthService {
    async register(email: string, password: string) {
        return await fetch(`${authAPIURL}/register_user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
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
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async authentication(email: string, password: string) {
        return await fetch(`${authAPIURL}/login_user`, {
            method: "POST",
            credentials: "include",
            headers: {},
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "method": "login_user",
                "id": 1,
                "params": {
                    "login_data": {
                        "email": email,
                        "password": password,
                    },
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.result) {
                    localStorage.setItem("userToken", data.result.access_token);
                }
                return data;
            });
    }

    async refreshSession() {
        return await fetch(`${authAPIURL}/refresh_session`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "method": "refresh_session",
                "id": 1,
                "params": {}
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.result) {
                    localStorage.setItem("userToken", data.result.access_token);
                }
                return data;
            });
    }

    async logout() {
        return await fetch(`${authAPIURL}/logout`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "method": "logout",
                "id": 1,
                "params": {}
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.result) {
                    localStorage.removeItem("userToken");
                }
                return data
            });
    }
}

export default new AuthService()