
import React, { useState, createContext } from "react";
export const GlobalState = createContext();

// wrap this function name on app component
export const MyState = ({ children }) => {

  const API = 'http://localhost:8000/api'

  const [isAdminLogin, setIsAdminLogin] = useState(true);
  const [isDonarLogin, setIsDonarLogin] = useState({});
  const [arrowClick, setArrowClick] = useState(false);
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  //  donar account sign up / register
  const handleDonarRegister = (e, authInfo) => {
    e.preventDefault();
    setIsLoading(true)
    console.log('login handler click');
    fetch(`${API}/donar/register`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(authInfo)
    })
      .then(res => res.json())
      .then(data => {
        setIsLoading(false)
        console.log(data)
        setMessage(data.message)
      })
      .catch(err => console.log(err))
  }

  // donar account reset password handler start 
  const handleDonarAccountPassword = (e, authInfo) => {
    e.preventDefault();
    setIsLoading(true)
    fetch(`${API}/donar/reset`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(authInfo)
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        setMessage(data.message);
        setIsLoading(false)
      })
  }
  // donar account reset password handler end here 

  //  donar register handler start

  const handleDonarCreateProfiles = (e, registerInfo) => {
    e.preventDefault();
    setIsLoading(true)
    fetch(`${API}/donar-register/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(registerInfo)
    }).then(res => res.json())
      .then(data => {
        setMessage(data.message);
        setIsLoading(false)
      })

  }

  //  donar register handler end


  if (message) {
    setTimeout(() => {
      setMessage('')
    }, 3000);
  }

  const value = {
    API,
    isAdminLogin, setIsAdminLogin,
    isDonarLogin, setIsDonarLogin,
    arrowClick, setArrowClick,
    message, setMessage, isLoading, setIsLoading,
    handleDonarRegister, handleDonarAccountPassword, handleDonarCreateProfiles,
  };

  return (
    <GlobalState.Provider value={value}>{children}</GlobalState.Provider>
  );
};