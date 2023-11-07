import React, { useState, createContext } from "react";
import { Info } from "../components/utils/Info";  

// usesContext and VlobalState import on the component here use it state
export const GlobalState = createContext(); // Create the context

// wrap this function name on app component
export const MyState = ({ children }) => { 
 const [info , setInfo] = useState(Info)
 const [isAdminLogin , setIsAdminLogin] = useState(true)
 const [isDonarLogin , setIsDonarLogin] = useState(true)
 const [arrowClick , setArrowClick] = useState(false) 

 
  const value = {
    info , setInfo, 
    isAdminLogin , setIsAdminLogin , 
    isDonarLogin , setIsDonarLogin ,
    arrowClick , setArrowClick,   
  };

  return (
    <GlobalState.Provider value={value}>{children}</GlobalState.Provider>
  );
};