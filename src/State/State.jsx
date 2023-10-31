import React, { useState, createContext } from "react";
import { Info } from "../components/utils/Info"; 

// usesContext and VlobalState import on the component here use it state
export const GlobalState = createContext(); // Create the context

// wrap this function name on app component
export const MyState = ({ children }) => {
 const [info , setInfo] = useState(Info)
 const [isAdminLogin , setIsAdminLogin] = useState(true)
 const [isDonarLogin , setIsDonarLogin] = useState(false)
 const [arrowClick , setArrowClick] = useState(false)
 const [ btnText , setBtnText] = useState('')
 const [activeComponent, setActiveComponent] = useState(null) 

  const value = {
    info , setInfo, 
    isAdminLogin , setIsAdminLogin , 
    isDonarLogin , setIsDonarLogin ,
    arrowClick , setArrowClick, 
    btnText , setBtnText, 
    activeComponent, setActiveComponent
  };

  return (
    <GlobalState.Provider value={value}>{children}</GlobalState.Provider>
  );
};