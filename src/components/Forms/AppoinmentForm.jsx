import React from 'react'
import Inputs from '../utils/Inputs'
import { useContext, useState } from 'react'
import { GlobalState } from '../../State/State'
import TextArea from '../utils/TextArea';
import uploadFile from '../utils/UploadFile';
import Notification from '../utils/Notification';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function AppoinmentForm() {
  const navigate = useNavigate()
  const state = useLocation().state;

  const { token, handleAppoinment, handleAppoinmentUpdate, message } = useContext(GlobalState);
  const [isImgLoading, setImgIsLoading] = useState(false)
  const [register, setRegister] = useState({ profilePic: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value })
  }

  const handleFileChange = async (e) => {
    const image = e.target.files[0];
    await uploadFile(image, setRegister, setImgIsLoading);
  };


  const handleClick = () => {
    if (!token) {
      navigate("/user-auth")
    }
  }
  useEffect(() => {
    if (state) {
      setRegister(state)
    }
  }, []);


  return (
    <>
      <div className='w-full  py-2 text-white bg-red-500'>
        <h2 className='text-lg text-center text-uppercase'>
          {
            state ? "Update Event" : "Apply for Apoinment"
          }
        </h2>
      </div>
      <form onSubmit={(e) =>
        state ?
          handleAppoinmentUpdate(e, state._id, register)
          :
          handleAppoinment(e, register)

      }>

        <Inputs
          type="number"
          name="contactNumber"
          value={register.contactNumber}
          required={true}
          placeholder="Contact number"
          handleChange={handleChange}
          lable="Enter Contact Number"
        />
        <select required={true} value={register.bloodGroup} onChange={handleChange} name="bloodGroup" className='form-control mt-4 fw-semi-bold'>
          <option value="">Select Your Blood Group</option>
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="AB+">AB+</option>
          <option value="O+">O+</option>
          <option value="A-">A-</option>
          <option value="B-">B-</option>
          <option value="AB-">AB-</option>
          <option value="O-">O-</option>
        </select>
        <small className='mb-3 text-green-800'>Blood Group</small>
        <Inputs
          type="text"
          name="problem"
          value={register.problem}
          required={true}
          placeholder="Problem ? "
          handleChange={handleChange}
          lable="Problems of patient"
        />
        <Inputs
          type="number"
          name="howMuch"
          value={register.howMuch}
          required={true}
          placeholder="how many ? "
          handleChange={handleChange}
          lable="how many bags"
        />
        <Inputs
          type="time"
          name="needTime"
          value={register.needTime}
          required={true}
          placeholder="When need"
          handleChange={handleChange}
          lable="what time will it take"
        />
        <Inputs
          type="text"
          name="whereNeed"
          value={register.whereNeed}
          required={true}
          placeholder="Place name"
          handleChange={handleChange}
          lable="Where is the need?"
        />
        <input onChange={handleFileChange} type="file" name='profilePic' className='form-control mt-4' />
        {
          isImgLoading ?
            <small className='mb-4 text-red-500'>Uplaoding Images . . .</small>
            :
            <small className='mb-4'>Uplaod Photo</small>
        }
        <TextArea
          type="text"
          name="message"
          value={register.message}
          required={true}
          placeholder="Message"
          handleChange={handleChange}
          lable="Write Details About it"
        />

        <button onClick={handleClick} className='button bg-red-900 text-white my-3 hover:bg-red-950 '>
          {
            state ? "Update Now" : "Apply For Donation"
          }
        </button>
        {message && <Notification />}
      </form>


    </>
  )
}

export default AppoinmentForm