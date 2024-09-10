import React from 'react'
import Inputs from '../utils/Inputs'
import { useContext, useState } from 'react'
import { GlobalState } from '../../State/State'
import TextArea from '../utils/TextArea';
import uploadFile from '../utils/UploadFile';
import Notification from '../utils/Notification';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SelectField from '../utils/SelectField';
import FileField from '../utils/FileField';

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
    console.log(image)
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
      {
        state && <h2 className='w-full  py-2 text-white text-lg text-center bg-red-500 text-uppercase'>
          Update Event
        </h2>
      }
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
        <SelectField
          label="Blood Group"
          name="bloodGroup"
          value={register.bloodGroup}
          required={true}
          handleChange={handleChange}
          options={["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"]}
        />

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
        <input onChange={handleFileChange} type="file" name='profilePic' className='input bg-gray-100' />
        {
          isImgLoading ?
            <small className='mb-4 text-red-500'>Uplaoding Images . . .</small>
            :
            <small className='mb-4'>Uplaod Photo</small>
        }
        {/* <FileField
          name="profilePic"
          lable={"Upload Photo"}
          required={false}
          handleFileChange={handleFileChange}
        /> */}
        <TextArea
          type="text"
          name="message"
          value={register.message}
          required={true}
          placeholder="Message"
          handleChange={handleChange}
          lable="Details About Of patient"
        />

        <button onClick={handleClick} className=' w-full py-4 px-7 rounded-sm text-xl font-medium bg-red-500 text-white my-3 hover:bg-red-600 '>
          {
            state ? "Update Now" : "Submit Now"
          }
        </button>
        {message && <Notification />}
      </form>


    </>
  )
}

export default AppoinmentForm