import axios from "axios";
import routes from '/src/routes/routes.js';
import { ENV } from "/src/utils/constants.js";

const register = async (name, lastname, email, password) => {
    return axios.post(`${ENV.API_URL}${ENV.ENDPOINTS.REGISTER}`, {
        name,
        lastname,
        email,
        password,
        roles: ["servicios_escolares"]
    }, {
        headers: {
            "x-access-token": routes.token
        }
    })
}

const loginF = async (email, password) => {
    return axios.post(`${ENV.API_URL}${ENV.ENDPOINTS.LOGIN}`, {
        email,
        password
    })
}

export default {
    register,
    loginF
}