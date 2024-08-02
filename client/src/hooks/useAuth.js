import { login } from "../api/auth-api";
import { useState, useEffect } from "react";


export const useLogin = () =>{

    const loginHandler = async (email, password) =>{
     
          const result = await  login(email, password);
          if(result.code == 403){
            throw new Error('Login or password don\'t match');
          };
          //TODO update application state
    
    };

    return loginHandler;
}