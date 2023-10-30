import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageSidebar from '../PageSidebar/PageSidebar';
import {motion} from 'framer-motion'
function BlogDetails() {
    //  blog data pass using useLocation state
    const state = useLocation().state;
    const pageSidebarData = {
         image :state.image,
         link : '/blogs',
         home :'/',
         join :'/donar-register'

    }
    return (
        <motion.div
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{
             duration:'1'
         }}
          
        className='wrap flex-b items-start'>
            <div className="details"> 
                    <img className=' m-auto w-7/12' src={state.image} alt="" />
                <h1 className='heading text-center my-4'>{state.title}</h1>
                <p>{state.text}</p>
               <Link to='/blogs'>
               <button className='button my-5 text-white'>Back</button>
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