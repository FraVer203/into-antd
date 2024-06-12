import React from 'react';
import '../../components/FormLogin/FormLogin.css'
import {useAuth} from "../../hooks/useAuth.js";
import Nav from "../../components/Nav/Index.jsx";

// home
const Home = () => {

    const { user } = useAuth()
    return (
        <>
            <Nav />
            <h1>Hola, {user[0].name}</h1>
        </>
    )
}
export default Home