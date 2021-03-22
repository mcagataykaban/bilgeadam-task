import React, { useState } from "react";
import { Space } from "antd";
import Login from "../Components/Login";
import logo from "../images/logo.png";
import Register from "../Components/Register";
import "./LoginRegister.css";
const LoginRegister = () => {
  const [loginOrRegister, setLoginOrRegister] = useState(0);

  

  const [registerUserName, setRegisterUserName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerRepeatPassword, setRegisterRepeatPassword] = useState("");


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
          setLoginOrRegister={setLoginOrRegister}
        />
      )}
    </div>
  );
};

export default LoginRegister;
