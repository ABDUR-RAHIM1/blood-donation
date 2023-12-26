import React from 'react'
import { useContext } from 'react'
import { GlobalState } from '../State/State'
import { FaCircle } from 'react-icons/fa'
import demoImg from '../images/demo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react'; 
import Profile_main from './Profile_main';


function UserProfile() {
  const naviagte = useNavigate()
  const { getLoginUser, loginInfo } = useContext(GlobalState)
 


  const handleLogOutDonar = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('profilePic');
    setTimeout(() => {
      naviagte("/user-auth")
    }, 1500);

  }

  // get login users  data
  useEffect(() => {
      getLoginUser()
  }, []);



  return (
    <div className='flex items-start justify-start'>
      <div className="donarProfileLeSidebar">
        <h2 className='text-3xl text-center my-2 uppercase flex items-center justify-center'>Your Profile <FaCircle className="text-green-500 text-sm ml-2" /> </h2>

        <div className="profielCard">
          <img className='w-56 m-auto h-48 ' src={loginInfo ? loginInfo.profilePic : demoImg} alt={loginInfo.name} />
          <div className='my-4'>
            <h4>Name :{loginInfo.name}</h4>
            <p className='py-2'>Email :{loginInfo.email}</p>
            <button onClick={handleLogOutDonar} className='button bg-gray-300'>Log-out</button>

          </div>

        </div>
        <Link to="/donar-register">
          <button className='button w-full my-2 bg-gray-300'>
            Register Your Event
          </button>
        </Link>

        <Link to="/add-blog">
          <button className='button w-full my-2 bg-gray-300'>
            Add Blog
          </button>
        </Link>
      </div>


      <div className="donarProfileMain md:px-0 px-3">


        <Profile_main />

      </div>
    </div>
  )
}

export default UserProfile