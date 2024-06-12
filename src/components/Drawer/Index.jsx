import React, { useState } from "react";
import { Drawer, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./Drawer.css"

const DrawerComponent = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
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
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    )
}
export default DrawerComponent