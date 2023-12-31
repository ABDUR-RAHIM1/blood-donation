import React from 'react'
import { useState } from 'react'

function Change_colors() {
    const colorInputs = [
        {
            lable: 'Card background Color',
            type: 'color',
            name: 'cardBg',
        },
        {
            lable: 'Card Text Color',
            type: 'color',
            name: 'cardText',
        },
        {
            lable: 'button bacakground Color',
            type: 'color',
            name: 'btnBg',
        },
        {
            lable: 'button text Color',
            type: 'color',
            name: 'btnText',
        },
        {
            lable: 'form bacakground Color',
            type: 'color',
            name: 'formBg',
        },
        {
            lable: 'form label Color',
            type: 'color',
            name: 'formText',
        },
        {
            lable: 'Genarel background Color',
            type: 'color',
            name: 'genarelBg',
        },
        {
            lable: 'Genarel Text Color',
            type: 'color',
            name: 'genareText',
            value :"#D9534F"
        },
    ]

    const [color, setColor] = useState("")

    const handleColorChange = (e) => {
        setColor({ ...color, [e.target.name]: e.target.value })
    }


    return (


        <div className='dFormWrap'>
            {
                colorInputs.map((cl, index) => <Colors
                    key={index}
                    color={cl}
                    handleColorChange={handleColorChange}
                />)
            }
        </div>
    )
}

export default Change_colors


const Colors = (props) => {
    const { lable, type, name , value } = props.color
    return (
        <div className='w-2/4 m-auto'>
            <input value={value} onChange={props.handleColorChange} className='form-control mt-3 h-10' type={type} name={name} />
            <small className="manageHeading">{lable}</small>
        </div>
    )
}