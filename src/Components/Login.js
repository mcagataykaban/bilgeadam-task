import React, { useEffect } from "react";
import { Input, Space, Button, Checkbox } from "antd";
import "./LoginRegister.css";
import { useAuth } from "../context/authContext";

const Login = (props) => {
  const { setLoginOrRegister } = props;
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
  }, []);
  const {
    login,
    loginUsername,
    setLoginUsername,
    loginPassword,
    setLoginPassword,
    loginRememberMe,
    setLoginRememberMe,
  } = useAuth();

  const usernameHandler = (e) => {
    setLoginUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    setLoginPassword(e.target.value);
  };

  const rememberHandler = (e) => {
    setLoginRememberMe(e.target.checked);
  };
  return (
    <Space direction="vertical">
      <Input
        onChange={usernameHandler}
        value={loginUsername}
        style={{ width: 250 }}
        size="large"
        placeholder="Username"
      />
      <Input.Password
        onChange={passwordHandler}
        value={loginPassword}
        style={{ width: 250 }}
        size="large"
        placeholder="Password"
      />
      <Checkbox onChange={rememberHandler} checked={loginRememberMe}>
        Remember Me
      </Checkbox>
      <Space direction="horizontal">
        <Button onClick={login} style={{ width: 150 }} type="primary">
          Login
        </Button>
        <Button
          onClick={() => {
            setLoginOrRegister(1);
          }}
          style={{ width: 90 }}
        >
          Register
        </Button>
      </Space>
    </Space>
  );
};

export default Login;
