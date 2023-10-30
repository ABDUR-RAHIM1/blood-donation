import React from 'react'
import { Link } from 'react-router-dom'

function PageSidebar(props) {
    console.log(props)
    const { image, link, home, join } = props.pageSidebar
    return (
        <div>
            <img className='w-full h-52 rounded-md' src={image} alt="bloge page sidebar" />
            <div className='flex flex-col gap-2 underline text-red-600'>
                <h2 className='text-2xl text-center my-4'>Quick Links</h2>
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