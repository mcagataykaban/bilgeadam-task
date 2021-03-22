import { Layout, Menu, Avatar, Space } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  BookOutlined,
} from "@ant-design/icons";
import "../App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TodoList from "../Components/TodoList";
import CalendarTodo from "../Components/CalendarTodo";
import Profile from "../Components/Profile.js";
import logo from "../images/logo.png";

const { Header, Content, Sider } = Layout;

const HomePage = () => {
  useEffect(() => {
    var data = JSON.parse(localStorage.getItem('todos'))
    if (data) {setTodos(data)}else{localStorage.setItem('todos', JSON.stringify(todos))}
    console.log(data);
  }, [])
  const [collapsed, setCollapsed] = useState(false);
  const [todos, setTodos] = useState([]);
  
  const collapsedToggle = collapsed;
  const toggle = () => {
    setCollapsed(!collapsedToggle);
  };
  return (
    <Router>
      <Layout>
        <Sider
          style={{ overflow: "auto", height: "100vh", position: "fixed" }}
          collapsible
          collapsed={collapsed}
          onCollapse={toggle}
        >
          <Space direction="horizontal">
            <Avatar
              style={{ margin: 20, marginRight: 4 }}
              size="large"
              icon={<UserOutlined />}
            />
            <span style={{ color: "white" }}>
              {!collapsed ? "mcagataykaban" : ""}
            </span>
          </Space>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<BookOutlined />}>
              <Link to="/todos">ToDo's</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<CalendarOutlined />}>
              <Link to="/calendar">Calendar</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link to="/profile">Profile</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ textAlign: "right" }}
          >
            <Space direction="horizontal">
              <img width="30" src={logo} alt="logo" />
              <h3>Todo App</h3>
            </Space>
          </Header>
          <Content
            style={{
              margin: "24px 16px 0",
              overflow: "initial",
              marginLeft: !collapsed ? 200 : 77,
              transition: "0.3s",
            }}
          >
            <div
              style={{
                padding: 24,
                paddingTop: 0,
                textAlign: "center",
                minHeight: "100vh",
              }}
            >
              <Switch>
                <Route path="/calendar">
                  <CalendarTodo />
                </Route>
                <Route path="/profile">
                  <Profile />
                </Route>
                <Route path="/">
                  <TodoList
                    todos={todos.sort(function (x, y) {
                      return x.date - y.date;
                    })}
                    setTodos={setTodos}
                  />
                </Route>
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default HomePage;
