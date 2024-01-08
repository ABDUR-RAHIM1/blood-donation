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
import loginImg2 from "../../images/loginBg2.png"

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
      setTimeout(() => {
        navigate("/profile")
      }, 1500);
    }
  }, [isLoading])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: '1'
      }}
      className='  login_page_bg w-full  pt-10'>

      <div className="login_forms">
        <img className=' w-full md:w-48 h-52 md:h-400' src={loginImg2} alt="" />

        <div className="w-full md:w-48">
          <form onSubmit={

            isRegister
              ? (e) => handleUserRegister(e, register)
              : (e) => handleUserLogin(e, register)

          } className='form-w bg-gray-100 p-6'>

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
                <input required onChange={handleFileChange} id='file' type="file" name='profilePic' className='form-control mt-3' />
                {
                  imgLoading ? <small className='mb-3 text-red-400'>Uploading Image</small>
                    :
                    <small className='mb-3 text-green-400'>Upload Your Profile Photo</small>
                }

                <br />
              </>
            }



            <button className='button button_blue my-4'>
              { isLoading ? <Loading size='sm' /> : isRegister ? 'Register' : 'Log-in'}
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

    </motion.div>
  )
}

export default UserLogin

