import React, { useContext, useState } from 'react'
import { GlobalState } from '../../State/State'
import { Navigate } from 'react-router-dom'
import Inputs from '../utils/Inputs'
import {motion} from 'framer-motion'

function DonarLogin() {
  const {register, setRegister} = useContext(GlobalState)
  const [isRegister, setIsRegister] = useState(false)
  
  const handleChange = (e) => {
    const value = e.target.value;
    setRegister({...register ,[e.target.name]:value })
  }
  console.log(register)
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{
        duration :'1'
      }}
    className='bg-slate-700 w-full h-screen pt-10'>
      <form className='form-w bg-slate-600 p-6'>
    {  isRegister &&  <div>
          <Inputs
            type='text'
            name='name'
            placeholder='Enter Your Name'
            lable='Enter Your Good Name'
            handleChange={handleChange}
          />
          <Inputs
            type='text'
            name='gender'
            placeholder='Gender'
            lable='Your Gender'
            handleChange={handleChange}
          />
        </div>}
        <Inputs
          type='email'
          name='email'
          placeholder='Enter Your Email'
          lable='Enter Your Email'
          handleChange={handleChange}
        />
        <Inputs
          type='password'
          name='password'
          placeholder='********'
          lable='Enter Your Password'
          handleChange={handleChange}
        />

        <button className='button bg-slate-700 text-white my-4'>Log-in</button> <br />
        <span onClick={() => setIsRegister(!isRegister)} className='loginText'>
          {
            isRegister ? 'Go for Log-in' : `Don't have any account ?`
          }
        </span>
      </form>
    </motion.div>
  )
}

export default DonarLogin

export const DonarPrivetRoute = ({ children }) => {
  const { isDonarLogin } = useContext(GlobalState)
  return isDonarLogin ? children : <Navigate to='/donar-auth' />
}