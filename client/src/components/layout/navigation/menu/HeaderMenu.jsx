import React, { useEffect, useState } from "react";
import { Dropdown, Menu, Drawer, Button } from 'antd'
import { Link } from "react-router-dom";
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import '../../../../styles/navigation/header.css'
import SubMenu from "./SubMenu";
import DrawerMenu from "./DrawerMenu";
import mlLogo from "../../../../assets/images/mlLogo.png"



const HeaderMenu = () => {

    const [visible, setVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

    const carItems = ['New', 'Used', 'Certified']
    const motorcycleItems = ['New', 'Used', 'Certified'];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };


    const desktopMenu = (
        <Menu mode="horizontal" className="header-menu">
            <Menu.Item key="cars">
                <Dropdown overlay={<SubMenu items={carItems} type="cars" />}>
                    <span className="ant-dropdown-link">
                        Cars
                    </span>
                </Dropdown>
            </Menu.Item>

            <Menu.Item key="motorcycles">
                <Dropdown overlay={<SubMenu items={motorcycleItems} type="motorcycles" />}>
                    <span className="ant-dropdown-link">
                        Motorcycles
                    </span>
                </Dropdown>
            </Menu.Item>

            <Menu.Item key="insurance">
                <Link to="/insurance">Insurance</Link>
            </Menu.Item>

            <Menu.Item key="loan">
                <Link to="/loan">Loan</Link>
            </Menu.Item>

            <Menu.Item key="login">
              <Link to="/login" className="login">Login / Register</Link>
            </Menu.Item>
        </Menu>
    );
    
    return (
        <>
      {isMobile ? (
        <>
          <Button className="menu-button" onClick={showDrawer}>
            <MenuOutlined />
          </Button>

          <Drawer
            title={  <img src={mlLogo} alt="Ml Logo" className="drawer-logo" />}
            placement="right"
            onClose={onClose}
            visible={visible}
            className="mobile-drawer"
          >
            <DrawerMenu />
          </Drawer>
        </>
      ) : (
        desktopMenu
      )}
    </>
    )
};


export default HeaderMenu;