import {makeAutoObservable} from "mobx";
import authService from "../Services/AuthService";
import {logoutRequest} from "../Helpers/RequestRefreshHelper";

class AuthStore {

    registerResult: string = ""
    authenticationResult: string = ""

    constructor() {
        makeAutoObservable(this)
    }

    checkEmailError(email: string) {
        if (!email.includes("@") && email.length !== 0)
            return "Вы ввели неверный формат email-адреса"
        return ""
    }

    checkPasswordError(password: string) {
        if (password.length < 8 && password.length !== 0)
            return "Длина пароля должа быть минимум 8 символов"
    }

    async register(email: string, password: string) {
        return await authService.register(email, password)
            .then(data => {
                if ("result" in data) {
                    this.registerResult = data.result
                    return true
                }

                alert(data.error.data.errors[0].msg)
                return false
            })
    }

    async signIn(email: string, password: string) {
        return await authService.authentication(email, password)
            .then(data => {
                if ("result" in data) {
                    this.authenticationResult = data.result
                    return true
                }

                alert("Неправильный логин или пароль")
                return false
            })
    }

    async signOut() {
        return !!await logoutRequest([])
    }

    async refreshSession() {
        return await authService.refreshSession().then(data => data)
    }
}

export default new AuthStore()