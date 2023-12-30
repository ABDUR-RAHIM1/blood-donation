
import React, { useState, createContext } from "react";
export const GlobalState = createContext();

// wrap this function name on app component
export const MyState = ({ children }) => {

  const API = 'http://localhost:8000/api'
  const token = JSON.parse(localStorage.getItem("token"));
  const ADMIN_TOKEN = JSON.parse(localStorage.getItem("ADMIN_TOKEN"));


  //  reuseble state all are components
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [arrowClick, setArrowClick] = useState(false);
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [isDelete, setIsDelete] = useState(false)

  //  state with data from backend
  const [donarsAcc, setDonarsAcc] = useState([])
  const [usersAcc, setUsersAcc] = useState([])
  const [usersAllResgister, setUsersAllResgister] = useState([])
  const [allDonars, setAllDonars] = useState([])
  const [loginInfo, setLoginInfo] = useState({})  // get one user data from backend
  const [regsiterEvent, setRegsiterEvent] = useState([])
  const [blogs, setBlogs] = useState([])
  const [oneBlog, setOneBlog] = useState([])
  const [volunteer, setVolunteer] = useState([])
  const [sliders, setSlider] = useState([])

  // 0000 admin start

  const handleRegisterAdmin = (e, info) => {
    e.preventDefault();
    setIsLoading(true)
    fetch(`${API}/admin/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(info)
    }).then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setMessage(data.message)
      })
  }

  const handleAdminLogin = (e, info) => {
    e.preventDefault();
    setIsLoading(true)
    fetch(`${API}/admin/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(info)
    }).then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setMessage(data.message)
        if (data.login) {
          localStorage.setItem("ADMIN_TOKEN", JSON.stringify(data.token))
        }
      })
  }



  // 000  admin end




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
      .catch(err => setMessage(err.message))
  }

  // donar login 
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
          localStorage.setItem("token", JSON.stringify(data.token))
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
        setMessage(data.message)
        setIsLoading(false)
      })
  }

  //  login user
  const handleUserLogin = (e, authInfo) => {
    setIsLoading(true)
    e.preventDefault();
    fetch(`${API}/users/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(authInfo)
    }).then(res => res.json())
      .then(data => {
        setMessage(data.message)
        setIsLoading(false)
        if (data.login) {
          const token = data.token;
          localStorage.setItem('token', JSON.stringify(token))
        }
      })
  }

  // get login users data
  const getLoginUser = () => {
    setIsLoading(true)
    const token = JSON.parse(localStorage.getItem("token"));
    fetch(`${API}/users/users-one`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setLoginInfo(data)
        setIsLoading(false)
        if (data) {
          const photo_role = { profilePic: data.profilePic, role: data.role };
          localStorage.setItem("photo_role", JSON.stringify(photo_role))
        }

      })
  }

  // get login donar info

  const getDonarAccount = () => {
    setIsLoading(true)
    fetch(`${API}/donar/donars`)
      .then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setDonarsAcc(data)
      })
  }

  const getLoginDonar = () => {
    setIsLoading(true)
    const token = JSON.parse(localStorage.getItem("token"));
    fetch(`${API}/donar/donars-one`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setLoginInfo(data)
        setIsLoading(false)

        if (data) {
          const photo_role = { profilePic: data.profilePic, role: data.role };
          localStorage.setItem("photo_role", JSON.stringify(photo_role))
        }

      })
  }

  const handleUserResetPassword = (e, authInfo) => {
    setIsLoading(true)
    e.preventDefault();
    fetch(`${API}/users/reset/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(authInfo)
    }).then(res => res.json())
      .then(data => {
        setMessage(data.message)
        setIsLoading(false)
      })
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
        "Authorization": `Bearer ${token}`
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
        setMessage(data.message)
        setIsLoading(false)
      })
  }

  const handleDeleteRegister = (id) => {
    setIsLoading(true)
    fetch(`${API}/donar-register/delete/${id}`, {
      method: "DELETE",

    }).then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setIsDelete(!isDelete)
        setMessage(data.message)
      })
  }


  // get login donars regsieter event
  const getLoginDonarAccount = () => {
    setIsLoading(true)
    fetch(`${API}/donar-register/donars-one`, {
      method: "GET",
      headers: {
        'Content-type': "application/json",
        'Authorization': `Bearer ${token}`
      },
    }).then(res => res.json())
      .then(data => {

        setRegsiterEvent(data.donarInfo)
        setIsLoading(false)
      });
  }


  // 222  donar register handler end

  // 333 user register handler start here 


  const getUserAccount = () => {
    setIsLoading(true)
    fetch(`${API}/users/users`)
      .then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setUsersAcc(data)
      })
  }

  const getUserAllRegister = () => {
    setIsLoading(true)
    fetch(`${API}/users-register/users`)
      .then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setUsersAllResgister(data.users)
      })
  }

  const getLoginUserAccount = () => {
    setIsLoading(true)
    fetch(`${API}/users-register/users-one`, {
      method: "GET",
      headers: {
        "Content-type": "applcation/json",
        'Authorization': `Bearer ${token}`
      }
    }).then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setRegsiterEvent(data.userInfo)
      })
  }


  // register 
  const handleAppoinment = (e, register) => {
    e.preventDefault();
    if (!token) {
      alert("Please login and apply")
    }
    fetch(`${API}/users-register/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(register)
    }).then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setMessage(data.message)
      })
  }

  // update 
  const handleAppoinmentUpdate = (e, id, info) => {
    e.preventDefault();
    setIsLoading(true)
    fetch(`${API}/users-register/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(info)
    }).then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setMessage(data.message)
      })
  }

  const handleDeleteUserRegister = (id) => {
    setIsLoading(true)
    fetch(`${API}/users-register/delete/${id}`, {
      method: "DELETE",

    }).then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setIsDelete(!isDelete)
        setMessage(data.message)
      })
  }

  // 333 user register handler end here 




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


  //  blog  handler start here 

  const handleAddBlog = (e, blogInfo) => {
    e.preventDefault()
    setIsLoading(true)
    fetch(`${API}/blogs/blogs`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(blogInfo)
    }).then(res => res.json())
      .then(data => {
        setMessage(data.message)
        setIsLoading(false)
      })
  }
  //  add blog admin
  const handleAddBlogAdmin = (e, blogInfo) => {
    e.preventDefault()
    setIsLoading(true)
    fetch(`${API}/blogs/blogs`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${ADMIN_TOKEN}`
      },
      body: JSON.stringify(blogInfo)
    }).then(res => res.json())
      .then(data => {
        setMessage(data.message)
        setIsLoading(false)
      })
  }

  const handleGetBlogs = () => {
    setIsLoading(true)
    fetch(`${API}/blogs/blogs/`)
      .then(res => res.json())
      .then(data => {
        setBlogs(data.blogs)
        setIsLoading(false)
      })
  }

  const getOneBlog = () => {
    fetch(`${API}/blogs/blogs-one`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then(res => res.json())
      .then(data => {
        setIsLoading(false);
        setOneBlog(data.blogs);
      })
  }
  const getOneBlogAdmin = () => {
    fetch(`${API}/blogs/blogs-one`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${ADMIN_TOKEN}`
      }
    }).then(res => res.json())
      .then(data => {
        setIsLoading(false);
        setOneBlog(data.blogs);
      })
  }


  const handleEditBlog = (e, id, blogInfo) => {
    e.preventDefault();
    setIsLoading(true)
    fetch(`${API}/blogs/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(blogInfo)
    }).then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setMessage(data.message)
      })
  }

  const handleDeleteBlog = (id) => {
    fetch(`${API}/blogs/blogs/${id}`, {
      method: "DELETE",
    }).then(res => res.json())
      .then(data => {
        setMessage(data.message)
        setIsDelete(!isDelete)
      })
  }


  //  blog  hadnler end here 

  //  volunteeer start

  const handleGetVolunteer = () => {
    fetch(`${API}/volunteer/volunteer`)
      .then(res => res.json())
      .then(data => {
        setVolunteer(data.volunteer);
        setIsLoading(false)
      })
  }


  const handleGetOneVolunteer = () => {
    fetch(`${API}/volunteer/volunteer-one`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${ADMIN_TOKEN}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setVolunteer(data);
        setIsLoading(false)
      })
  }


  const handleAddVolunteer = (e, info) => {
    e.preventDefault();
    setIsLoading(true);
    fetch(`${API}/volunteer/volunteer-add`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${ADMIN_TOKEN}`
      },
      body: JSON.stringify(info)
    })
      .then(res => res.json())
      .then(data => {
        setIsLoading(false);
        setMessage(data.message)
      })
  }

  const handleUpdateVolunteer = (e, id, info) => {
    e.preventDefault();
    setIsLoading(true)
    fetch(`${API}/volunteer/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(info)
    }).then(res => res.json())
      .then(data => {
        setIsLoading(false)
      })
  }


  const handleDeleteVolunteer = (id) => {
    fetch(`${API}/volunteer/delete/${id}`, {
      method: "DELETE",
    }).then(res => res.json())
      .then(data => {
        setIsDelete(!isDelete)
        setMessage(data.message)
      })
  }

  //  volunteeer end here

  // slider  start   
  const handleGetSlider = () => {
    setIsLoading(true)
    fetch(`${API}/slider/sliders`)
      .then(res => res.json())
      .then(data => {
        setSlider(data)
        setIsLoading(false)
      })
  }

  const handleAddSlider = (e, info) => {
    e.preventDefault();
    setIsLoading(true)
    fetch(`${API}/slider/add`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(info)
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        setIsLoading(false)
      })
  }

  const handleSliderDelete = (id) => {
    fetch(`${API}/slider/delete/`, {
      method: "DELETE"
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        setMessage(data.message)
        setIsDelete(!isDelete)
      })
  }
  // slider  emd here 

  if (message) {
    setTimeout(() => {
      setMessage('')
    }, 3000);
  }

  const value = {
    API, token, ADMIN_TOKEN,
    isAdminLogin, setIsAdminLogin,
    arrowClick, setArrowClick,
    message, setMessage, isLoading, setIsLoading, isDelete,
    handleRegisterAdmin, handleAdminLogin, handleAddBlogAdmin, getOneBlogAdmin,
    getDonarAccount, donarsAcc, getUserAccount, usersAcc, getUserAllRegister, usersAllResgister,
    handleDonarRegister, handleLoginDonar, handleDonarAccountPassword, handleUserRegister, handleUserLogin, handleUserResetPassword,
    getLoginUser, loginInfo, getLoginDonar,
    handleDonarCreateProfiles, handleDeleteRegister, handleUpdateRegister, getLoginDonarAccount, getLoginUserAccount, regsiterEvent,
    handleAppoinment, handleAppoinmentUpdate, handleDeleteUserRegister,
    handleAddBlog, handleGetBlogs, blogs, getOneBlog, oneBlog, handleEditBlog, handleDeleteBlog,
    getAllDonarsItems, allDonars,
    handleAddVolunteer, handleGetVolunteer, handleGetOneVolunteer, volunteer, handleUpdateVolunteer, handleDeleteVolunteer,

    handleGetSlider, sliders, handleAddSlider , handleSliderDelete
  };

  return (
    <GlobalState.Provider value={value}>{children}</GlobalState.Provider>
  );
};