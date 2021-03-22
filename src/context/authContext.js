import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginRememberMe, setLoginRememberMe] = useState(false);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user && user.remember) {
      setLoggedIn(true);
    }
  }, []);
  const login = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user.username === loginUsername && user.password === loginPassword && !user.remember) {
      sleep(1000).then(() => setLoggedIn(true));
    }
    if (user.username === loginUsername && user.password === loginPassword && loginRememberMe) {
      let newUser = {
        username: user.username,
        password: user.password,
        repeatPassword: user.repeatPassword,
        remember: loginRememberMe
      }
      localStorage.setItem('user',JSON.stringify(newUser))
      sleep(1000).then(() => setLoggedIn(true));
    }
  };
  const logout = () => {
    sleep(1000).then(() => setLoggedIn(false));
  };
  const authContextValue = {
    loginUsername,
    setLoginUsername,
    loginPassword,
    setLoginPassword,
    loginRememberMe,
    setLoginRememberMe,
    login,
    loggedIn,
    logout,
  };
  return (
    <AuthContext.Provider
      value={authContextValue}
      {...props}
    ></AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

export { useAuth, AuthProvider };
