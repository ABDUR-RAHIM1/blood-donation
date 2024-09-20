import React from 'react'

import img from "../../images/appoinmentBg.jpeg"
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom';

export default function AppoinmentBg() {
    const pathname = useLocation().pathname;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`${pathname.includes("/profile") ? "hidden" : "block"}  w-full relative `}>
            <img className='h-screen w-full' src={img} alt="" />
            <div className=' w-full h-full px-5 md:px-10 bg-black bg-opacity-10 absolute top-0 left-0 flex items-center justify-center flex-col'>
                <h3 className=' text-2xl font-medium uppercase my-5 text-white'>blood owner</h3>
                <h1 className=' text-3xl md:text-6xl font-bold text-white'>
                    We Are Blood Donor Group
                </h1>
            </div>
        </motion.div>
    )
}
