import { createContext, useReducer, useState, useEffect } from "react";
import { api } from "../helpers/Api";
import DarkModeReducer from "./DarkModeReducer";

const INITIAL_STATES = {
    dakrMode: false
}

export const DarkModeContext = createContext(INITIAL_STATES);

export const DarkModeContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [total, setTotal] = useState(null)
    const [count, setCount] = useState(0);

    useEffect(() => {
            let response;
            const TokenApi = async() => {
                try {
                    const res =  await api.get(`${process.env.REACT_APP_PORT}/auth/secret`, {withCredentials: true});
                    response = res?.data;
                    if(response?.success === true){
                        setUser(response.data);
                    }
                } catch (error) {
                    console.log("you are not loggedin.");
                }
            }
            TokenApi();
            
    }, [count]);

    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATES);

    return(
        <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch, user,setUser, count, setCount, total }}>
            {children}
        </DarkModeContext.Provider>
    )
}