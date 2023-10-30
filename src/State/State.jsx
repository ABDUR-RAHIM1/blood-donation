import React, { useState, createContext } from "react";
import { userRegister } from "../components/utils/RegisterInfo";
import Home from "../components/Admin/Admin/Home";
import AddBLog from "../components/Admin/Admin/AddBLog";

// usesContext and VlobalState import on the component here use it state
export const GlobalState = createContext(); // Create the context

// wrap this function name on app component
export const MyState = ({ children }) => {
 const [register , setRegister] = useState(userRegister)
 const [isAdminLogin , setIsAdminLogin] = useState(true)
 const [isDonarLogin , setIsDonarLogin] = useState(false)
 const [arrowClick , setArrowClick] = useState(false)
 const [ btnText , setBtnText] = useState('')
 const [activeComponent, setActiveComponent] = useState('')

  const value = {
    register , setRegister, 
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