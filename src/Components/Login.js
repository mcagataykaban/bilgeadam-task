import React from "react";
import { Input, Space, Button, Checkbox } from "antd";
import "./LoginRegister.css";


const Login = (props) => {
    const {setLoginOrRegister} = props
  return (
    <Space direction="vertical">
      <Input style={{ width: 250 }} size="large" placeholder="Username" />
      <Input.Password
        style={{ width: 250 }}
        size="large"
        placeholder="Password"
      />
      <Checkbox>Remember Me</Checkbox>
      <Space direction="horizontal">
        <Button style={{ width: 150 }} type="primary">
          Login
        </Button>
        <Button onClick={() => {setLoginOrRegister(1)}} style={{ width: 90 }}>Register</Button>
      </Space>
    </Space>
  );
};

export default Login;
