import { ENV } from "../utils/constants.js";

// Función para almacenar el token en el local storage
const setToken = (token) => {
  localStorage.setItem(ENV.STORAGE.TOKEN)
}

// Función para obtener el token de local storage
const getToken = () => {
  return localStorage.getItem(ENV.STORAGE.TOKEN)
}

// Función para eliminar el token de local storage
const removeToken = () => {
    localStorage.removeItem(ENV.STORAGE.TOKEN)
}

export const storageController = {
    setToken,
    getToken,
    removeToken
}