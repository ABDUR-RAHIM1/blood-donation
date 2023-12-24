import React, { useContext, useState } from 'react'
import { GlobalState } from '../../State/State'
import { useNavigate } from 'react-router-dom'
import Inputs from '../utils/Inputs'
import { motion } from 'framer-motion'
import Loading from '../utils/Loading'
import Notification from '../utils/Notification'
import { useEffect } from 'react'
import ResetPassword from '../utils/ResetPassword'
import uploadFile from '../utils/UploadFile'
function DonarLogin() {

  const navigate = useNavigate()
  const { handleDonarRegister, isLoading, setIsLoading, setMessage, setIsDonarLogin } = useContext(GlobalState)
  const [isRegister, setIsRegister] = useState(false)
  const [isReset, setIsReset] = useState(false)
  const [authInfo, setAuthInfo] = useState({ profilePic: "" })
  const [imgLoading, setImgLoading] = useState(false)

  //  navigate to donar regsieter page when donar already login 
  useEffect(() => {
    const isDonarLoginInfo = JSON.parse(localStorage.getItem('donarLoginInfo'));
    if (isDonarLoginInfo) {
      setIsDonarLogin(isDonarLoginInfo)
      navigate('/donar-profile')
    }
  }, []);


  //   donar login changer
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthInfo({ ...authInfo, [name]: value })

  }

  const handleFileChange = async (e) => {
    const image = e.target.files[0];
    await uploadFile(image, setAuthInfo, setImgLoading);

  }


  //  donar login submit handler
  const handleLoginDonar = (e) => {
    e.preventDefault();
    setIsLoading(true)
    fetch('http://localhost:8000/api/donar/login', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(authInfo)
    }).then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setMessage(data.message)
        console.log(data)

        if (data.login) {
          localStorage.setItem("donar_token", JSON.stringify(data.token))
          setTimeout(() => {
            navigate("/donar-profile")
          }, 1500);
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
      className='bg-slate-700 w-full h-screen pt-10'>

      <form onSubmit={

        isRegister
          ? (e) => handleDonarRegister(e, authInfo)
          : (e) => handleLoginDonar(e, authInfo)

      } className='form-w bg-slate-600 p-6'>

        {
          isRegister ? <h3 className='formHeading'>Register Account</h3>
            : <h3 className='formHeading'>Log-in</h3>
        }

        {isRegister &&

          <div>

            <Inputs
              type='text'
              name='name'
              value={authInfo.name}
              required={true}
              placeholder='Enter Your Name'
              lable='Enter Your Good Name'
              handleChange={handleChange}
            />
            <Inputs
              type='text'
              name='gender'
              value={authInfo.gender}
              required={true}
              placeholder='Gender'
              lable='Your Gender'
              handleChange={handleChange}
            />
          </div>}
        <Inputs
          type='email'
          name='email'
          value={authInfo.email}
          required={true}
          placeholder='Enter Your Email'
          lable='Enter Your Email'
          handleChange={handleChange}
        />
        <Inputs
          type='password'
          name='password'
          value={authInfo.password}
          required={true}
          placeholder='********'
          lable='Enter Your Password'
          handleChange={handleChange}
        />

        {isRegister &&
          <>
            <input onChange={handleFileChange}  value={authInfo.profilePic} id='file' type="file" name='profilePic' className='form-control mt-3' />
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


        <Notification />
      </form>
      {
        isReset && <ResetPassword />
      }
    </motion.div>
  )
}

export default DonarLogin

