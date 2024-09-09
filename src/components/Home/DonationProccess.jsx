import React from 'react'
import line from '../../images/line.png'
import { processData } from '../../Data/Data'
import ProcessCard from './processCard'
import Heading from '../utils/Heading'
function DonationProccess() {

    return (
        <section className='my-10 bg-white py-5 md:py-10'>
            <Heading text="Blood Donation Process" />
            <div className='wrap my-5'>
                <div className='flex-b justify-center my-2'>
                    <img src={line} alt="roktodibo" />
                </div>
                <p className='text-center'>From the moment you register upon arrival at the center, to reaching the donation area and successfully completing your blood donation, we ensure a smooth and safe experience throughout the process.</p>
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