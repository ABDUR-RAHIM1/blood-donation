import React from 'react'
import { useState } from 'react'

function Change_colors() {
    const colorInputs = [
        {
            lable: 'Change Navbar background Color',
            type: 'color',
            name: 'navColor',
        },
        {
            lable: 'Change Default bacakground Color',
            type: 'color',
            name: 'defColor',
        },
    ]

    const colors = {
        navColor: '',
        defColor: ''
    }
    const [color, setColor] = useState(colors)

    const handleColorChange = (e) => {
        setColor({ ...color, [e.target.name]: e.target.value })
    }

    console.log(color)
    return (
        // <div className='dFormWrap'>
        //     <div className='mb-10'>
        //         <h1 className="manageHeading">Change Navbar background Color</h1>
        //         <div className='w-2/4 m-auto'>
        //             <input onChange={handleColorChange} name='navColor' type="color" className='form-control mt-3 h-16' />
        //         </div>
        //     </div>
        //     <div className='mb-10'>
        //         {/*  banner / btn / etc red background color  */}
        //         <h1 className="manageHeading">Change Default bacakground Color</h1>
        //         <div className='w-2/4 m-auto'>
        //             <input onChange={handleColorChange} name='defColor' type="color" color='red' className='form-control mt-3 h-16' />
        //         </div>
        //     </div>
        // </div>

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
    const { lable, type, name } = props.color
    return (
        <div className='w-2/4 m-auto'>
            <div className="manageHeading mt-3">{lable}</div>
            <input onChange={props.handleColorChange} className='form-control mt-3 h-16' type={type} name={name} />
        </div>
    )
}