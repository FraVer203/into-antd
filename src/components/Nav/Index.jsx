import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header } = Layout;
import logo from "../../assets/react.svg";
import "./Nav.css";
import DrawerComponent from "../Drawer/Index.jsx";

const Nav = () => {

    // Constantes
    const tabNames = ["", "Productos", "Servicios", "Contacto"]
    const items = tabNames.map((name, index) => ({
        key: index + 1,
        label: name,
        url: index === 0 ? "/" : `/${name.toLowerCase()}`
    }))


    return(
        <Header className={"header-content"}>
            <Link to={"/"}>
                <img src={logo} alt="logo"/>
            </Link>
            <Menu
                theme={"light"}
                mode={"horizontal"}
                defaultSelectedKeys={["1"]}
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flex: 1,
                    minWidth: 0,
                    marginRight: "20px"
                }}
            >
                {items.map(item => (
                    <Menu.Item key={item.key}>
                        <Link to={item.url}>{item.label}</Link>
                    </Menu.Item>
                ))}
            </Menu>
            <DrawerComponent />
        </Header>
    )
}
export default Nav