import React, { useContext, useState } from 'react'
import Inputs from '../utils/Inputs'
import TextArea from '../utils/TextArea'
import { DonarformFields } from '../../JSON/DonarForm'
import { GlobalState } from '../../State/State'

function DonarRegisterForm() {
    const { isDonarLogin, handleDonarCreateProfiles } = useContext(GlobalState);
    const [isLoading, setIsLoading] = useState(false)
    const [register, setRegister] = useState({
        name: isDonarLogin?.name,
        email: isDonarLogin?.email,
        profilePic: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegister({ ...register, [name]: value })

    }

    const handleFileChange = async (e) => {
        const image = e.target.files[0];
        setIsLoading(true);
    
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "demo-image");
        formData.append("cloud_name", "dsrkrb3jy");
    
        try {
            const res = await fetch(
                "https://api.cloudinary.com/v1_1/dsrkrb3jy/image/upload",
                {
                    method: "POST",
                    body: formData,
                }
            );
    
            if (!res.ok) {
                throw new Error(`File upload failed: ${res.status} - ${res.statusText}`);
            }
    
            const data = await res.json();
            setIsLoading(false);
            const img = data.secure_url;
            console.log(img);
    
            // Set the file URL in the state, not the input value
            setRegister((prevState) => ({ ...prevState, profilePic: img }));
        } catch (error) {
            console.error('Error during file upload:', error.message);
            setIsLoading(false);
        }
    };
    
    

console.log(register)

    return (
        <form onSubmit={(e) => handleDonarCreateProfiles(e, register)} >
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
                            value={register[field.name]}
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
                            value={register[field.name]}
                            type={field.type}
                            placeholder={field?.placeholder}
                        />
                    ) : (
                        <Inputs
                            type={field.type}
                            name={field.name}
                            value={field.type === "email" ? register?.email : field.name === 'name' ? register.name : register[field.name]}
                            placeholder={field.placeholder}
                            handleChange={field.type === 'file' ? (e)=>handleFileChange(e) : handleChange}
                            required={field.required}
                        />

                    )

                    }

                    <label htmlFor={field.name}>
                        {field.type === 'file' ? (
                            isLoading ? <p className='text-red-500'>Image is Uploading . . . </p> : field.label
                        ) : (
                            field.label
                        )}
                    </label>

                </div>
            ))
            }

            {/*  donar register filed end */}


            <button disabled={isLoading} className='button bg-slate-300 text-slate-600 text-center my-4 hover:bg-slate-500 hover:text-white'>Submit Your Form</button>


        </form >
    )
}

export default DonarRegisterForm