import { useState } from "react";

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(true);

  function logIn(key, value) {
    const token = getToken(key);
    if (token) {
      if (token === value) {
        setIsAuth(true);
      }
    } else {
      localStorage.setItem(key, value);
      setIsAuth(true);
    }
  }

  function logOut(key) {
    localStorage.removeItem(key);
    setIsAuth(false);
  }

  function getToken(key) {
    let token = localStorage.getItem(key);
    return token;
  }

  return { logIn, logOut, isAuth };
};
