import React from 'react'
import Inputs from '../utils/Inputs'
import { useContext, useState } from 'react'
import { GlobalState } from '../../State/State'
import TextArea from '../utils/TextArea';
import Notification from '../utils/Notification';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SelectField from '../utils/SelectField';
import FileField from '../utils/FileField';
import useFileUploader from '../hooks/useFileUploader';
import { appoinmentInitialState } from '../../Data/formData/appoinmentForm';

function AppoinmentForm() {
  const navigate = useNavigate()
  const state = useLocation().state;

  const { token, handleAppoinment, handleAppoinmentUpdate, message } = useContext(GlobalState);

  const [formData, setFormData] = useState(appoinmentInitialState);
  const { fileLoading, uploadFile } = useFileUploader()



  const handleChange = async (e) => {
    const { name, value } = e.target;
    if (name === "profilePic") {
      const image = e.target.files[0];
      await uploadFile(image, setFormData);
      console.log("proiflePic")
    } else {

      setFormData({ ...formData, [name]: value })
    }
  }
  console.log(formData)


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
          value={formData.contactNumber}
          required={true}
          placeholder="Contact number"
          handleChange={handleChange}
          label="Enter Contact Number"
        />
        <SelectField
          label="Blood Group"
          name="bloodGroup"
          value={formData.bloodGroup}
          required={true}
          handleChange={handleChange}
          options={["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"]}
        />

        <Inputs
          type="text"
          name="problem"
          value={formData.problem}
          required={true}
          placeholder="Problem ? "
          handleChange={handleChange}
          label="Problems of patient"
        />
        <Inputs
          type="number"
          name="howMuch"
          value={formData.howMuch}
          required={true}
          placeholder="how many ? "
          handleChange={handleChange}
          label="how many bags"
        />
        <Inputs
          type="time"
          name="needTime"
          value={formData.needTime}
          required={true}
          placeholder="When need"
          handleChange={handleChange}
          label="what time will it take"
        />
        <Inputs
          type="text"
          name="whereNeed"
          value={formData.whereNeed}
          required={true}
          placeholder="Place name"
          handleChange={handleChange}
          label="Where is the need?"
        />


        <FileField
          name="profilePic"
          label={fileLoading ? "Uploading . . ." : "Upload Photo"}
          required={false}
          handleChange={handleChange}
        />
        <TextArea
          type="text"
          name="message"
          value={formData.message}
          required={true}
          placeholder="Message"
          handleChange={handleChange}
          label="  About Of patient Condition"
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