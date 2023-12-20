import React, { useContext, useEffect, useState } from 'react'
import Inputs from '../utils/Inputs'
import TextArea from '../utils/TextArea'
import { DonarformFields } from '../../JSON/DonarForm'
import { GlobalState } from '../../State/State'
import uploadFile from '../utils/UploadFile'
import Notification from '../utils/Notification'
import Loading from '../utils/Loading'

function DonarRegisterForm() {
    const { isLoading, isDonarLogin, handleDonarCreateProfiles } = useContext(GlobalState);
    const [imgLoading, setImgIsLoading] = useState(false)
    const [register, setRegister] = useState({
        name: isDonarLogin.name,
        email: isDonarLogin.email,
        profilePic: ''
    })

    useEffect(() => {
        setRegister({ ...register, name: isDonarLogin.name, email: isDonarLogin.email })
    }, [isDonarLogin]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegister({ ...register, [name]: value })

    }

    const handleFileChange = async (e) => {
        const image = e.target.files[0];
        await uploadFile(image, setRegister, setImgIsLoading);
    };
 

    return (
        <form onSubmit={(e) => handleDonarCreateProfiles(e, register)} >
            <div className=" bg-red-500 py-4 text-center absolute top-0 left-0 w-full">
                <h1 className='text-white text-xl '>
                    রেজিস্টার ফর্মটি  পূরণ করুন
                </h1>
            </div>


            <Inputs
                type='text'
                name='name'
                autocomplete="on"
                value={isDonarLogin.name}
                disabled={isDonarLogin}
                required={true}
                placeholder='Enter Your Name'
                lable='Enter Your Good Name'
                handleChange={handleChange}
            />
            <Inputs
                type='email'
                name='email'
                id='email'
                autocomplete="on"
                value={isDonarLogin.email}
                disabled={isDonarLogin}
                required={true}
                placeholder='Enter Your email'
                lable='Enter Your Email'
                handleChange={handleChange}
            />

            <Inputs
                type='number'
                name='contactNumber'
                value={register.contactNumber}
                required={true}
                placeholder='Enter your contact number'
                lable='Contact Number'
                handleChange={handleChange}
            />
            <Inputs
                type='number'
                name='emergencyContact'
                value={register.emergencyContact}
                required={true}
                placeholder='Emergency Contact'
                lable='Enter emergency contact number'
                handleChange={handleChange}
            />

            <Inputs
                type='number'
                name='relationshipContact'
                value={register.relationshipContact}
                placeholder='Relationship Emergency Contact'
                lable='Relationship Emergency Contact'
                handleChange={handleChange}
            />

            <Inputs
                type='date'
                name='dob'
                value={register.dob}
                required={true}
                placeholder='Date Of Birth'
                lable='Date of Birth'
                handleChange={handleChange}
            />

            <Inputs
                type='date'
                name='donationDate'
                value={register.donationDate}
                required={true}
                placeholder='Doantion Date'
                lable='Last Doantion Date'
                handleChange={handleChange}
            />

            <Inputs
                type='time'
                name='donationTime'
                value={register.donationTime}
                required={true}
                placeholder='04-10 pm'
                lable='Donation Time (04-10 pm)'
                handleChange={handleChange}
            />

            <select required onChange={handleChange} name="gender" className='form-control my-4 fw-semi-bold'>
                <option value="">Select Your Gender</option>
                <option value="male">Male</option>
                <option value="female">female</option>
                <option value="others">others</option>
            </select>

            <select required onChange={handleChange} name="bloodGroup" className='form-control my-4 fw-semi-bold'>
                <option value="">Select Your BLood Group</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
                <option value="O+">O+</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="AB-">AB-</option>
                <option value="O-">O-</option>
            </select>

            <Inputs
                type='number'
                name='weight'
                value={register.weight}
                required={true}
                placeholder='Weight (kg)'
                lable='Enter your weight in kilograms'
                handleChange={handleChange}
            />




            <Inputs
                type='number'
                name='beforeDonation'
                value={register.beforeDonation}
                placeholder='(5) times'
                lable='How much do you donate?'
                handleChange={handleChange}
            />



            <input onChange={handleFileChange}
                type="file"
                id='file'
                className='form-control mt-4'
                name='profilePic' />
            {
                imgLoading ?
                    <label className='mb-4 mt-2 lowercase text-red-500' htmlFor="file">Uploading Your Image</label>
                    :
                    <label className='mb-4 mt-2 lowercase text-green-500' htmlFor="file">Upload Your Profile Picture</label>
            }

            <TextArea
                type='textarea'
                name='message'
                value={register.message}
                required={true}
                placeholder='Enter your message (optional)'
                lable='any prerequisite?'
                handleChange={handleChange}
            />

            <button disabled={isLoading} className='button bg-slate-300 text-slate-600 text-center my-4 hover:bg-slate-500 hover:text-white'>Submit Your Form</button>
            {isLoading && <Loading size='sm' />}

            <Notification />


        </form >
    )
}

export default DonarRegisterForm