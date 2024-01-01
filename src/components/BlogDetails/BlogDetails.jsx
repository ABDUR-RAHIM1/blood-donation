import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageSidebar from '../PageSidebar/PageSidebar';
import { motion } from 'framer-motion'
import demoImg from '../../images/demo.jpg'
import { useContext } from 'react';
import { GlobalState } from '../../State/State';

function BlogDetails() {
    //  blog data pass using useLocation state
    const state = useLocation().state; 
    const {times} = useContext(GlobalState)
    const pageSidebarData = {
        image: state.profilePic,
        link: '/blogs',
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
                <img className=' m-auto w-7/12' src={state ? state.profilePic : demoImg} alt="" />
                <h1 className='heading text-2xl text-center my-4'>{state.title}</h1>
                <div className='bg-gray-200 mb-2 py-2 px-1'>
                    <small>Auhtor : {state.name}</small> <br />
                    <small>Email : {state.email}</small> <br />
                    <small>Date : {times(state.postAt)}</small>
                </div>
                <p>{state.desc}</p>
                <Link to='/blogs'>
                    <button className='button bg-gray-300 my-5 text-slate-700 shadow-md shadow-green-200'>Back</button>
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

export default BlogDetails