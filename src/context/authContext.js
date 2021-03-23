import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

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
    if (
      user.username === loginUsername &&
      user.password === loginPassword &&
      !user.remember
    ) {
      setLoggedIn(true);
    }
    if (
      user.username === loginUsername &&
      user.password === loginPassword &&
      loginRememberMe
    ) {
      let newUser = {
        username: user.username,
        password: user.password,
        repeatPassword: user.repeatPassword,
        remember: loginRememberMe,
      };
      localStorage.setItem("user", JSON.stringify(newUser));
      setLoggedIn(true);
    }
  };
  const logout = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user.remember) {
      let newUser = {
        username: user.username,
        password: user.password,
        repeatPassword: user.repeatPassword,
        remember: false,
      };
      localStorage.setItem("user", JSON.stringify(newUser));
    }
    setLoginUsername("")
    setLoginPassword("")
    setLoginRememberMe(false)
    setLoggedIn(false);
    
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
