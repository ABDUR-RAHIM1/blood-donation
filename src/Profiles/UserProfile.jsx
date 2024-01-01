import React from 'react'
import { useContext } from 'react'
import { GlobalState } from '../State/State'
import { FaCircle } from 'react-icons/fa'
import demoImg from '../images/demo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Profile_main from './Profile_main';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from 'react';

function UserProfile() {
  const naviagte = useNavigate()
  const [arrowClick, setArrowClick] = useState(false)
  const { getLoginUser, loginInfo, isDelete } = useContext(GlobalState)



  const handleLogOutDonar = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('photo_role');
    setTimeout(() => {
      naviagte("/auth")
    }, 1500);

  }

  // get login users  data
  useEffect(() => {
    getLoginUser()
  }, [isDelete]);



  return (
    <div className='flex items-start justify-start'>
      <div className={` ${arrowClick ? "w-0 px-0" : "w-64 md:w-72 px-4"} duration-300 overflow-hidden  donarProfileLeSidebar`}>
        <h2 className='text-xl text-center my-2 uppercase flex items-center justify-center'>Your Profile <FaCircle className="text-green-500 text-sm ml-2" /> </h2>
      
    
      
        <div className="profielCard">
          <img className='w-56 m-auto h-48 ' src={loginInfo ? loginInfo.profilePic : demoImg} alt={loginInfo.name} />
          <div className='my-4 px-1'>
            <h4 className='text-sm'>{loginInfo.name}</h4>
            <p className='py-2 text-sm'>{loginInfo.email}</p>
            <button onClick={handleLogOutDonar} className='button mt-3 bg-gray-300'>Log-out</button>

          </div>

        </div>
        <Link to="/donar-register">
          <button className='button w-full my-2 bg-gray-300'>
            Register
          </button>
        </Link>
        <Link to="/appoinment">
          <button className='button w-full my-2 bg-gray-300'>
            Apply
          </button>
        </Link>
        <Link to="/add-blog">
          <button className='button w-full my-2 bg-gray-300'>
            Add Blog
          </button>
        </Link>
      </div>


      <div className="donarProfileMain relative md:px-0 px-3">
        
      <FaArrowAltCircleRight  onClick={() => setArrowClick(!arrowClick)} className={` ${!arrowClick ? "rotate-180" : "rotate-0"} cursor-pointer duration-300  z-50 text-3xl text-black absolute top-7 left-0`} />
        <Profile_main />

      </div>
    </div>
  )
}

export default UserProfile