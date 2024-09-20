import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import demoImg from '../../images/demo.jpg'
import { useContext } from 'react';
import { GlobalState } from '../../State/State';
import Banner from '../utils/Banner';

function RecipientDetails() {
    const { state, pathname } = useLocation();
    const { profilePic, name } = state;

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
                        <img className='w-full m-auto  h-auto max-h-[80vh] rounded-sm' src={profilePic || demoImg} alt="roktojoddha" />
                    </div>
                    <h1 className='heading text-center text-red-500 font-bold my-10 italic uppercase'>Name : {name}</h1>

                    {/*  this table component under this page */}
                    <RecipientTable
                        data={state}
                    />

                    <Link to='/donars'>
                        <button className='py-5 md:py-7 px-10 md:px-16 bg-red-500 hover:bg-black duration-200 font-bold my-10 text-white'>Back</button>
                    </Link>
                </div>
            </motion.div>
        </>

    )
}

export default RecipientDetails



function RecipientTable({ data }) {
    const { name, email, bloodGroup, contactNumber, howMuch, whereNeed, needTime, problem, createAt, message } = data;
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
                    <td className="px-6 py-4 font-medium text-gray-900">Refference:</td>
                    <td className="px-6 py-4">{name}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">Email:</td>
                    <td className="px-6 py-4 lowercase">{email} {`(Refference)`} </td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">Blood Group:</td>
                    <td className="px-6 py-4">{bloodGroup}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">Patient's Problem:</td>
                    <td className="px-6 py-4">{problem}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">Blood Needed (Amount):</td>
                    <td className="px-6 py-4">{howMuch} (bag)</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">Time Needed:</td>
                    <td className="px-6 py-4">{needTime}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">Contact Number:</td>
                    <td className="px-6 py-4">+888 {contactNumber}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">Location:</td>
                    <td className="px-6 py-4">{whereNeed}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">Posted At:</td>
                    <td className="px-6 py-4">{times(createAt)}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-6 py-4 font-medium text-gray-900">Message:</td>
                    <td className="px-6 py-4">{
                        message && message.split(".").map((m, i) => (
                            <p key={i} className=' my-3'>{m}</p>
                        ))
                    }</td>
                </tr>
            </tbody>
        </table>
    );

}

