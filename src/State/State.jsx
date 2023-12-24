
import React, { useState, createContext } from "react";
export const GlobalState = createContext();

// wrap this function name on app component
export const MyState = ({ children }) => {

  const API = 'http://localhost:8000/api'
  const donartoken = JSON.parse(localStorage.getItem("donar_token"));

  const [isAdminLogin, setIsAdminLogin] = useState(true);
  const [isDonarLogin, setIsDonarLogin] = useState({});
  const [arrowClick, setArrowClick] = useState(false);
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [isDelete, setIsDelete] = useState(false)

  //  get Donars state
  const [allDonars, setAllDonars] = useState([])


  //  donar account sign up / register
  const handleDonarRegister = (e, authInfo) => {
    e.preventDefault();
    setIsLoading(true)
    fetch(`${API}/donar/register`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json',

      },
      body: JSON.stringify(authInfo)
    })
      .then(res => res.json())
      .then(data => {
        setIsLoading(false)
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
        setMessage(data.message);
        setIsLoading(false)
      })
  }
  // donar auth account reset password handler end here 


  //  donar register handler start
  const handleDonarCreateProfiles = (e, registerInfo) => {
    e.preventDefault();
    setIsLoading(true)
    fetch(`${API}/donar-register/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${donartoken}`
      },
      body: JSON.stringify(registerInfo)
    }).then(res => res.json())
      .then(data => {
        setMessage(data.message);
        setIsLoading(false)
      })

  }

  const handleDeleteRegister = (id) => {
    setIsLoading(true)
    console.log("delete", id)
    fetch(`${API}/donar-register/delete/${id}`, {
      method: "DELETE",

    }).then(res => res.json())
      .then(data => {
        console.log(data)
        setIsLoading(false)
        setIsDelete(!isDelete)
        setMessage(data.message)
      })
  }

  //  donar register handler end






  //   get all donars start 
  const getAllDonarsItems = () => {
    setIsLoading(true)
    fetch(`${API}/donar-register/donars`)
      .then(res => res.json())
      .then(data => {
        setAllDonars(data.donars);
        setIsLoading(false)
      }).catch(err => {
        setMessage(err.message)
      })
  }


  if (message) {
    setTimeout(() => {
      setMessage('')
    }, 3000);
  }

  const value = {
    API, donartoken,
    isAdminLogin, setIsAdminLogin,
    isDonarLogin, setIsDonarLogin,
    arrowClick, setArrowClick,
    message, setMessage, isLoading, setIsLoading,
    handleDonarRegister, handleDonarAccountPassword,
    handleDonarCreateProfiles, handleDeleteRegister,
    getAllDonarsItems, allDonars,

  };

  return (
    <GlobalState.Provider value={value}>{children}</GlobalState.Provider>
  );
};