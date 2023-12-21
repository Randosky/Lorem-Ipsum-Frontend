import {makeAutoObservable} from "mobx";
import authService from "../Services/AuthService";

class AuthStore {

    registerResult: string = ""
    authenticationResult: string = ""

    constructor() {
        makeAutoObservable(this)
    }

    checkEmailError(email: string) {
        if (!email.includes("@"))
            return "Вы ввели неверный формат email-адреса"
        return ""
    }

    checkPasswordError(password: string) {
        if (password.length < 12)
            return "Длина пароля должа быть минимум 12 символов"
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
        return await authService.logout().then(data => "result" in data)
    }
}

export default new AuthStore()