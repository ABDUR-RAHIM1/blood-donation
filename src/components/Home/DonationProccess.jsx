import React from 'react'
import { processData } from '../../Data/Data'
import ProcessCard from './processCard'
import Heading from '../utils/Heading'

function DonationProccess() {

    return (
        <section className='my-10 bg-white py-5 md:py-10'>
            <div className='wrap my-5 w-full md:w-[70%] m-auto'>
                <Heading text="Blood Donation Process" />
                <p className='text-center my-3'>From the moment you register upon arrival at the center, to reaching the donation area and successfully completing your blood donation, we ensure a smooth and safe experience throughout the process.</p>
            </div>

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