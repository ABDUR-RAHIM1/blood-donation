import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageSidebar from '../PageSidebar/PageSidebar';
import { motion } from 'framer-motion'
import demoImg from '../../images/demo.jpg'
function DonarDetails() {
    const state = useLocation().state;
   console.log(state)
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

            className='wrap flex-b items-start'>
            <div className="details">
                <img className=' m-auto w-7/12 h-450' src={profilePic || demoImg} alt="" />
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
    const { email, dob, weight, gender, beforeDonation, bloodGroup, contactNumber, emergencyContact, relationshipContact, donationDate, donationTime, message } = data;

    return (
        <table className='table border table-striped hover resposive overflow-auto'>
            <thead>
                <tr>
                    <th>Key</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Blood Group : </td>
                    <td>{bloodGroup}</td>
                </tr>
                <tr>
                    <td>Email :</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>Date of Birth : </td>
                    <td>{dob}</td>
                </tr>
                <tr>
                    <td>Weight :</td>
                    <td>{weight+ " (KG)"}</td>
                </tr>
                <tr>
                    <td>Gender : </td>
                    <td>{gender}</td>
                </tr>


                <tr>
                    <td>Contact Number : </td>
                    <td>{"+888 " + contactNumber}</td>
                </tr>
                <tr>
                    <td>Emergency Contact : </td>
                    <td>{"+888 " + emergencyContact}</td>
                </tr>
                <tr>
                    <td>Relationship Contact : </td>
                    <td>{"+888 " + relationshipContact || N/A}</td>
                </tr>
                <tr>
                    <td>Before Donation : </td>
                    <td>{beforeDonation + " (Times)"}</td>
                </tr>
                <tr>
                    <td>Last Donate : </td>
                    <td>{donationDate}</td>
                </tr>
                <tr>
                    <td>preferred time : </td>
                    <td>{donationTime} A/PM </td>
                </tr>
                <tr>
                    <td>pre requisite : </td>
                    <td>{message}</td>
                </tr>
            </tbody>
        </table>
    )
}

