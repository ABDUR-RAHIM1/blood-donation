import React from 'react'

function Inputs(props) {
    const { name, type, value, required,  placeholder,lable, handleChange } = props
    return (
        <div>
            <input
                className={`w-full input mt-3 outline-0`}
                type={type}
                name={name}
                value={value}
                required={required}
                placeholder={placeholder}
                onChange={handleChange}
            />
            <br />
            <small className='text-gray-100'>{lable}</small>
        </div>
    )
}

export default Inputs