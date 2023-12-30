import React from 'react'
import line from '../../images/line.png'
import { processData } from '../../Data/Data'
import ProcessCard from './processCard'
import Heading from '../utils/Heading'
function DonationProccess() {
  
    return (
        <section>
            <div className='wrap my-5'>
               <Heading text="রক্তদান প্রক্রিয়া"/>
                <div className='flex-b justify-center my-2'>
                    <img src={line} alt="roktodibo" />
                </div>
                <p className='text-center'>রেজিস্ট্রেশন  থেকে  আপনি কেন্দ্রে পৌঁছানো এবং রক্তদান শেষে  চলে যাওয়ার সময় পর্যন্ত রক্তদান  প্রক্রিয়া</p>
            </div>
           
           {/* prooccess card */}

        <div className='wrap flex-b items-start flex-wrap mb-5'>
             {
                processData.map(pdata => (
                 
                    <ProcessCard
                     key={pdata.id}
                     data={pdata}
                    />
                ))
             }
        </div>

        </section>
    )
}

export default DonationProccess