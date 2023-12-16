
import React, { useState, createContext } from "react";
export const GlobalState = createContext();

// wrap this function name on app component
export const MyState = ({ children }) => {


  const API = 'http://localhost:8000/api'



  const [isAdminLogin, setIsAdminLogin] = useState(true);
  const [isDonarLogin, setIsDonarLogin] = useState({});
  const [arrowClick, setArrowClick] = useState(false);
  const [message, setMessage] = useState('')
  const [ isLoading, setIsLoading] = useState(false);

  //  donar account sign up / register
  const handleDonarRegister = (e, authInfo) => {
    e.preventDefault();
    setLoading(true)
    console.log('login handler click');
    fetch('http://localhost:8000/api/donar/register', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(authInfo)
    })
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        console.log(data)
        setMessage(data.message)
        setIsLogin(data.register)
      })
      .catch(err => console.log(err))
  }

  // donar account login / sign in 

  if (message) {
    setTimeout(() => {
      setMessage('')
    }, 3000);
  }

  const value = {
    isAdminLogin, setIsAdminLogin,
    isDonarLogin, setIsDonarLogin,
    arrowClick, setArrowClick,
    message, setMessage,  isLoading, setIsLoading,
    handleDonarRegister,
  };

  return (
    <GlobalState.Provider value={value}>{children}</GlobalState.Provider>
  );
};