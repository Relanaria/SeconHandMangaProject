import { login } from "../api/auth-api";
import { useState, useEffect } from "react";


export const useLogin = () =>{

    const loginHandler = async (email, password) =>{
        console.log(email, password);
        try {
          const result = await  login(email, password);
          console.log(result);
          //TODO update application state
        } catch (error) {
            console.log(error.message);
        }
    };

    return loginHandler;
}