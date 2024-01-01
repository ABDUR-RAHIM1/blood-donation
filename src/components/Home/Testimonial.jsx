import React from 'react'
import { Link } from 'react-router-dom'

function Testimonial() {
    return (
        <div className='wrap md:py-16 flex-b flex-wrap bg-red-600'>
          
            <div className="text w-full sm:w-8/12 pt-5 md:pt-0 text-white">
                <h1 className='heading'>lets change the world , join with us</h1>
                <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea quidem nobis quisquam tempore soluta, neque nulla magni expedita amet!</p>
            </div>
            <div className="text mt-2 pb-5 md:pb-0">
                <Link to='/donar-register'>
                    <button className='button bg-white '>Join With  Us</button>
                </Link>
            </div>
        </div>
    )
}

export default Testimonial