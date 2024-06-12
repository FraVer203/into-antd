import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../pages/Login/Index.jsx";
import Home from "../pages/Home/Index.jsx";
import Register from "../pages/Register/Index.jsx";
import { useAuth } from "../hooks/useAuth.js";
import Products from "../pages/Products/Index.jsx";
import Services from "../pages/Services/Index.jsx";
import Contact from "../pages/Contact/Index.jsx";

const AppRoutes = () => {
    const { user } = useAuth()
    let routes = useRoutes([
        { path: '/', element: user ? <Home /> : <Login /> },
        { path: '/productos', element: user ? <Products /> : <Login /> },
        { path: '/servicios', element: user ? <Services /> : <Login /> },
        { path: '/contacto', element: user ? <Contact /> : <Login /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
    ]);
    return routes
}
export default AppRoutes