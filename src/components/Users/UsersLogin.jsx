import React, { useContext, useState } from 'react'
import { GlobalState } from '../../State/State'
import { useNavigate } from 'react-router-dom'
import Inputs from '../utils/Inputs'
import { motion } from 'framer-motion'
import Loading from '../utils/Loading'
import Notification from '../utils/Notification'
import ResetPassword from '../utils/ResetPassword'
import uploadFile from '../utils/UploadFile'
import { useEffect } from 'react'

function UserLogin() {
  const navigate = useNavigate()
  const { handleUserRegister, handleUserLogin, message, isLoading } = useContext(GlobalState)
  const [isRegister, setIsRegister] = useState(false)
  const [isReset, setIsReset] = useState(false)
  const [register, setRegister] = useState({ profilePic: "" })
  const [imgLoading, setImgLoading] = useState(false)


  //   donar login changer
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value })

  }

  const handleFileChange = async (e) => {
    const image = e.target.files[0];
    await uploadFile(image, setRegister, setImgLoading);

  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/user-profile")
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: '1'
      }}
      className='bg-slate-700 w-full h-screen pt-10'>

      <form onSubmit={

        isRegister
          ? (e) => handleUserRegister(e, register)
          : (e) => handleUserLogin(e, register)

      } className='form-w bg-slate-600 p-6'>

        {
          isRegister ? <h3 className='formHeading'>Register Account</h3>
            : <h3 className='formHeading'>Log-in</h3>
        }

        {isRegister &&

          <>

            <Inputs
              type='text'
              name='name'
              value={register.name}
              required={true}
              placeholder='Enter Your Name'
              lable='Enter Your Good Name'
              handleChange={handleChange}
            />
            <Inputs
              type='text'
              name='gender'
              value={register.gender}
              required={true}
              placeholder='Gender'
              lable='Your Gender'
              handleChange={handleChange}
            />

          </>

        }

        <Inputs
          type='email'
          name='email'
          value={register.email}
          required={true}
          placeholder='Enter Your Email'
          lable='Enter Your Email'
          handleChange={handleChange}
        />
        <Inputs
          type='password'
          name='password'
          value={register.password}
          required={true}
          placeholder='********'
          lable='Enter Your Password'
          handleChange={handleChange}
        />

        {isRegister &&
          <>
            <input onChange={handleFileChange} id='file' type="file" name='profilePic' className='form-control mt-3' />
            {
              imgLoading ? <small className='mb-3 text-red-400'>Uploading Image</small>
                :
                <small className='mb-3 text-green-400'>Upload Your Profile Photo</small>
            }

            <br />
          </>
        }



        <button className='button mr-2 bg-slate-700 text-white my-4'> {isRegister ? 'Register' : 'Log-in'} </button>
        {
          isLoading ? <Loading size='sm' /> : ''
        }
        <span onClick={() => setIsRegister(!isRegister)} className='loginText'>
          {
            isRegister ? 'Log-in here' : `Don’t have an account yet ? Sign up `
          }
        </span>

        <p onClick={() => setIsReset(!isReset)} className='font-italic my-4 cursor-pointer text-center button bg-slate-200 text-red-800'>forgat password</p>


        {message && <Notification />}
      </form>
      {
        isReset && <ResetPassword role='user' />
      }
    </motion.div>
  )
}

export default UserLogin

