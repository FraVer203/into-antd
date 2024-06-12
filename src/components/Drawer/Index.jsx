import React, { useState } from "react";
import { Drawer, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./Drawer.css"
import {useAuth} from "../../hooks/useAuth.js";

const DrawerComponent = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    // Traer los datos del usuario y cerrar sesión
    const { user, logout } = useAuth()

    return (
        <>
            <Avatar
                onClick={showDrawer}
                size={44}
                style={{ backgroundColor: "#87d068", cursor: "pointer" }}
                icon={<UserOutlined />}
            />
            <Drawer
                title="Basic Drawer"
                onClose={onClose}
                open={open}
            >
                <p>Correo: {user[0].email}</p>
                <p>Nombre(s): {user[0].name.toUpperCase()}</p>
                <p>Apellidos: {user[0].lastname.toUpperCase()}</p>
                <button onClick={logout} className={"btn btn-danger"}>
                    Cerrar Sesión
                </button>
            </Drawer>
        </>
    )
}
export default DrawerComponent