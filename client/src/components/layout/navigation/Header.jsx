import React from "react";
import HeaderMenu from "./menu/HeaderMenu";
import Layout from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import mlLogo from "../../../assets/images/mlLogo.png"

import '../../../styles/navigation/header.css'



const { Header: AntHeader } = Layout;

const Header = () => {
    return (
        <>
        <AntHeader className='header-container'>
            <div className="logo">
                <Link to="/homepage">
                    <img src={mlLogo} alt="Ml Logo"/>
                </Link>
            </div>
            <HeaderMenu/>
        </AntHeader>
        </>
    )
};

export default Header;