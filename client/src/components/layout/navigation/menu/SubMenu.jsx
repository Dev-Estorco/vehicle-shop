import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";




const SubMenu = ({ items, type }) => {
  return (
    <>
      <Menu>
        {items.map((item) => (
        <Menu.Item key={`${type}-${item.toLowerCase()}`}>
          <Link to={`/${type}/${item.toLowerCase()}`}>{item}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};

export default SubMenu;
