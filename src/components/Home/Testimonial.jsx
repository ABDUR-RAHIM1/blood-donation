import React from 'react'
import { Link } from 'react-router-dom'

function Testimonial() {
    return (
        <div className='wrap py-16 flex-b bg-red-500'>
            <div className="text w-8/12 text-white">
                <h1 className='heading'>lets change the world , join with us</h1>
                <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea quidem nobis quisquam tempore soluta, neque nulla magni expedita amet!</p>
            </div>
            <div className="text">
                <Link to='/donar-register'>
                    <button className='button bg-white'>Join With  Us</button>
                </Link>
            </div>
        </div>
    )
}

export default Testimonial