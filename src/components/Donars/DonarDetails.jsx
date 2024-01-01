import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageSidebar from '../PageSidebar/PageSidebar';
import { motion } from 'framer-motion'
import demoImg from '../../images/demo.jpg'
function DonarDetails() {
    const state = useLocation().state;

    const { profilePic, name } = state;

    const pageSidebarData = {
        image: profilePic || demoImg,
        link: '/donars',
        home: '/',
        join: '/donar-register'

    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: '1'
            }}

            className='wrap flex-b flex-wrap items-start'>
            <div className="details">
                <img className=' m-auto w-10/12 md:w-7/12 h-48 md:h-400' src={profilePic || demoImg} alt="" />
                <h1 className='heading text-center my-4 italic uppercase'>Name : {name}</h1>

                {/*  this table component under this page */}
                <DonarTable
                    data={state}
                />

                <Link to='/donars'>
                    <button className='button my-5 bg-slate-600 text-white'>Back</button>
                </Link>
            </div>
            <div className="page-sidebar">
                <PageSidebar
                    pageSidebar={pageSidebarData}
                />
            </div>
        </motion.div>
    )
}

export default DonarDetails



function DonarTable({ data }) {
    const { email, address, dob, weight, gender, beforeDonation, bloodGroup, contactNumber, emergencyContact, relationshipContact, donationDate, donationTime, message } = data;

    return (
        <table className='table table-striped table-bordered table-hover table-responsive overflow-auto'>
            <thead>
                <tr>
                    <th style={{ width: "30%", }} scope="col" className="px-6 py-3">Key</th>
                    <th style={{ width: "70%", }} scope="col">Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="col">গ্রুপ : </td>
                    <td scope="col">{bloodGroup}</td>
                </tr>
                <tr>
                    <td scope="col">ইমেইল :</td>
                    <td scope="col" style={{ textTransform: "lowercase" }}>  {email}</td>
                </tr>
                <tr>
                    <td scope="col">ঠিকানা :</td>
                    <td scope="col" style={{ textTransform: "lowercase" }}>  {address}</td>
                </tr>
                <tr>
                    <td scope="col">জন্ম তারিখ : </td>
                    <td scope="col">{dob}</td>
                </tr>
                <tr>
                    <td scope="col">ওজন :</td>
                    <td scope="col">{weight + " (KG)"}</td>
                </tr>
                <tr>
                    <td scope="col">লিঙ্গ : </td>
                    <td scope="col">{gender}</td>
                </tr>


                <tr>
                    <td scope="col">যোগাযোগ নাম্বার : </td>
                    <td scope="col">{"+888 " + contactNumber}</td>
                </tr>
                <tr>
                    <td scope="col">জরুরি  নাম্বার : </td>
                    <td scope="col">{"+888 " + emergencyContact}</td>
                </tr>
                <tr>
                    <td scope="col">পরিচিতজন   : </td>
                    <td scope="col">{"+888 " + relationshipContact || N / A}</td>
                </tr>
                <tr >
                    <td scope="col">কততম দান : </td>
                    <td scope="col">{beforeDonation + " (Times)"}</td>
                </tr>
                <tr scope="row">
                    <td scope="col">শেষ ডোনেট: </td>
                    <td scope="col">{donationDate}</td>
                </tr>
                <tr>
                    <td scope="col">পছন্দের সময়: </td>
                    <td scope="col">{donationTime} AM/PM </td>
                </tr>
                <tr>
                    <td style={{ verticalAlign: 'middle' }} scope="col">শর্ত : </td>
                    <td style={{ verticalAlign: 'middle' }} scope="col">{message}</td>
                </tr>
            </tbody>
        </table>
    )
}

