import { storageController } from "../services/token.js";
import { tokenExpired } from "./tokenExpired.js";

export const authFetch = async (url, params) => {
  const token = await storageController.getToken()

  const logout = () => {
    storageController.removeToken()
  }
  if (!token) {
    logout()
  } else {
    if (tokenExpired(token)) {
      logout()
    } else {
      const options = {
        ...params,
        headers: {
          ...params?.headers,
          "x-access-token": `${token}`,
        }
      }

      try {
        return await fetch(url, options)
      } catch (e) {
        console.error(e)
      }

    }
  }
}