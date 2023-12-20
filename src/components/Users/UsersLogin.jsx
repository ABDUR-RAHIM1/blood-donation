import React, { useContext, useState } from 'react'
import { GlobalState } from '../../State/State'
import {useNavigate } from 'react-router-dom'
import Inputs from '../utils/Inputs'
import { motion } from 'framer-motion'
import Loading from '../utils/Loading'
import Notification from '../utils/Notification'
import { useEffect } from 'react'
function UserLogin() {
  
  const navigate = useNavigate()
  const {API , handleDonarRegister, isLoading, setIsLoading, setMessage, setIsDonarLogin } = useContext(GlobalState)
  const [isRegister, setIsRegister] = useState(false)
  const [isLogin, setIsLogin] = useState(Boolean)
  const [authInfo, setAuthInfo] = useState({ role: '' })
 
  //  navigate to donar regsieter page when donar already login 
  useEffect(() => {
    const isDonarLoginInfo = JSON.parse(localStorage.getItem('donarLoginInfo'));
    if (isDonarLoginInfo) {
      setIsDonarLogin(isDonarLoginInfo)
      navigate('/profile')
    }
  }, []);

  //   donar login changer
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthInfo({ ...authInfo, [name]: value, role:'donar' })

  }

  console.log(authInfo)

  //  donar login submit handler
  const handleLoginDonar = (e) => {
    e.preventDefault();
    setIsLoading(true)
    fetch(`${API}/donar/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(authInfo)
    }).then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setMessage(data.message)
        console.log(data.login)
        setIsLogin(data.login)
        if (data.login === true) {

          localStorage.setItem('donarLoginInfo', JSON.stringify(data.loginInfo))
          setTimeout(() => {
            navigate('/profile')
          }, 2000);
        } else {
          navigate('/donar-auth')
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
        {isRegister && <div>
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

        <button className='button mr-2 bg-slate-700 text-white my-4'> {isRegister ? 'Register' : 'Log-in'} </button>
        {
          isLoading ? <Loading size='sm' /> : ''
        }
        <span onClick={() => setIsRegister(!isRegister)} className='loginText'>
          {
            isRegister ? 'Log-in here' : `Don’t have an account yet ? Sign up `
          }
        </span>
        <Notification />
      </form>
    </motion.div>
  )
}

export default UserLogin

