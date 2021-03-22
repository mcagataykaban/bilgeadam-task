import React from "react";
import { Input, Space, Button, Checkbox } from "antd";

const Register = (props) => {
  const {
    setLoginOrRegister,
    registerUserName,
    setRegisterUserName,
    registerPassword,
    setRegisterPassword,
    registerRepeatPassword,
    setRegisterRepeatPassword,
    registerRememberMe,
    setRegisterRememberMe,
  } = props;

  return (
    <Space direction="vertical">
      <Input style={{ width: 250 }} size="large" placeholder="Username" />
      <Input.Password
        style={{ width: 250 }}
        size="large"
        placeholder="Password"
      />
      <Input.Password
        style={{ width: 250 }}
        size="large"
        placeholder="Password Repeat"
      />
      <Checkbox>Remember Me</Checkbox>
      <Space direction="horizontal">
        <Button style={{ width: 150 }} type="primary">
          Register
        </Button>
        <Button
          onClick={() => {
            setLoginOrRegister(0);
          }}
          style={{ width: 90 }}
        >
          Login
        </Button>
      </Space>
    </Space>
  );
};

export default Register;
