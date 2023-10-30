import React from 'react'

function Inputs(props) {
    const { name, type, placeholder,lable, handleChange , width } = props
    return (
        <div>
            <input
                className={`${width} input mt-3 outline-0`}
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