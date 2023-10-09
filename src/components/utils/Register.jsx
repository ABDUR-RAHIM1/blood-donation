import React, { useState } from 'react'
import Inputs from './Inputs'
import TextArea from './TextArea'
import { userRegister } from './RegisterInfo'

function Register() {
    
    const [register, setRegister] = useState(userRegister)
    const handleChange = (e) => {
         setRegister({...register ,[e.target.name]: e.target.value })
    }
 console.log(register)
    return ( 
            <form action="">
                <div className=" bg-red-500 py-4 text-center absolute top-0 left-0 w-full">
                    <h1 className='text-white text-xl '>
                        REQUEST APPOINTMENT
                    </h1>
                </div>
                <div className='flex-b mt-20'>
                    <Inputs
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        handleChange={handleChange}
                        lable="Enter Your Good Name"
                    />
                    <Inputs
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        handleChange={handleChange}
                        lable="Enter Email"
                    />
                </div>
                <div className='flex-b'>
                    <Inputs
                        type="number"
                        name="phone"
                        placeholder="Contact number"
                        handleChange={handleChange}
                        lable="Your Contact Number"
                    />
                    <Inputs
                        type="text"
                        name="location"
                        placeholder="Donation Center"
                        handleChange={handleChange}
                        lable="Donation Center Name"
                    />
                </div>
                <div className='flex-b'>
                    <Inputs
                        type="date"
                        name="date"
                        placeholder="Enter Donaation Date"
                        handleChange={handleChange}
                        lable="Doantion Date"
                    />
                    <Inputs
                        type="time"
                        name="time"
                        placeholder="Time"
                        handleChange={handleChange}
                        lable="Donationn Time"
                    />
                </div>
                <TextArea
                    type="text"
                    name="message"
                    placeholder="Message"
                    handleChange={handleChange}
                />
                <button className='button text-white text-center my-4'>Get Appoinment</button>
            </form> 
    )
}

export default Register