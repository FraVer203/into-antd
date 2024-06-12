import { jwtDecode } from "jwt-decode";
import { ENV } from "../utils/constants.js";
import { authFetch } from "../utils/authFetch.js";

const getMe = async (token) => {
    try {
        const decoded = jwtDecode(token)
        const userId = decoded.id
        const url = `${ENV.API_URL}${ENV.ENDPOINTS.USERS}/${userId}`
        const response = await authFetch(url)

        return await response.json()
    } catch (e) {
        console.error(e)
    }
}

export const usersService = {
    getMe
}