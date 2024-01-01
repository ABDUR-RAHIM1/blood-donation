import React from 'react'
import { Link } from 'react-router-dom'

function PageSidebar(props) {
    const { image, link, home, join } = props.pageSidebar
    return (
        <div>
            <img className='md:w-full m-auto w-3/5 md:h-52 h-24 rounded-md' src={image} alt="bloge page sidebar" />
            <div className='flex flex-col gap-2 underline text-red-600'>
                <h2 className='text-xl text-center my-2'>Quick Links</h2>
                <Link to={link}>Go Back</Link>
                <Link to={home}>Home</Link>
                <Link to={join}>Join With Us</Link>
            </div>
            <div>
                 added some informative text or photo letter
            </div>
        </div>
    )
}

export default PageSidebar