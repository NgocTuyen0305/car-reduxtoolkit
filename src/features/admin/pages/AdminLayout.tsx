import React, { useEffect, useState } from "react";
import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Spin } from "antd";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { logout, setUser } from "../../auth/authSlice";

const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const dispatch = useAppDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <DashboardOutlined />,
              label: <Link to={`/admin/dashboard`}>Dashboard</Link>,
            },
            {
              key: "2",
              icon: <DatabaseOutlined />,
              label: <Link to={`/admin/product`}>Products Management</Link>,
            },
            {
              key: "3",
              icon: <LogoutOutlined />,
              label: (
                <Button
                  onClick={() => {
                    dispatch(logout());
                    dispatch(setUser(null));
                  }}
                  className="text-white"
                >
                  Đăng Xuất
                </Button>
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
