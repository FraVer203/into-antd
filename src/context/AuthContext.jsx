import React, { useEffect, createContext } from "react";
import {storageController} from "../services/token.js";

export const AuthContext = createContext()

export const AuthProvider = (props) => {
    const { children } = props

    useEffect(() => {
        getSession()
    }, [])

    const getSession = async () => {
        const token = await storageController.getToken()
        console.log('Token ----> ', token)
    }

    const login = async (token) => {
        try {
            console.log('Obtenido: ', token)
            await storageController.setToken(token)
        } catch (e) {
            console.error(e)
        }
    }

    const data = {
        user: "francis",
        login,
        logout: () => console.log('logout'),
        upDateUser: () => console.log('upDateUser'),
    }

    return (
        <AuthContext.Provider value={data}>
            { children }
        </AuthContext.Provider>
    )
}