import React from 'react'

function TextArea(props) {
    const { name, value, placeholder, lable, handleChange } = props
    return (
        <div>
            <textarea name={name}
                value={value}
                className='w-full h-32 mt-3 outline-0 p-3'
                placeholder={placeholder}
                onChange={handleChange}
            ></textarea>
            <br />
            <small className='text-red-500'>{lable}</small>
        </div>
    )
}

export default TextArea