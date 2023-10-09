import React from 'react'

function Inputs(props) {
    const { name, type, placeholder,lable, handleChange } = props
    return (
        <div className='formGroup'>
            <input
                className='input mt-3 outline-0'
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
            />
            <br />
            <small>{lable}</small>
        </div>
    )
}

export default Inputs