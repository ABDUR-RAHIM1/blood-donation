
import React, { useState, createContext } from "react";
export const GlobalState = createContext();

// wrap this function name on app component
export const MyState = ({ children }) => {

  const API = 'http://localhost:8000/api'
  const donartoken = JSON.parse(localStorage.getItem("donar_token"));

  //  reuseble state all are components
  const [isAdminLogin, setIsAdminLogin] = useState(true);
  const [arrowClick, setArrowClick] = useState(false);
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [isDelete, setIsDelete] = useState(false)

  //  state with data from backend
  const [allDonars, setAllDonars] = useState([])
  const [blogs, setBlogs] = useState([])
  const [oneBlog, setOneBlog] = useState([])

  //111  donar / user account sign up / register //////////////////////////////////

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

  // doanr login 
  const handleLoginDonar = (e, authInfo) => {
    e.preventDefault();
    setIsLoading(true)
    fetch('http://localhost:8000/api/donar/login', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(authInfo)
    }).then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setMessage(data.message) 
        if (data.login) {
          localStorage.setItem("donar_token", JSON.stringify(data.token))
        }

      })
  }



  // donar reset password 
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


  // user register
  const handleUserRegister = (e, authInfo) => {
    setIsLoading(true)
    e.preventDefault();
    fetch(`${API}/users/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(authInfo)
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        setMessage(data.message)
        setIsLoading(false)
      })
  }

  //  login user
  const handleUserLogin = (e, authInfo) => {
    setIsLoading(true)
    e.preventDefault();
    console.log(authInfo)
    fetch(`${API}/users/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(authInfo)
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        setMessage(data.message)
        setIsLoading(false)
        if (data.login) {
          const token = data.token;
          localStorage.setItem('token', JSON.stringify(token))
        }
      })
  }



  const handleUserResetPassword = (e, authInfo) => {
    e.preventDefault();
    console.log("user reste password")
  }

  //1111 donar/ user auth account reset password handler end here ///////////////////




  // 222  donar register handler start
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

  const handleUpdateRegister = (e, id, info) => {
    e.preventDefault()
    setIsLoading(true)
    fetch(`${API}/donar-register/update/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info)
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        setMessage(data.message)
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

  // 222  donar register handler end






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


  //  blog  hadnler start here 

  const handleAddBlog = (e, blogInfo) => {
    e.preventDefault()
    setIsLoading(true)
    fetch(`${API}/blogs/blogs`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${donartoken}`
      },
      body: JSON.stringify(blogInfo)
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        setMessage(data.message)
        setIsLoading(false)
      })
  }


  const handleGetBlogs = () => {
    setIsLoading(true)
    fetch(`${API}/blogs/blogs/`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setBlogs(data.blogs)
        setIsLoading(false)
      })
  }

  const getOneBlog = () => {
    console.log('get one blog')
    fetch(`${API}/blogs/blogs-one`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${donartoken}`
      }
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        setIsLoading(false);
        setOneBlog(data.blogs);
      })
  }


  const handleEditBlog = (e, id, blogInfo) => {
    e.preventDefault();
    console.log("update", id)
    setIsLoading(true)
    fetch(`${API}/blogs/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(blogInfo)
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        setIsLoading(false)
        setMessage(data.message)
      })
  }

  const handleDeleteBlog = (id) => {
    console.log("delete", id)
    fetch(`${API}/blogs/blogs/${id}`, {
      method: "DELETE",
    }).then(res => res.json())
      .then(data => {
        setMessage(data.message)
        setIsDelete(!isDelete)
      })
  }


  //  blog  hadnler end here 





  if (message) {
    setTimeout(() => {
      setMessage('')
    }, 3000);
  }

  const value = {
    API, donartoken,
    isAdminLogin, setIsAdminLogin,
    arrowClick, setArrowClick,
    message, setMessage, isLoading, setIsLoading, isDelete,
    handleDonarRegister,handleLoginDonar,  handleDonarAccountPassword, handleUserRegister, handleUserLogin, handleUserResetPassword,

    handleDonarCreateProfiles, handleDeleteRegister, handleUpdateRegister,
    handleAddBlog, handleGetBlogs, blogs, getOneBlog, oneBlog, handleEditBlog, handleDeleteBlog,
    getAllDonarsItems, allDonars,

  };

  return (
    <GlobalState.Provider value={value}>{children}</GlobalState.Provider>
  );
};