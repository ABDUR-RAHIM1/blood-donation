import React, { useState } from 'react'
import DonarRegister from '../DonarRegister/DonarRegister'
import { Link } from 'react-router-dom'

function AddBanner() {

    return (
        <section className='flex-b flex-wrap items-start wrap  -translate-y-12'>
            <a className="addBanner bg-slate-900">
                <h1 className='heading'>Register Now</h1>
                <p className='my-3'>রক্ত গ্রহণের আগে, আপনার বা আপনার অনুমোদিত প্রতিনিধিকে অবহিত সম্মতি প্রদান করা উচিত।</p>
            </a> 
                <Link to='/donar-register' className="addBanner bg-red-500">
                    <h1 className='heading'>Donation Now</h1>
                    <p className='my-3'>রক্ত গ্রহণের আগে, আপনার বা আপনার অনুমোদিত প্রতিনিধিকে অবহিত সম্মতি প্রদান করা উচিত।</p>
                </Link> 
        </section>
    )
}

export default AddBanner




// import React, { useState } from 'react'
// import DonarRegister from '../DonarRegister/DonarRegister'
// import { Link } from 'react-router-dom'

// function AddBanner() {

//     return (
//         <section className='flex-b flex-wrap items-start py-4 wrap bg-gray-100'>
//             <div className="text w-3/5">
//                 <p>আপনি বাংলাদশের  যেকোনো রক্তদান স্থানে রক্ত দিতে পারেন। আমরা  বিভিন্ন অনুষ্ঠানে হাজার হাজার অন্যান্য স্থান পরিদর্শন করি এবং রক্তদানে  মানুষকে উদ্বুদ্ধ করি ।</p>
//                 <p className='mt-3s'>  রক্ত গ্রহীতাকে সহযোগিতা প্রদান এবং আমরা আপনার যোগাযোগের প্রতিটি অনুরোধ সুন্দরভাবে প্রতিস্থাপন করতে চেষ্টা করি ।</p>
//             </div>
//             <div className="flex-1 ml-4">
//                 <span>আপনি যদি স্বেচ্ছায় রক্তদাতা হন , এখানে রেজিস্ট্রেশন করুন আপনি যদি রক্ত দাতা হন , এখানে রেজিস্ট্রাশন করুন </span>
//                 <br />
//                 <Link to="donar-register">
//                     <button className='button text-white my-3 hover:bg-red-400 duration-300'>রেজিস্ট্রেশন করুন</button>
//                 </Link>
//             </div>
//         </section>
//     )
// }

// export default AddBanner