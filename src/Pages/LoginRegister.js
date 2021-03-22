import React, { useState } from "react";
import { Space } from "antd";
import Login from "../Components/Login";
import logo from "../images/logo.png";
import Register from "../Components/Register";
import "./LoginRegister.css";
const LoginRegister = () => {
  const [loginOrRegister, setLoginOrRegister] = useState(0);

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginRememberMe, setLoginRememberMe] = useState(false);

  const [registerUserName, setRegisterUserName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerRepeatPassword, setRegisterRepeatPassword] = useState("");
  const [registerRememberMe, setRegisterRememberMe] = useState(false);

  return (
    <div className="container">
      <Space
        direction="vertical"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img width="50" src={logo} alt="logo" />
        <h2>ToDo App</h2>
      </Space>
      {loginOrRegister == 0 ? (
        <Login
          loginUsername={loginUsername}
          setLoginUsername={setLoginUsername}
          loginPassword={loginPassword}
          setLoginPassword={setLoginPassword}
          loginRememberMe={loginRememberMe}
          setLoginRememberMe={setLoginRememberMe}
          setLoginOrRegister={setLoginOrRegister}
        />
      ) : (
        <Register
          registerUserName={registerUserName}
          setRegisterUserName={setRegisterUserName}
          registerPassword={registerPassword}
          setRegisterPassword={setRegisterPassword}
          registerRepeatPassword={registerRepeatPassword}
          setRegisterRepeatPassword={setRegisterRepeatPassword}
          registerRememberMe={registerRememberMe}
          setRegisterRememberMe={setRegisterRememberMe}
          setLoginOrRegister={setLoginOrRegister}
        />
      )}
    </div>
  );
};

export default LoginRegister;
