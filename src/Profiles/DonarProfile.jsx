import React from 'react'
import { useContext } from 'react'
import { GlobalState } from '../State/State'
import { FaCircle } from 'react-icons/fa'
import demoImg from '../images/demo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../components/utils/Loading';
import Notification from '../components/utils/Notification';
import Profile_main from './Profile_main';


function DonarProfile() {
  const naviagte = useNavigate()
  const { API, setIsLoading } = useContext(GlobalState)
  const [info, setInfo] = useState({})


  const handleLogOutDonar = () => {
    localStorage.removeItem('donar_token');
    localStorage.removeItem('profilePic');
    setTimeout(() => {
      naviagte("donar-auth")
    }, 1500);

  }

  useEffect(() => {
    setIsLoading(true)
    const token = JSON.parse(localStorage.getItem("donar_token"));
    console.log(token)
    fetch(`${API}/donar/donars-one`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setInfo(data)
        setIsLoading(false)

        if (data) {
          localStorage.setItem("profilePic", JSON.stringify(data.profilePic))
        }

      })
  }, []);



  return (
    <div className='flex items-start justify-start'>
      <div className="donarProfileLeSidebar">
        <h2 className='text-3xl text-center my-2 uppercase flex items-center justify-center'>Your Profile <FaCircle className="text-green-500 text-sm ml-2" /> </h2>

        <div className="profielCard">
          <img className='w-56 m-auto h-48 ' src={info ? info.profilePic : demoImg} alt={info.name} />
          <div className='my-4'>
            <h4>Name :{info.name}</h4>
            <p className='py-2'>Email :{info.email}</p>
            <button onClick={handleLogOutDonar} className='button bg-gray-300'>Log-out</button>

          </div>

        </div>
        <Link to="/donar-register">
          <button className='button w-full my-2 bg-gray-300'>
            Register Your Event
          </button>
        </Link>
      </div>


      <div className="donarProfileMain md:px-0 px-3">


        <Profile_main />

      </div>
    </div>
  )
}

export default DonarProfile