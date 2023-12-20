import React from 'react'

function Inputs(props) {
    const { id,name, type, value,disabled, autocomplete ,required,  placeholder,lable, handleChange } = props
    return (
        <div>
            <input
                className={`w-full input mt-3 outline-0`}
                type={type}
                name={name}
                id={id}
                autoComplete={autocomplete}
                value={value}
                disabled={disabled}
                required={required}
                placeholder={placeholder}
                onChange={handleChange}
            />
            <br />
            <small className='text-green-500'>{lable}</small>
        </div>
    )
}

export default Inputs