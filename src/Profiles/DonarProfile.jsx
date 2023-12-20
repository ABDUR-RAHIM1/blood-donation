import React from 'react'
import { useContext } from 'react'
import { GlobalState } from '../State/State'
import { FaCircle } from 'react-icons/fa'
import demoImg from '../images/demo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react'; 
import { useState } from 'react';
import uploadFile from '../components/utils/UploadFile';
import Loading from '../components/utils/Loading';
import Notification from '../components/utils/Notification';


function DonarProfile() {
  const naviagte = useNavigate()
  const {donarProfilePic, isDonarLogin, setIsDonarLogin, handleDonarProfileUplaod,getDonarProfilePhoto, isLoading, message } = useContext(GlobalState)
  const [imgLoading, setImgLoading] = useState(false)
  const [profileImg, setProfileImg] = useState({ profilePic: "" });
  
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
    };

    getDonarProfilePhoto()


  }, [message]);


  const handleFileChange = async (e) => {
    const image = e.target.files[0];
    await uploadFile(image, setProfileImg, setImgLoading);

  }

 

  return (
    <div className='flex-b justify-start'>
      <div className="donarProfileLeSidebar">
        <h2 className='text-3xl text-center my-2 uppercase flex items-center justify-center'>Your Profile <FaCircle className="text-green-500 text-sm ml-2" /> </h2>

        <div className="profielCard">
          {
            message && <Notification />
          }
          <form onSubmit={(e) => handleDonarProfileUplaod(e, profileImg)} className='my-3' action="">
            {imgLoading ? <Loading size="sm" /> :
              <input onChange={handleFileChange} className='' type="file" id='file' />}

            <button disabled={imgLoading} type='submit' className='button my-2 w-full bg-gray-300'>
              {
                isLoading ? <Loading size='sm' />
                  :
                (
                  imgLoading ? "Waiting" : "Uplaod Photo"
                )

              }
            </button>
          </form>
          {
          donarProfilePic ? donarProfilePic.map(dp => (
            <img key={dp._id} className='w-56 m-auto h-48 ' src={dp.profilePic} alt="" />
          ))
          :  <img className='w-56 m-auto h-48 ' src={demoImg} alt="" />
          }
       

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