import React from 'react'
import help1 from "../../images/welcome/help1.png"
import help2 from "../../images/welcome/help2.png"
import { motion } from 'framer-motion'

export default function Welcome() {

    return (
        <section className=' my-10 md:my-20 wrap '>
            <div className='flex justify-between flex-wrap bg-gray-50'>
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className='w-full md:w-[48%] my-5 relative'>
                    <img src={help1} alt="roktojoddha" className=' w-full ' />
                    <img
                        src={help2} alt="roktojoddha" className=' w-[300px] h-[300px] rounded-full absolute top-[50%] right-0 transform   translate-y-[-50%]' />
                </motion.div>
                <div className='w-full md:w-[48%] my-5'>
                    <h3 className=' text-red-500 font-medium text-2xl my-4 uppercase'>প্রয়োজনীয় মানুষের সাহায্য করুন</h3>

                    <h1 className=' text-3xl md:text-5xl font-extrabold my-4 leading-[3rem] md:leading-[4rem]'>
                    রক্তদাতা সংস্থায় আপনাকে স্বাগতম
                    </h1>
                    <p className=' text-xl my-4'>
                        প্রত্যেক সেকেন্ডই গুরুত্বপূর্ণ, এবং আপনার রক্তদান কোনো একজনের বেঁচে থাকার জন্য জীবন রক্ষাকারী হতে পারে। আমাদের সাথে যোগ দিন, এবং তাদের জন্য রক্তের একটি ধারাবাহিক সরবরাহ নিশ্চিত করার জন্য একত্রে কাজ করুন, যারা তৎক্ষণাত রক্তের প্রয়োজন। একসাথে আমরা নিশ্চিত করতে পারি যে কেউ তার জীবন বাঁচানোর জন্য রক্তের জন্য অপেক্ষা করবে না।


                    </p>

                    <motion.div
                        initial={{ x: 100 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className=' flex  justify-between flex-wrap gap-3 px-3 md:px-0'>
                        <div className=' flex-1 my-2'>
                            <ul className=' flex flex-col gap-4 text-2xl font-medium list-disc'>
                                <li>রক্তদাতা সম্মাননা</li>
                                <li>জরুরি প্রতিক্রিয়া</li>
                                <li>জরুরি রক্তের অনুরোধ</li>
                                <li>স্বাস্থ্য পরীক্ষা</li>
                                <li>মানুষের সাহায্য করুন</li>
                            </ul>
                        </div>
                        <div className=' flex-1 my-4'>
                            <ul className=' flex flex-col gap-4 text-2xl font-medium list-disc'>
                                <li>নিরাপদ ও সুরক্ষিত রক্তদান</li>
                                <li>সম্প্রদায়ভিত্তিক প্রচারণা</li>
                                <li>রক্তের ধরনের মেলবন্ধন</li>
                                <li>রক্তদাতা নিবন্ধন ও সহায়তা</li> 
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    )
}
