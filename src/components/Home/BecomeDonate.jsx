import React from 'react'
import img1 from "../../images/blog/r1.jpg"
import img2 from "../../images/blog/r2.jpg"
import img3 from "../../images/blog/r3.jpg"
import { motion } from 'framer-motion'

export default function BecomeDonate() {

    const donationInformation = [
        {
            title: "Become a Donate",
            photo: img1,
            description: "Become a blood donor and save lives. Your donation can make a huge difference in someone's life during emergencies, surgeries, and medical treatments."
        },
        {
            title: "Why Give Blood?",
            photo: img2,
            description: "Giving blood is a selfless act that helps patients in need of transfusions due to accidents, surgeries, childbirth complications, and various medical conditions."
        },
        {
            title: "How Donations Help",
            photo: img3,
            description: "Blood donations provide critical support to healthcare systems by ensuring an adequate supply of blood for patients. Your donation can help save lives and improve health outcomes."
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

                            <button className='text-xl font-bold py-4 px-5 bg-slate-950 group-hover:bg-red-500 text-white w-full my-6 transition-colors duration-300'>
                                Read More
                            </button>
                        </motion.div>

                    ))
                }
            </div>
        </div>
    )
}
