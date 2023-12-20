import React from 'react'
import { useContext } from 'react'
import { GlobalState } from '../State/State'
import { FaCircle } from 'react-icons/fa'
import demoImg from '../images/demo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function DonarProfile() {
  const naviagte = useNavigate()
  const { isDonarLogin, setIsDonarLogin } = useContext(GlobalState)
  const handleLogOutDonar = () => {
    localStorage.removeItem('donarLoginInfo')
    setTimeout(() => {
      naviagte('/donar-auth')
    }, 1500);
  }

  useEffect(() => {
    const isDonarLoginInfo = JSON.parse(localStorage.getItem('donarLoginInfo'));
    if (isDonarLoginInfo) {
      setIsDonarLogin(isDonarLoginInfo)
    }
  }, []);

  return (
    <div className='flex-b justify-start'>
      <div className="donarProfileLeSidebar">
        <h2 className='text-3xl text-center my-2 uppercase flex items-center justify-center'>Your Profile <FaCircle className="text-green-500 text-sm ml-2" /> </h2>
        <div className="profielCard">
          <img className='w-54 m-auto h-48' src={isDonarLogin.image || demoImg} alt="" />
          <div className='my-4'>
            <h4>Name :{isDonarLogin.name}</h4>
            <p className='py-2'>Email :{isDonarLogin.email}</p>
            <button onClick={handleLogOutDonar} className='button bg-gray-300'>Log-out</button>
          </div>
        </div>
        <Link to="/donar-register">
          <button className='button w-full my-2 bg-gray-300'>
            Register Your Event
          </button>
        </Link>
      </div>
      <div className="donarProfileMain">
        priofle main
      </div>
    </div>
  )
}

export default DonarProfile