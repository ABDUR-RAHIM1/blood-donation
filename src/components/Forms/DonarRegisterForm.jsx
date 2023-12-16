import React, { useState } from 'react'
import Inputs from '../utils/Inputs'
import TextArea from '../utils/TextArea'
import { DonarformFields } from '../../JSON/DonarForm'

function DonarRegisterForm() {
    const [regsiter, setRegister] = useState({})
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegister({ ...regsiter, [name]: value })

    }

    console.log(regsiter)



    return (
        <form>
            <div className=" bg-red-500 py-4 text-center absolute top-0 left-0 w-full">
                <h1 className='text-white text-xl '>
                    রেজিস্টার ফর্মটি  পূরণ করুন
                </h1>
            </div>

            {/*  donar register filed start */}

            {DonarformFields.map((field) => (
                <div key={field.name}>

                    {field.type === 'select' ? (
                        <select
                            className='donarLoginFiled'
                            name={field.name}
                            onChange={handleChange}
                            required={field.required}
                        >
                            {field.options.map((option) => (
                                <option key={option} value={option} className='my-2 font-bold'>
                                    {option}
                                </option>
                            ))}
                        </select>
                    ) : field.type === 'radio' ? (
                        field.options.map((option) => (
                            <label key={option} className='pl-4 mt-2 flex justify-start form-check-label'>
                                <input
                                    className='form-check-input'
                                    type="radio"
                                    name={field.name}
                                    value={option}
                                    onChange={handleChange}
                                    required={field.required}
                                />

                                {option}
                            </label>
                        ))
                    ) : field.type === 'textarea' ? (
                        <TextArea
                            handleChange={handleChange}
                            name={field.name}
                            type={field.type}
                            placeholder={field?.placeholder}
                        />
                    ) : (
                        <Inputs
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            handleChange={handleChange}
                            required={field.required}
                        />

                    )

                    }

                    <label htmlFor={field.name}>{field.label}</label>
                </div>
            ))
            }

            {/*  donar register filed end */}


            <button className='button text-white text-center my-4'>Submit Your Form</button>


        </form >
    )
}

export default DonarRegisterForm