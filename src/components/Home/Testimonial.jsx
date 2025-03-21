import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

function Testimonial() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='wrap  py-10  md:py-16 bg-red-600 overflow-hidden'>

            <motion.h1
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}

                className=' text-[25px] md:text-[45px] font-bold   md:my-10 text-white tracking-[5px]'> একজন জীবনদাতা মাধ্যম হোন, আজই আমাদের সাথে যোগ দিন!!</motion.h1>
            <p className='my-6 text-xl md:text-2xl text-white leading-8 '>কেউই কষ্ট বা দুর্দশা চায় না, কিন্তু কখনও কখনও ছোট ছোট সাহায্যের মাধ্যমে আমরা অনেক বড় পরিবর্তন আনতে পারি। রক্তদান একদম সহজ মনে হতে পারে, কিন্তু এটি একজন মানুষের জীবন বাঁচাতে পারে এবং যারা সাহায্যের অপেক্ষায় থাকে, তাদের জন্য আশার আলো হতে পারে। একত্রিত হয়ে, আমরা জীবন পরিবর্তন করতে পারি এবং বিশ্বের একটি ভাল জায়গায় পরিণত করতে পারি — একেকটি রক্তদান দিয়ে।</p>

            <div className="text my-10 text-center  ">
                <Link to='/profile/donar-registration'>
                    <button className=' py-8 px-16 rounded-md bg-white text-2xl md:text-3xl font-bold hover:scale-110 duration-200  '>
                        আমাদের সাথে যুক্ত হোন
                    </button>
                </Link>
            </div>
        </motion.div>
    )
}

export default Testimonial