import React from 'react'
import img1 from "../../images/blog/r1.jpg"
import img2 from "../../images/blog/r2.jpg"
import img3 from "../../images/blog/r3.jpg"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function BecomeDonate() {

    const donationInformation = [
        {
            title: "রক্তদাতা হন",
            photo: img1,
            description: "রক্তদান করে জীবন বাঁচান। আপনার দেওয়া রক্ত জরুরি পরিস্থিতি, অস্ত্রোপচার এবং চিকিৎসার সময় কারো জন্য আশার আলো হয়ে উঠতে পারে।"
        },
        {
            title: "কেন রক্তদান করবেন?",
            photo: img2,
            description: "রক্তদান একটি মহৎ কাজ যা দুর্ঘটনা, অস্ত্রোপচার, প্রসবকালীন জটিলতা এবং বিভিন্ন রোগে আক্রান্ত রোগীদের জীবন বাঁচাতে সহায়তা করে।"
        },
        {
            title: "রক্তদান কীভাবে সহায়তা করে",
            photo: img3,
            description: "রক্তদান স্বাস্থ্যসেবাকে সহায়তা করে, যাতে রোগীদের জন্য পর্যাপ্ত রক্ত সরবরাহ নিশ্চিত থাকে। আপনার রক্তদান জীবন বাঁচাতে ও সুস্থতার উন্নতি করতে গুরুত্বপূর্ণ ভূমিকা রাখে।"
        }
    ];


    return (
        <div className=' my-10 md:my-20 px-4 md:px-10 '>
            <div className=' flex justify-center gap-2 md:gap-10 flex-wrap'>
                {
                    donationInformation.map((d, i) => (
                        <motion.div
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: .5 }}
                            viewport={{ once: true }}
                            key={i}
                            className='group w-full md:w-[48%] bg-white rounded-sm my-2 md:my-5 px-3 py-3'>
                            <div className='w-full h-[400px] overflow-hidden'>
                                <img src={d.photo} className='w-full h-full group-hover:scale-125 duration-300' alt="" />
                            </div>
                            <div className=' my-7'>
                                <h2 className='text-4xl my-4 group-hover:text-red-600 transition-colors duration-300'>
                                    {d.title}
                                </h2>
                                <p className=' text-xl'>
                                    {d.description}
                                </p>
                            </div>

                            <Link to={"/profile/donar-registration"} className=' text-center inline-block text-xl font-bold py-4 px-5 bg-slate-950 group-hover:bg-red-500 text-white w-full my-6 transition-colors duration-300'>
                                ডোনার হন
                            </Link>
                        </motion.div>

                    ))
                }
            </div>
        </div>
    )
}
