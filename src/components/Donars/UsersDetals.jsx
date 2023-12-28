import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageSidebar from '../PageSidebar/PageSidebar';
import { motion } from 'framer-motion'
import demoImg from '../../images/demo.jpg'

function UsersDetails() {
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
                <UserTable
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

export default UsersDetails



function UserTable({ data }) {
    const { name, email, bloodGroup, contactNumber, howMuch, whereNeed, needTime, problem, createAt, message } = data;

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
                    <td scope="col">নাম :</td>
                    <td scope="col" >  {name}</td>
                </tr>
                <tr>
                    <td scope="col">ইমেইল :</td>
                    <td scope="col" style={{ textTransform: "lowercase" }}>  {email}</td>
                </tr>
                <tr>
                    <td scope="col">রক্তের গ্রুপ : </td>
                    <td scope="col">{bloodGroup}</td>
                </tr>

                <tr>
                    <td scope="col"> রোগীর সমস্যা : </td>
                    <td scope="col">{problem}</td>
                </tr>
                <tr>
                    <td scope="col">রক্তের পরিমান :</td>
                    <td scope="col">{howMuch + " (bag)"}</td>
                </tr>
                <tr>
                    <td scope="col">সময় : </td>
                    <td scope="col">{needTime}</td>
                </tr>


                <tr>
                    <td scope="col">যোগাযোগ নম্বর : </td>
                    <td scope="col">{"+888 " + contactNumber}</td>
                </tr>

                <tr >
                    <td scope="col">স্থান  : </td>
                    <td scope="col">{whereNeed}</td>
                </tr>
                <tr >
                    <td scope="col"> পোস্ট  হয়েছে : </td>
                    <td scope="col">{createAt}</td>
                </tr>
                <tr>
                    <td style={{ verticalAlign: 'middle' }} scope="col">মেসেজ : </td>
                    <td style={{ verticalAlign: 'middle' }} scope="col">{message}</td>
                </tr>
            </tbody>
        </table>
    )
}

