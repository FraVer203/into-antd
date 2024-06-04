import axios from "axios";
import routes from '/src/routes/routes.js';

const register = async (name, lastname, email, password) => {
    return axios.post(`${routes.registerBack}users/`, {
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
    return axios.post(`${routes.registerBack}auth/signin`, {
        email,
        password
    })
}

export default {
    register,
    loginF
}