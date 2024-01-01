import React from 'react'
import { FooterData } from '../../Data/FooterData'
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
      <div className='wrap py-20  pt-20 pb-3 flex-b flex-wrap items-start bg-black text-slate-100'>
        {
          FooterData.map((ft, index) => (
            <div key={index} className='w-full sm:w-48 md:w-23 py-5 px-10 md:py-0 md:px-0 '>
              <h1 className="heading my-3 uppercase">{ft.title}</h1>
              <p>{ft?.text}</p>
              <p className='my-3 font-semibold'> {ft.phone && <span className='text-red-500'>Contact : </span>} {ft?.phone}</p>
              <p className='my-3 font-semibold'> {ft.email && <span className='text-red-500'>Email : </span>} {ft?.email}</p>
              <ul>
                {
                  ft.items && ft.items.map((item, index) => (
                    <li key={index} className='my-2 capitalize font-semibold cursor-pointer hover:text-slate-500'> <span className='text-red-500'> {'>'}</span> {item}</li>
                  ))
                }
              </ul>
              {/*  footer blogs */}
              {
                ft.blogs && ft.blogs.map((bl, index) => (
                  <div>
                    {
                      <Link key={index} to={bl.link} className='flex items-center justify-start my-4'>
                        <img className='w-16' src={bl.image} alt={`${bl.image}`} />
                        <div className='ml-2'>
                          <h3 className='text-xl font-semibold italic capitalize'>{bl.title}</h3>
                          <p className='text-red-500'>{bl.date}</p>
                        </div>
                      </Link>
                    }
                  </div>
                ))
              }
            </div>
          ))
        }



      </div>
      {/* footer newslatter */}
      <div className="wrap bg-black text-slate-100 newsletter">
        <div className="w-full py-0 mt-6 md:py-5  md:w-48">
          <p>Subscribe us for more update and news</p>
          <div className='flex'>
            <input name='email' type="text" placeholder='Enter Your Email' />
            <button className='button bg-slate-800 text-white'>Subscribe</button>
          </div>
        </div>
        <div className="w-full md:w-48 mt-7 mb-4 md:mt-0">
          <div className='flex-b justify-start gap-2 text-red-600' >
            <BsFacebook title="faccebook" className="icons" />
            <BsTwitter title="twitter" className="icons" />
            <BsLinkedin title="linkedin" className="icons" />
          </div>
        </div>
      </div>
      {/* footer newslatter */}

      {/*  copyright */}
      <div className='bg-slate-900 py-3  text-white'>
        <p className='text-center'>Copyright@DreamCraft Softwere</p>
      </div>
      {/*  copyright */}
    </>
  )
}

export default Footer