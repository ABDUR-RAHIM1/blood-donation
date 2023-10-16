import React, { useState, createContext } from "react";
import { userRegister } from "../components/utils/RegisterInfo";

// usesContext and VlobalState import on the component here use it state
export const GlobalState = createContext(); // Create the context

// wrap this function name on app component
export const MyState = ({ children }) => {
 const [register , setRegister] = useState(userRegister)
 

  const value = {
    register , setRegister, 
  };

  return (
    <GlobalState.Provider value={value}>{children}</GlobalState.Provider>
  );
};