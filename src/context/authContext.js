import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

//   useEffect(() => {
//     //pull saved login state from localstorage/ async storage
//   }, []);
  const login = ()=> {
    sleep(2000).then(() => setLoggedIn(true));
  }
  const logout = () => {
    sleep(2000).then(() => setLoggedIn(false)); 
  }
  const authContextValue = {
      login,
      loggedIn,
      logout
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
