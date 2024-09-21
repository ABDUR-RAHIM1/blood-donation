import React from 'react'
import Banner from '../utils/Banner'
import aboutData from '../../Data/AboutData'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <div className=' min-h-screen overflow-hidden'>
            <Banner path={"About Us"} />

            <div className=' px-5 md:px-10'>
                <h1 className=' text-center text-3xl md:text-5xl font-bold my-10 md:my-20'>
                    The Gift of Life - Blood Donation
                </h1>
                {
                    aboutData.map((ab, index) => (
                        <AboutCard
                            key={index}
                            about={ab}
                            index={index}
                        />
                    ))
                }
            </div>
        </div>
    )
}


const AboutCard = (props) => {
    const { paragraph, imageUrl } = props.about
    const { index } = props;

    const indexing = index % 2 === 1

    return (
        <div className={` flex items-center justify-between flex-wrap my-20 md:my-10 ${indexing ? " flex-row-reverse" : " flex-row"}`}>
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=' w-full md:w-[48%] my-5'>
                <p className=' text-xl leading-[2.5rem]'>{paragraph}</p>
            </motion.div>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=' w-full md:w-[48%] my-5'>
                <img src={imageUrl} className=' w-full h-[400px] rounded-md' alt="roktojoddha" />
            </motion.div>
        </div>
    )
}