import React from 'react'
import { useContext } from 'react'
import { GlobalState } from '../State/State'
import {FaCircle} from 'react-icons/fa'
import demoImg from '../images/demo.jpg';

function DonarProfile() {
  const { isDonarLogin } = useContext(GlobalState)
  return (
    <div className='flex-b justify-start'>
      <div className="donarProfileLeSidebar">
        <h2 className='text-3xl text-center my-2 uppercase flex items-center justify-center'>Your Profile <FaCircle  className="text-green-500 text-sm ml-2"/> </h2>
        <div className="profielCard">
          <img className='w-54 m-auto h-48' src={isDonarLogin.image || demoImg} alt="" />
          <div className='my-4'>
            <h4>Name :{isDonarLogin.name}</h4>
            <p className='py-2'>Email :{isDonarLogin.email}</p>
          </div>
        </div>
      </div>
      <div className="donarProfileMain">
        priofle main
      </div>
    </div>
  )
}

export default DonarProfile