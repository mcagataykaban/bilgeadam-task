import React, { useState } from "react";
import { Input, Space, Button } from "antd";
import { useAuth } from "../context/authContext";
import { useTranslation } from "react-i18next";

const Register = (props) => {
  const { t, i18 } = useTranslation();

  const {
    setLoginOrRegister,
    registerUserName,
    setRegisterUserName,
    registerPassword,
    setRegisterPassword,
    registerRepeatPassword,
    setRegisterRepeatPassword,
  } = props;
  const { login } = useAuth();
  const [validation, setValidation] = useState(0);

  const usernameHandler = (e) => {
    setValidation(0);
    setRegisterUserName(e.target.value);
  };
  const passwordHandler = (e) => {
    setValidation(0);
    setRegisterPassword(e.target.value);
  };
  const repeatPasswordHandler = (e) => {
    setValidation(0);
    setRegisterRepeatPassword(e.target.value);
  };

  const user = {
    username: registerUserName,
    password: registerPassword,
    repeatPassword: registerRepeatPassword,
  };

  const registerHandler = () => {
    if (user.password === user.repeatPassword) {
      localStorage.setItem("user", JSON.stringify(user));
      setRegisterPassword("");
      setRegisterUserName("");
      setRegisterRepeatPassword("");
      setLoginOrRegister(0);
    } else {
      setValidation(1);
    }
  };

  return (
    <Space direction="vertical">
      <Input
        maxLength={14}
        value={registerUserName}
        style={{ width: 250 }}
        size="large"
        placeholder={t("username")}
        onChange={usernameHandler}
      />
      <Input.Password
        value={registerPassword}
        style={{ width: 250 }}
        size="large"
        placeholder={t("password")}
        onChange={passwordHandler}
      />
      <Input.Password
        required
        value={registerRepeatPassword}
        style={{ width: 250 }}
        size="large"
        placeholder={t("repeatPassword")}
        onChange={repeatPasswordHandler}
      />
      {validation === 1 ? (
        <span style={{ color: "red" }}>Please fill all cells correctly</span>
      ) : null}
      <Space direction="horizontal">
        <Button onClick={registerHandler} style={{ width: 150 }} type="primary">
          {t("register")}
        </Button>
        <Button
          onClick={() => {
            setLoginOrRegister(0);
          }}
          style={{ width: 90 }}
        >
          {t("login")}
        </Button>
      </Space>
    </Space>
  );
};

export default Register;
