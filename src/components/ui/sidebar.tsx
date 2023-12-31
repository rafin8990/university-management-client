"use client";
import { Layout, Menu } from "antd";
import { useState } from "react";
const { Sider } = Layout;
import { SidebarItems } from "@/constants/SidebarItems";
import { USER_ROLE } from "@/constants/role";


const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const role=USER_ROLE.STUDENT
  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >RH University</div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={SidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
