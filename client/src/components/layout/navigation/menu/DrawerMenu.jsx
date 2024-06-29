import React from "react";
import { Menu } from 'antd'
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


const { SubMenu } = Menu;


const DrawerMenu = () => {
  return (
    <>
        <Menu mode="vertical">
            <SubMenu key="cars" title="Cars">
                <Menu.Item key="new-cars"><Link to="/cars/new">New</Link></Menu.Item>
                <Menu.Item key="used-cars"><Link to="/cars/used">Used</Link></Menu.Item>
                <Menu.Item key="certified-cars"><Link to="/cars/certified">Certified</Link></Menu.Item>
            </SubMenu>

            <SubMenu key="motorcycles" title="Motorcycles">
                <Menu.Item key="new-motorcycles"><Link to="/motorcycles/new">New</Link></Menu.Item>
                <Menu.Item key="used-motorcycles"><Link to="/motorcycles/used">Used</Link></Menu.Item>
                <Menu.Item key="certified-motorcycles"><Link to="/motorcycles/certified">Certified</Link></Menu.Item>
            </SubMenu>

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
    </>
  );
};


export default DrawerMenu;
