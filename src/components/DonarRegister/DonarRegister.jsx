import React from 'react' 
import img from "../../images/blood-bg.jpg"
import img2 from '../../images/bg.png'
import DonarRegisterForm from '../Forms/DonarRegisterForm'

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
            <li className='list-disc'>আয়রন সমৃদ্ধ খাবার খেয়ে স্বাস্থ্যকর আয়রনের মাত্রা বজায় রাখুন।</li>
            <li className='list-disc'>রক্তদানের আগে প্রচুর পরিমাণে বিশুদ্ধ পানি পান করুন।</li>
            <li className='list-disc'> রক্তদানের আগে অ্যালকোহল সেবন এড়িয়ে চলুন। </li>
            <li className='list-disc'> পরিশেষে, রক্তদানের পর পর্যাপ্ত ঘুমানোর চেষ্টা করুন।</li>

          </ul>

          <img className='w-full h-48' src={img2} alt="" />
        </div>
        <div className='w-full md:flex-1 relative md:ml-5  md:-translate-y-56'>

          <div className=" bg-gray-100  p-4">
            {/*  info */}
            <div className='mt-20'>
              <p className='text-sm'>
                রক্তদাতা হতে এবং অন্যের  জীবন বাঁচাতে  সহযোগী হতে আপনার আগ্রহের জন্য ধন্যবাদ। রক্তদাতা হিসাবে নিবন্ধন করতে অনুগ্রহ করে নিম্নলিখিত ফর্মটি পূরণ করুন। আপনার তথ্য গোপন রাখা হবে এবং শুধুমাত্র রক্তদানের উদ্দেশ্যে ব্যবহার করা হবে।রক্তদাতা হতে এবং জীবন বাঁচাতে আপনার আগ্রহের জন্য আপনাকে ধন্যবাদ। রক্তদাতা হিসাবে নিবন্ধন করতে অনুগ্রহ করে নিম্নলিখিত ফর্মটি পূরণ করুন। আপনার তথ্য গোপন রাখা হবে এবং শুধুমাত্র রক্তদানের উদ্দেশ্যে ব্যবহার করা হবে।

              </p>
            </div>
            {/*  info end here*/}
          <DonarRegisterForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DonarRegister