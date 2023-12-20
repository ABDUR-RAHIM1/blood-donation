
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

  //  get Donars state
  const [allDonars, setAllDonars] = useState([])
  const [donarProfilePic, setDonarProfilePic] = useState([])


  //  donar account sign up / register
  const handleDonarRegister = (e, authInfo) => {
    e.preventDefault();
    setIsLoading(true)
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

  //   get all donars end here 

  //  uplaod profile  picture handler start
  const handleDonarProfileUplaod = (e, profileImg) => {
    e.preventDefault();
    setIsLoading(true)
    const id = "donarProfile"
    fetch(`${API}/donar/profile/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(profileImg)
    }).then(res => res.json())
      .then(data => {
        setMessage(data.message);
        setIsLoading(false)
      })

  }

  //  get doanr profile photo 
  const getDonarProfilePhoto = () => {
    setIsLoading(true)
    fetch(`${API}/donar/profile`)
      .then(res => res.json())
      .then(data => {
        setDonarProfilePic(data.profilePicture);
        setIsLoading(false)
      })
  }


  //  uplaod profile  picture handler end




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
    getAllDonarsItems, allDonars,
    handleDonarProfileUplaod, getDonarProfilePhoto, donarProfilePic,
  };

  return (
    <GlobalState.Provider value={value}>{children}</GlobalState.Provider>
  );
};