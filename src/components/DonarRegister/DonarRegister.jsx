import React from 'react'
import Register from '../utils/Register'
import img from "../../images/blood-bg.jpg"
import img2 from '../../images/bg.png'
function DonarRegister() {
  return ( 
      <section>
        <img className='h-450 w-full' src={img} alt="" />
        <div className='my-5 wrap flex-wrap flex-b items-start'>
          <div className="text w-full mb-20 md:w-2/5">
            <h3 className='text-lg relative'>
              জেনে রাখা ভালো
              <span className='line absolute left-0 -bottom-2 w-20 h-1 bg-red-500'></span>
            </h3>
            <h1 className='text-3xl my-4'>
              সহায়ক তথ্য
            </h1>
            <ul className="ul">
              <li className='list-disc'>রক্ত সঞ্চালনের প্রয়োজনীয়তার বিষয়ে আপনার স্বাস্থ্যসেবা প্রদানকারীর সুপারিশ অনুসরণ করুন।</li>
              <li className='list-disc'>রক্ত গ্রহণের আগে, আপনার বা আপনার অনুমোদিত প্রতিনিধিকে অবহিত সম্মতি প্রদান করা উচিত।</li>
              <li className='list-disc'> ট্রান্সফিউজ করা রক্ত আপনার রক্তের গ্রুপের সাথে সামঞ্জস্যপূর্ণ কিনা তা নিশ্চিত করুন। </li>
              <li className='list-disc'> অ্যালার্জির প্রতিক্রিয়ার লক্ষণ সম্পর্কে সচেতন থাকুন । আপনার স্বাস্থ্যসেবা প্রদানকারীকে অবিলম্বে কোনো অস্বাভাবিক লক্ষণ রিপোর্ট করুন।</li>
              <li className='list-disc'>রক্ত সঞ্চালনের আগে এবং পরে পর্যাপ্ত হাইড্রেশন গুরুত্বপূর্ণ। তরল পান করা আপনার শরীরকে স্থানান্তরিত রক্তকে আরও কার্যকরভাবে প্রক্রিয়া করতে সাহায্য করতে পারে।</li>
              <li className='list-disc'>রক্ত গ্রহণের পর, আপনার স্বাস্থ্যসেবা দল আপনাকে একটি নির্দিষ্ট সময়ের জন্য পর্যবেক্ষণ করবে যাতে আপনি স্থিতিশীল এবং কোনো প্রতিকূল প্রভাবের সম্মুখীন না হন।</li>
              <li className='list-disc'>আপনার রক্ত সঞ্চালন বা আপনার চিকিৎসা পরিচর্যার কোনো দিক সম্পর্কে আপনার উদ্বেগ বা প্রশ্ন থাকলে, আপনার স্বাস্থ্যসেবা দলের সাথে যোগাযোগ করুন । </li>

            </ul>
          </div>
          <div className='w-full md:flex-1 relative md:ml-5  md:-translate-y-56'>
            <div className=" bg-gray-200  p-4">
              <Register />
            </div>
            <img className='w-full h-48' src={img2} alt="" />
          </div>
        </div>
      </section> 
  )
}

export default DonarRegister