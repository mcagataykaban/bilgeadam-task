import React, { useEffect } from "react";
import { Input, Space, Button, Checkbox } from "antd";
import "./LoginRegister.css";
import { useAuth } from "../context/authContext";
import { useTranslation } from "react-i18next";

const Login = (props) => {
  const { t, i18 } = useTranslation();
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
        placeholder={t("username")}
      />
      <Input.Password
        onChange={passwordHandler}
        value={loginPassword}
        style={{ width: 250 }}
        size="large"
        placeholder={t("password")}
      />
      <Checkbox onChange={rememberHandler} checked={loginRememberMe}>
      {t("rememberMe")}
      </Checkbox>
      <Space direction="horizontal">
        <Button onClick={login} style={{ width: 150 }} type="primary">
          {t("login")}
        </Button>
        <Button
          onClick={() => {
            setLoginOrRegister(1);
          }}
          style={{ width: 90 }}
        >
          {t("register")}
        </Button>
      </Space>
    </Space>
  );
};

export default Login;
