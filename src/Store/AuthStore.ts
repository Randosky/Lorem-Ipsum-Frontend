import {makeAutoObservable} from "mobx";
// import axios from "axios";
//
// const apiURL = import.meta.env.REACT_APP_API_KEY

class AuthStore {

    constructor() {
        makeAutoObservable(this)
    }

    async register() {
        // await axios.post(`${apiURL}/api/v1/auth`, {
        //     "jsonrpc": "2.0",
        //     "method": "register_user",
        //     "id": 1,
        //     "params": {
        //         "message": "Test",
        //     }
        // })
    }

    async signIn() {

    }

    async signOut() {

    }
}

export default new AuthStore()