import React from "react";

import { Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";

import {
  AppstoreOutlined,
  AlertOutlined,
  LineChartOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons/lib/icons";

import icon from "../images/virus.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        {/* <Link to="/"> Covid Search </Link> */}
        {/* <Typography.Title level={2} className="logo-name">
          
          Covid Dash
        </Typography.Title> */}
      </div>
      <Menu
        style={{
          background: "#F8F8FA",
          color: "grey",
        }}
        className="menu"
        mode="inline"
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1" icon={<AppstoreOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<LineChartOutlined />}>
          <Link to="/countries"> Countries Stats</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<AlertOutlined />}>
          <Link to="/symptoms">Symtomps</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<EnvironmentOutlined />}>
          <Link to="/location">World News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
