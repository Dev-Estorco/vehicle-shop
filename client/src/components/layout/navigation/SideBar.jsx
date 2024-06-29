import React, { useState } from "react";
import { Layout, Drawer } from 'antd';
import DrawerMenu from "./menu/DrawerMenu";

const { Sider } = Layout;

const SideBar = () =>{
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Sider>
                <Drawer
                    visible={visible}
                    onClose={() => setVisible(false)}
                >
                <DrawerMenu/>
                </Drawer>
            </Sider>
        </>
    )
};

export default SideBar;