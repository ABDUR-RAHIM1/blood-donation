import React from 'react'
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs"
import { Link } from 'react-router-dom'

function Footer() {
  const navItems = [
    { name: "হোম", path: "/" },
    { name: "ডোনার তালিকা", path: "/donars" },
    { name: "অনুরোধ তালিকা", path: "/users" },
    { name: "আমাদের সম্পর্কে", path: "/about" },
    { name: "ব্লগ সমুহ", path: "/blogs" },
  ];
  return ( 
    <>
      <div className='wrap py-20  pt-20 pb-3  flex justify-between flex-wrap items-start bg-black text-slate-100'>

        <div className='w-full md:w-[48%] my-5'>
          <h1 className=' text-3xl md:text-5xl font-bold my-5'>আমাদের সম্পর্কে</h1>
          <div className=' my-7'>
            <p className=' text-xl tracking-[2px] leading-7'>আমরা একটি স্বেচ্ছাসেবক দল যারা রক্তদান সংক্রান্ত সচেতনতা বৃদ্ধির কাজ করছে। আমাদের লক্ষ্য হল মানুষের মধ্যে রক্তদান সম্পর্কে সচেতনতা সৃষ্টি করা এবং যারা জরুরি সাহায্যপ্রার্থীদের প্রয়োজন, তাদের জন্য সঠিক সময়ে রক্ত সরবরাহ করা। আমরা বিশ্বাস করি, রক্তদান একটি ছোট্ট কিন্তু অমূল্য কাজ, যা অনেক মানুষের জীবন বাঁচাতে সাহায্য করতে পারে। আমাদের সংস্থা সবসময় মানুষের সেবা এবং সহানুভূতির সাথে কাজ করে, যাতে কখনও কেউ রক্তের অভাবে কষ্ট না পায়!</p>
          </div>
        </div>
        <div className='w-full md:w-[48%] my-5'>
          <h1 className=' text-3xl md:text-5xl font-bold my-5'>লিঙ্ক সমুহ</h1>

          <div className='my-7  flex flex-col gap-5 '>
            {
              navItems.map((n, i) => (
                <Link to={n.path} key={i} className=' border-b text-2xl hover:text-red-500'>{n.name}</Link>
              ))
            }
          </div>
        </div>



      </div>


      {/*  copyright */}
      <div className='bg-slate-900 py-3  text-white'>
        <p className='text-center'>Copyright@ <a className='underline hover:text-red-500' href="http://abdr.netlify.app" target="_blank" rel="noopener noreferrer">AR It Solutions</a></p>
      </div>
      {/*  copyright */}
    </>
  )
}

export default Footer