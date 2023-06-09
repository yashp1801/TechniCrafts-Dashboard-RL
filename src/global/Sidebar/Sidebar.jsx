import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import "./Sidebar.css"


const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <div className="sidebar">
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu
            key="sub1"
            icon={<MdOutlineSpaceDashboard />}
            title="Dropdown 1"
          >
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<DownOutlined />} title="Dropdown 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </div>
  );
};

export default Sidebar;
