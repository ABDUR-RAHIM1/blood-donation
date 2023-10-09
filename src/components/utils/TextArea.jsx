import React from 'react'

function TextArea(props) {
    const { name, placeholder, lable, handleChange } = props
    return (
        <div>
            <textarea name={name}
                className='w-full h-24 mt-3 outline-0 p-3'
                placeholder={placeholder}
                onChange={handleChange}
            ></textarea>
            <br />
            <small>{lable}</small>
        </div>
    )
}

export default TextArea