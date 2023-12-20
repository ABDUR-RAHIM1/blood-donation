import React, { useContext, useState } from 'react'
import Inputs from '../../utils/Inputs'
import { GlobalState } from '../../../State/State'
import { Navigate } from 'react-router-dom'

function AdminLogin() {
    const [isReset, setIsReset] = useState(false)
    const { register, setRegister } = useContext(GlobalState)
    const handleChange = (e) => {
        const value = e.target.value
        setRegister({ ...register, [e.target.name]: value })
    }
    //  reset passsword
    const handleResetPassword = () => {
        setIsReset(!isReset)
    }

    //  login admin 
    const handleLogin = (e) => {
        e.preventDefault()

    } 
    
    return (
        <div className='bg-slate-600 w-full h-screen pt-10'>
            <div className='w-2/4 p-7 m-auto bg-slate-500'>
                <form onSubmit={handleLogin}>
                    <Inputs
                        type='text'
                        name='email'
                        placeholder='Enter Your Email'
                        handleChange={handleChange}
                        lable='Enter Your Email'
                    />


                    {isReset &&
                        <Inputs
                            type='text'
                            name='userName'
                            placeholder='User Name'
                            handleChange={handleChange}
                            lable='Enter Your Username'
                        />
                    }

                    <Inputs
                        type='password'
                        name='password'
                        placeholder='*******'
                        handleChange={handleChange}
                        lable='Enter Your Password'
                    />

                    {isReset ?
                        <button className='button text-center bg-yellow-600 my-6 text-white italic'>Reset Password</button>
                        :
                        <button className='button text-center bg-slate-600 my-6 text-white italic'>Log-in</button>

                    } <br />
                
                        <span onClick={handleResetPassword} className='loginText'>Forget password</span>
                
                </form>
            </div>

        </div>
    )
}

export default AdminLogin

//  protected route
export const ProtectedRoute = ({ children }) => {
    const { isAdminLogin } = useContext(GlobalState)

    return isAdminLogin ? children : <Navigate to='/admin-login'></Navigate>
}