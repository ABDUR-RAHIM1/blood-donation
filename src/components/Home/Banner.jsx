import React from 'react'
import {BsFacebook, BsTwitter, BsLinkedin} from "react-icons/bs"
function Banner() {
  return (
    <section className='flex-b py-2 wrap bg-red-500'>
        <h2 className='text-xl text-white'>welcome to our blood doantion center</h2>
        {/*  social icons  */}
        <div className='flex-b' >
            <BsFacebook title="faccebook"  className="icons"/>
            <BsTwitter  title="twitter" className="icons"/>
            <BsLinkedin  title="linkedin" className="icons"/> 
        </div>
    </section>
  )
}

export default Banner