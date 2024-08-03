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

  const registerHandler = async({ confirmPassword: _, ...userData}) =>{
   
    //TODO remove password from authState
    const result = await register(userData);
    if(result.code == 409){
      throw new Error(result.message);
    };

    authState.changeAuthState(result);
  }

  return registerHandler;
};