import React from 'react'
import { MdArrowCircleRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function AddBanner() {

    return (
        <section className='flex  justify-between flex-wrap bg-gray-100 py-20 overflow-hidden'>
            <motion.div
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=' w-full md:w-[50%] text-white bg-red-500 py-10 px-5 flex items-center justify-between'>
                <div>
                    <div className=' flex items-center justify-between my-4'>
                        <Link to={"/profile/donar-registration"} className=' text-2xl hover:text-gray-400  font-medium underline '>ডোনেট করুন</Link>
                        <Link to={"/profile/donar-registration"} className=' text-5xl'>
                            <MdArrowCircleRight />
                        </Link>
                    </div>
                    <p className=' text-xl text-gray-100'>আপনার রক্তদান একটি জীবন বাঁচাতে পারে। আজই রক্তদান করে কারো নতুন জীবনের আশার আলো হয়ে উঠুন। </p>

                </div>

            </motion.div>
            <motion.div
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.70 }}
                viewport={{ once: true }}
                className=' w-full md:w-[50%] text-white bg-black py-10 px-5 flex items-center justify-between'>
                <div>
                    <div className=' flex items-center justify-between my-4'>
                        <Link to={"/profile/request-blood"} className=' text-2xl hover:text-gray-400  font-medium underline '>রেজিস্টার করুন</Link>
                        <Link to={"/profile/request-blood"} className=' text-5xl hover:text-red-500'>
                            <MdArrowCircleRight />
                        </Link>
                    </div>
                    <p className=' text-xl text-gray-300'>রক্তদান করতে বা প্রয়োজনীয় রক্ত পেতে এখনই অ্যাকাউন্ট তৈরি করুন। সহজেই ডোনার খুঁজুন অথবা নিজেকে ডোনার হিসেবে নিবন্ধন করুন। </p>

                </div>
            </motion.div>
        </section>
    )
}

export default AddBanner


