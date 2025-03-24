import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import demoImg from '../../images/demo.jpg'
import { useContext } from 'react';
import { GlobalState } from '../../State/State';
import Banner from '../utils/Banner';

function RecipientDetails() {
    const { state, pathname } = useLocation();
    const { photo } = state;


    return (

        <>
            <Banner path={pathname} />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: '1'
                }}

                className=' px-5 md:px-10 py-10 md:py-20 bg-gray-200'>
                <div className="w-full">
                    <div className=' w-full  overflow-hidden'>
                        <img className='w-full m-auto  h-auto max-h-[80vh] rounded-sm' src={photo || demoImg} alt="roktojoddha" />
                    </div>


                    {/*  this table component under this page */}
                    <RecipientTable
                        data={state}
                    />

                    <Link to='/donars'>
                        <button className='py-5 md:py-7 px-10 md:px-16 primaryBg2 hover:secondaryBg duration-200 font-bold my-10 '>Back</button>
                    </Link>
                </div>
            </motion.div>
        </>

    )
}

export default RecipientDetails



function RecipientTable({ data }) {
    const {
        donationStatus,
        patientName,
        refName,
        refEmail,
        bloodGroup,
        contactNumber,
        howMuch,
        location,
        needTime,
        problem,
        createdAt,
        message,
        urgency,
        hospital,
        doctorContact,
        patientAge,
        preferredDate,

    } = data;

    const { times } = useContext(GlobalState);

    return (
        <table className="min-w-full table-auto border-collapse overflow-auto my-6">
            <thead className="bg-gray-100">
                <tr>
                    <th className="px-6 py-3 text-left text-gray-600 font-bold border-b" style={{ width: "30%" }}>Key</th>
                    <th className="px-6 py-3 text-left text-gray-600 font-bold border-b" style={{ width: "70%" }}>Value</th>
                </tr>
            </thead>
            <tbody className="bg-white">
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">সম্পূর্ণ হয়েছে ?</td>
                    <td className="px-6 py-4">
                        <button className={`py-3 px-8 rounded-sm border text-white ${donationStatus === "yes" ? "bg-green-700" : "bg-red-600"}`}>
                            {donationStatus === "yes" ? "হ্যাঁ" :"না"}
                        </button>
                    </td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">গ্রহিতার নাম:</td>
                    <td className="px-6 py-4">{patientName}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">রেফারেন্স নাম:</td>
                    <td className="px-6 py-4">{refName}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">রেফারেন্স ইমেইল:</td>
                    <td className="px-6 py-4 lowercase">{refEmail} {`(Refference)`}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900"> রক্তের গ্রুপ:</td>
                    <td className="px-6 py-4">{bloodGroup}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">  গ্রহীতার সমস্যা  :</td>
                    <td className="px-6 py-4">{problem}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900"> রক্ত দরকার:</td>
                    <td className="px-6 py-4">{howMuch} (bag)</td>
                </tr>

                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">  জরুরী ? :</td>
                    <td className="px-6 py-4">{urgency}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900"> হাসপাতাল / ক্লিনিক:</td>
                    <td className="px-6 py-4">{hospital}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">ডক্টর কন্টাক্ট :</td>
                    <td className="px-6 py-4">{doctorContact || "N/A"}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">গ্রহীতার বয়স:</td>
                    <td className="px-6 py-4">{patientAge}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">গ্রহনের তারিখ:</td>
                    <td className="px-6 py-4">{new Date(preferredDate).toLocaleDateString()}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">গ্রহনের সময়:</td>
                    <td className="px-6 py-4">{needTime}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">কন্টাক্ট নাম্বার:</td>
                    <td className="px-6 py-4">+888 {contactNumber}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900"> ঠিকানা:</td>
                    <td className="px-6 py-4">{location}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900"> পোস্ট করছেন:</td>
                    <td className="px-6 py-4">{times(createdAt)}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900"> মেসেজ :</td>
                    <td className="px-6 py-4">{
                        message && message.split(".").map((m, i) => (
                            <p key={i} className='my-3'>{m}</p>
                        ))
                    }</td>
                </tr>
            </tbody>
        </table> 
    );
}


