import { login } from "../api/auth-api";
import { useState, useEffect } from "react";


export const useLogin = () =>{

    const loginHandler = async (email, password) =>{
     
          const result = await  login(email, password);
          console.log(result);
          //TODO update application state
    
    };

    return loginHandler;
}