import React  from 'react'  
import { Link } from 'react-router-dom'

function AddBanner() {
 
    return (
        <section className='flex-b flex-wrap items-start my-10'>
            <Link to="/appoinment" className="addBanner bg-slate-900">
                <h1 className='heading'>Register Now</h1>
                <p className='sm:my-3'>রক্ত গ্রহণের আগে, আপনার বা আপনার অনুমোদিত প্রতিনিধিকে অবহিত সম্মতি প্রদান করা উচিত।</p>
            </Link>
            <Link to="/donar-register" className="addBanner bg-red-500">
                <h1 className='heading'>Donation Now</h1>
                <p className='sm:my-3'>রক্ত গ্রহণের আগে, আপনার বা আপনার অনুমোদিত প্রতিনিধিকে অবহিত সম্মতি প্রদান করা উচিত।</p>
            </Link>
        </section>
    )
}

export default AddBanner


 