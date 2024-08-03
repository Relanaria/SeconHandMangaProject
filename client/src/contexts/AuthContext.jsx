import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    userId: '',
    email: '',
    username: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
});

export default function AuthContextProvider(props){
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) =>{
        localStorage.setItem('accessToken', state.accessToken);
      
        setAuthState(state)
      }

      const contextData = {
        userId: authState._id,
        email: authState.email,
        username: authState.username,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState
      }

    return (
        <AuthContext.Provider value={contextData}>
         {props.children}
        </AuthContext.Provider>
    );
};


export function useAuthContext(){
  const authData = useContext(AuthContext);
  
  return authData;
}