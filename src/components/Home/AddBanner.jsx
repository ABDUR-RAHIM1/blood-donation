import React from 'react'
import { MdArrowCircleRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

function AddBanner() {

    return (
        <section className='flex items-center justify-between flex-wrap bg-gray-100 py-20'>
            <div className=' w-full md:w-[50%] text-white bg-red-500 py-10 px-5 flex items-center justify-between'>
                <div>
                    <div className=' flex items-center justify-between my-4'>
                        <Link to={"/donar-register"} className=' text-4xl hover:text-gray-400  font-medium underline '>Donate Now</Link>
                        <Link to={"/donar-register"} className=' text-5xl'>
                            <MdArrowCircleRight />
                        </Link>
                    </div>
                    <p className=' text-2xl text-gray-100'>Nor again is there anyone who loves or pursues or </p>
                    <p className=' text-2xl text-gray-100'>desires to obtain pain of itself, because it is pain,</p>

                </div>

            </div>
            <div className=' w-full md:w-[50%] text-white bg-black py-10 px-5 flex items-center justify-between'>
                <div>
                    <div className=' flex items-center justify-between my-4'>
                        <Link to={"/appoinment"} className=' text-4xl hover:text-gray-400  font-medium underline '>Register Now</Link>
                        <Link to={"/appoinment"} className=' text-5xl hover:text-red-500'>
                            <MdArrowCircleRight />
                        </Link>
                    </div>
                    <p className=' text-2xl text-gray-300'>Nor again is there anyone who loves or pursues or </p>
                    <p className=' text-2xl text-gray-300'>desires to obtain pain of itself, because it is pain,</p>

                </div>
            </div>
        </section>
    )
}

export default AddBanner


