import React, { useEffect, useState } from "react";
import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  DatabaseOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Spin, Avatar, Space } from "antd";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { logout, setUser } from "../../auth/authSlice";
import { BiGridAlt } from "@react-icons/all-files/bi/BiGridAlt";
import MyBreadcrumb from "../../../components/Breadcrumb";
const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const dispatch = useAppDispatch();
  const [collapsed, setCollapsed] = useState(false);
  // const [isloading, setIsLoading] = useState(false);
  const { user } = useAppSelector((state) => state.Authentication);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="h-screen">
      <Sider className="" collapsed={collapsed}>
        <Menu
          className="mt-12"
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
              label: <Link to={`/admin/products`}>Products Management</Link>,
            },
            {
              key: "3",
              icon: <BiGridAlt />,
              label: (
                <Link to={`/admin/categories`}>Categories Management</Link>
              ),
            },
            {
              key: "4",
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
        <Header
          style={{ padding: 0, background: colorBgContainer }}
          className="flex justify-between items-center"
        >
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
          <Space className="mr-6">
            <Avatar icon={<UserOutlined />} />
            {user?.name}
          </Space>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <MyBreadcrumb />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
