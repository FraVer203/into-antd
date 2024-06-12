import React, { useEffect, createContext } from "react";
import {storageController} from "../services/token.js";
import { usersService } from "../services/users.js";
import {tokenExpired} from "../utils/tokenExpired.js";

export const AuthContext = createContext()

export const AuthProvider = (props) => {
    const { children } = props
    // Crear el estado del usuario
    const [user, setUser] = useState(null)
    // Crear el estado de carga
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getSession()
    }, [])

    const getSession = async () => {
        const token = await storageController.getToken()
        // console.log('Token ----> ', token)
        if (!token) {
            logout()
            setLoading(false)
            return
        } if (tokenExpired(token)) {
            logout()
        } else {
            login(token)
        }
    }

    const login = async (token) => {
        try {
            // console.log('Obtenido: ', token)
            await storageController.setToken(token)
            const response = await usersService.getMe(token)
            setLoading(false)
            setUser(response)
            // console.log(response)
        } catch (e) {
            console.error(e)
            setLoading(false)
        }
    }

    const logout = async () => {
        try {
            await storageController.removeToken()
            setUser(null)
            setLoading(false)
        } catch (e) {
            console.error(e)
            setLoading(false)
        }
    }

    const upDateUser = (key, value) => {
        setUser({
            ...user,
            [key]: value
        })
    }
    
    const data = {
        user,
        login,
        logout,
        upDateUser: () => console.log('upDateUser'),
    }

    if(loading) return null

    return (
        <AuthContext.Provider value={data}>
            { children }
        </AuthContext.Provider>
    )
}