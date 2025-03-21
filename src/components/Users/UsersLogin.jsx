import React, { useContext, useState } from 'react'
import { GlobalState } from '../../State/State'
import { useNavigate } from 'react-router-dom'
import Inputs from '../utils/Inputs'
import { motion } from 'framer-motion'
import Loading from '../utils/Loading'
import Notification from '../utils/Notification'
import ResetPassword from '../utils/ResetPassword'
import loginImg2 from "../../images/loginBg2.png"
import useFileUploader from '../../hooks/useFileUploader'
import FileField from '../utils/FileField'
import { API } from '../../API/API'
import { toast } from 'react-toastify'

import Cookies from 'js-cookie'
import SelectField from '../utils/SelectField'

function UserLogin() {
  const navigate = useNavigate()
  const { message, setToken } = useContext(GlobalState)
  const [isRegister, setIsRegister] = useState(false)
  const [isReset, setIsReset] = useState(false)
  const [formData, setFormData] = useState({ name: "", gender: "", email: "", password: "", photo: "" })
  const { fileLoading, uploadFile } = useFileUploader()
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = async (e) => {
    const { name, value } = e.target;
    if (name === "photo") {
      const image = e.target.files[0];
      await uploadFile(image, setFormData);
    } else {

      setFormData({ ...formData, [name]: value })
    }
  }

  const handleUserLogin = (e) => {
    setIsLoading(true)
    e.preventDefault();
    fetch(`${API}/users/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then(res => res.json())
      .then(data => {
        setIsLoading(false)
        if (data.ok) {
          toast.success(data.message)
          const token = data.token;
          setToken(token)
          Cookies.set('BLOOD_USER_TOKEN', token)
          setTimeout(() => {
            navigate("/profile")
          }, 1000);
        } else {
          toast.error(data.message)
        }
      })
  }

  const handleUserRegister = (e) => {
    e.preventDefault();
    setIsLoading(true)
    e.preventDefault();
    fetch(`${API}/users/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then(res => res.json())
      .then(data => {
        setIsLoading(false)
        if (data.ok) {
          toast.success(data.message)
        } else {
          toast.error(data.message)
        }
      })
  }


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: '1'
      }}
      className='  login_page_bg w-full h-auto min-h-screen px-0 md:px-10 py-20'>

      <div className=" bg-white py-10 rounded-md  flex items-center justify-between flex-wrap">

        <div className='w-[500px] bg-blue-500'>
          <img src={loginImg2} alt="" />

        </div>

        <div className="w-full md:w-[48%] mr-0 md:mr-2">
          <form onSubmit={

            isRegister
              ? handleUserRegister
              : handleUserLogin

          } className=' w-full bg-gray-50 shadow-md p-6'>

            <h1 className=' text-4xl text-red-700 font-bold my-10' >
              {
                isRegister ? "Register Account" : "Log-in"
              }
            </h1>

            {isRegister &&

              <>

                <Inputs
                  type='text'
                  name='name'
                  value={formData.name}
                  required={true}
                  placeholder='Enter Your Name'
                  label='Enter Your Good Name'
                  handleChange={handleChange}
                />
                <SelectField
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  required={true}
                  handleChange={handleChange}
                  options={["Male", "Female", "Others"]}
                />


              </>

            }

            <Inputs
              type='email'
              name='email'
              value={formData.email}
              required={true}
              placeholder='Enter Your Email'
              label='Enter Your Email'
              handleChange={handleChange}
            />
            <Inputs
              type='password'
              name='password'
              value={formData.password}
              required={true}
              placeholder='********'
              label='Enter Your Password'
              handleChange={handleChange}
            />

            {isRegister &&

              <FileField
                name="photo"
                label={fileLoading ? "Uploading . . ." : "Upload Patient Photo"}
                required={false}
                handleChange={handleChange}
              />
            }



            <button className='py-4 px-5 text-center my-10 primaryBg w-full font-bold hover:secondaryBg duration-200'>
              {isLoading ? <Loading /> : isRegister ? 'Register' : 'Log-in'}
            </button>



            <p onClick={() => setIsReset(!isReset)} className='font-italic my-4 cursor-pointer text-center button bg-slate-200 text-red-800'>forgat password</p>


            {message && <Notification />}

            <span onClick={() => setIsRegister(!isRegister)} className='loginText'>
              {
                isRegister ? <small className='text-blue-800'>Log-in here</small> : <small>Don’t have an account yet ? <span className='text-blue-700'>Sign up</span></small>
              }
            </span>

          </form>
          {
            isReset && <ResetPassword role='user' />
          }
        </div>

      </div>

    </motion.div >
  )
}

export default UserLogin

