import { login, register } from "../api/auth-api";
import { useState, useEffect } from "react";

import { useAuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
  const authState = useAuthContext();

  const loginHandler = async (email, password) => {
    const result = await login(email, password);
    if (result.code == 403) {
      throw new Error("Login or password don't match");
    }

    //TODO update application state
    authState.changeAuthState(result);
  };

  return loginHandler;
};


export const useRegister = () =>{
  const authState = useAuthContext();

  const registerHandler = async(userData) =>{
    const result = await register(userData);

  }

  return registerHandler;
};