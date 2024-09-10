import React from 'react'

export default function SelectField(props) {
    const { label, name, value, required, handleChange, options } = props

    return (
        <div className="mt-4">
            {label && <label htmlFor={name}>{label}</label>}
            <select
                name={name}
                value={value}
                required={required}
                onChange={handleChange}
                className={`w-full input bg-gray-100 focus:outline-red-500 focus:bg-gray-200 focus:border-red-500`}
            >
                <option value="">Select Your Blood Group</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}; 
