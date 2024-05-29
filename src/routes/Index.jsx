import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../pages/Login/Index.jsx";
import Home from "../pages/Home/Index.jsx";

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/login', element: <Login /> },
    ]);
    return routes
}
export default AppRoutes