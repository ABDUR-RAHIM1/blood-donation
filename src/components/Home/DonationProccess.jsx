import React from 'react'
import { processData } from '../../Data/Data' 
import Heading from '../utils/Heading'
import { motion } from 'framer-motion'
import ProcessCard from './ProcessCard'

function DonationProccess() {

    return (
        <section className='my-10 bg-white py-5 md:py-10'>
            <motion.div
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='wrap my-5 w-full md:w-[70%] m-auto'>
                <Heading text="রক্তদানের প্রক্রিয়া" />
                <p className='text-center my-3'>সেন্টারে পৌঁছানোর পর নিবন্ধন থেকে শুরু করে রক্তদান সম্পন্ন হওয়া পর্যন্ত, আমরা আপনাকে একটি নিরাপদ ও স্বচ্ছন্দ অভিজ্ঞতা দেওয়ার নিশ্চয়তা প্রদান করি।</p>
            </motion.div>

            {/* prooccess card */}

            <div className='wrap flex  justify-between flex-wrap mb-5'>
                {
                    processData.map((pdata, index) => (

                        <ProcessCard
                            key={index}
                            data={pdata}
                            index={index}
                        />
                    ))
                }
            </div>

        </section>
    )
}

export default DonationProccess