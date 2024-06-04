import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../pages/Login/Index.jsx";
import Home from "../pages/Home/Index.jsx";
import Register from "../pages/Register/Index.jsx";
import { useAuth } from "../hooks/useAuth.js";

const AppRoutes = () => {
    const { user } = useAuth()
    let routes = useRoutes([
        { path: '/', element: user ? <Home /> : <Login /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
    ]);
    return routes
}
export default AppRoutes