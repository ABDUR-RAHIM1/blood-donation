import React from 'react'
import AppoinmentBg from './AppoinmentBg'
import { MdBloodtype } from "react-icons/md"
import AppoinmentForm from '../Forms/AppoinmentForm';
import { helpfulInfo } from '../../Data/HelpfullInfo';
import { motion } from 'framer-motion';

export default function Appoinment() {

    return (
        <section>
            <AppoinmentBg />
            <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className=' px-4 md:px-10 -translate-y-[500px] z-[2000] flex justify-between flex-wrap overflow-hidden'>

                <div className=' w-full md:w-[48%] bg-white text-black py-10 px-3'>
                    <h1 className=' text-3xl md:text-4xl font-bold my-4'> Helpful Information  </h1>
                    <div className=' my-5 overflow-hidden'>
                        {helpfulInfo.map((item, index) => (
                            <motion.p
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                key={index} className='text-[15px] my-3 flex items-center gap-3'>
                                <span className=' text-3xl text-red-500'><MdBloodtype /></span>  {item}
                            </motion.p>
                        ))}
                    </div>
                </div>

                <div className=' w-full md:w-[48%] bg-white text-black py-10 px-3 md:px-5'>
                    <h1 className=' text-3xl md:text-4xl font-bold my-4'>Request Appointment Here</h1>
                    <div className='my-5'>
                        <AppoinmentForm />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}



// import React from 'react'
// import AppoinmentForm from '../Forms/AppoinmentForm'
// import AppoinmentBg from './AppoinmentBg'
// function Appoinment() {

//     return (
//         <section className='text overflow-hidden'>
//            <AppoinmentBg/>

//             <div className=' md:mt-5 wrap flex-wrap flex-b items-start'>
//                 <div className="text w-full mb-10 md:mb-0 md:w-3/5">
//                     <h1 className='text-2xl sm:text-3xl my-4'>
//                         সহায়ক তথ্য
//                     </h1>
//                     <ul className="ul px-3 sm:px-2">
//                         <li className='list-disc'>রক্ত সঞ্চালনের প্রয়োজনীয়তার বিষয়ে আপনার স্বাস্থ্যসেবা প্রদানকারীর সুপারিশ অনুসরণ করুন।</li>
//                         <li className='list-disc'>রক্ত গ্রহণের আগে, আপনার বা আপনার অনুমোদিত প্রতিনিধিকে অবহিত সম্মতি প্রদান করা উচিত।</li>
//                         <li className='list-disc'> ট্রান্সফিউজ করা রক্ত আপনার রক্তের গ্রুপের সাথে সামঞ্জস্যপূর্ণ কিনা তা নিশ্চিত করুন। </li>
//                         <li className='list-disc'> অ্যালার্জির প্রতিক্রিয়ার লক্ষণ সম্পর্কে সচেতন থাকুন । আপনার স্বাস্থ্যসেবা প্রদানকারীকে অবিলম্বে কোনো অস্বাভাবিক লক্ষণ রিপোর্ট করুন।</li>
//                         <li className='list-disc'>রক্ত সঞ্চালনের আগে এবং পরে পর্যাপ্ত হাইড্রেশন গুরুত্বপূর্ণ। তরল পান করা আপনার শরীরকে স্থানান্তরিত রক্তকে আরও কার্যকরভাবে প্রক্রিয়া করতে সাহায্য করতে পারে।</li>
//                         <li className='list-disc'>রক্ত গ্রহণের পর, আপনার স্বাস্থ্যসেবা দল আপনাকে একটি নির্দিষ্ট সময়ের জন্য পর্যবেক্ষণ করবে যাতে আপনি স্থিতিশীল এবং কোনো প্রতিকূল প্রভাবের সম্মুখীন না হন।</li>
//                         <li className='list-disc'>আপনার রক্ত সঞ্চালন বা আপনার চিকিৎসা পরিচর্যার কোনো দিক সম্পর্কে আপনার উদ্বেগ বা প্রশ্ন থাকলে, আপনার স্বাস্থ্যসেবা দলের সাথে যোগাযোগ করুন । </li>

//                     </ul>
//                 </div>
//                 <div className='w-full md:flex-1 px-2  md:px-0 relative md:ml-5  md:-translate-y-56'>
//                     <div className="bg-gray-100  p-4">
//                         <AppoinmentForm />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Appoinment