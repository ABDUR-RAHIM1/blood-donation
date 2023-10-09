import React, { useState } from 'react'
import Inputs from './Inputs'
import TextArea from './TextArea'
import { userRegister } from './RegisterInfo'
import { useLocation } from 'react-router-dom'

function Register() {
    const path = useLocation().pathname;
    console.log(path)
    const [register, setRegister] = useState(userRegister)
    const handleChange = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value })
    }
    console.log(register)
    return (
        <form action="">
            <div className=" bg-red-500 py-4 text-center absolute top-0 left-0 w-full">
                <h1 className='text-white text-xl '>
                    REQUEST APPOINTMENT
                </h1>
            </div>
            <div className={`${path === '/donar-register' ? 'mt-0' : ' mt-20'} flex-b`}>
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
                {path === '/donar-register' ? '' :
                    <Inputs
                        type="number"
                        name="phone"
                        placeholder="Contact number"
                        handleChange={handleChange}
                        lable="Your Contact Number"
                    />}
                {path === '/donar-register' ?
                    ''
                    :
                    <Inputs
                        type="text"
                        name="location"
                        placeholder="Donation Center"
                        handleChange={handleChange}
                        lable="Donation Center Name"
                    />
                }
            </div>
            <div className='flex-b'>
                {path === '/donar-register' ?
                    <Inputs
                        type="date"
                        name="date"
                        placeholder="Date Of Birth"
                        handleChange={handleChange}
                        lable="Date Of Birth"
                    />
                    :
                    <Inputs
                        type="date"
                        name="date"
                        placeholder="Enter Donation Date"
                        handleChange={handleChange}
                        lable="Doantion Date"
                    />

                }
                {path === '/donar-register' ?
                    <Inputs
                        type="text"
                        name="gender"
                        placeholder="Gender"
                        handleChange={handleChange}
                        lable="Gender"
                    /> :
                    <Inputs
                        type="time"
                        name="time"
                        placeholder="Time"
                        handleChange={handleChange}
                        lable="Donationn Time"
                    />
                }
            </div>

            {/* donar regiser field */}
            {path === '/donar-register' && <div className='mt-3'>
                <h1 className='text-left text-lg font-bold text-red-500'>Medical Information: </h1>
                <div className='mt-2 flex-b'>
                    <Inputs
                        type="text"
                        name="bloodGroup"
                        placeholder="Your Blood Group"
                        handleChange={handleChange}
                        lable="Blood Group"
                    />
                    <Inputs
                        type="text"
                        name="weight "
                        placeholder="Your Weight "
                        handleChange={handleChange}
                        lable="Your Weight "
                    />
                </div>
                <div className='mt-2 flex-b'>
                    <Inputs
                        type="text"
                        name="beforeDonat"
                        placeholder="Yes / No"
                        handleChange={handleChange}
                        lable="Have you donated before?"
                    />
                    <Inputs
                        type="text"
                        name="medicalCondition"
                        placeholder="Any Medical Condition"
                        handleChange={handleChange}
                        lable="any medical conditions ? "
                    />
                </div>
                <div className='mt-2 flex-b'>
                    <Inputs
                        type="text"
                        name="preferCenter"
                        placeholder="Center Name"
                        handleChange={handleChange}
                        lable="Preferred Donation Center?"
                    />
                    <Inputs
                        type="text"
                        name="frequencyDonation"
                        placeholder="Frequency of Donation"
                        handleChange={handleChange}
                        lable="Frequency of Donation? "
                    />
                </div>
                <div className='my-4'>
                    <h1 className='text-left text-lg font-bold text-red-500'>Contact Information: </h1>
                    <div className='mt-2 flex-b'>
                        <Inputs
                            type="number"
                            name="phone"
                            placeholder="Phone No :"
                            handleChange={handleChange}
                            lable="Enter Your Phone No :"
                        />
                        <Inputs
                            type="email"
                            name="email"
                            placeholder="Email"
                            handleChange={handleChange}
                            lable="Enter Your Email"
                        />
                    </div>
                    <div className='mt-2 flex-b'>
                        <Inputs
                            type="number"
                            name="emergencyContact:"
                            placeholder="Emergency Contact:"
                            handleChange={handleChange}
                            lable="Emergency Contact Number"
                        />
                        <Inputs
                            type="number"
                            name="relationshipNumber"
                            placeholder="Relationship Number"
                            handleChange={handleChange}
                            lable="Relationship Contact Number"
                        />
                    </div>
                </div>

            </div>



            }
            {/* donar regiser field */}



            <TextArea
                type="text"
                name="message"
                placeholder="Message"
                handleChange={handleChange}
            />
            {path === '/donar-register' ?
                <button className='button text-white text-center my-4'>Submit Your Form</button>
                : <button className='button text-white text-center my-4'>Get Appoinment</button>
            }
        </form>
    )
}

export default Register