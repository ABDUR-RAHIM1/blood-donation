import React, { useContext, useState } from 'react'
import Sidebar from './Sidebar'
import arrow from '../../../images/arrow.png'
import { GlobalState } from '../../../State/State'
import { motion } from 'framer-motion'    
import GetBlogs from '../Admin/GetBlogs'
import AddBLog from '../Admin/AddBLog'
function AdminDashboard() { 
  const { arrowClick, setArrowClick, btnText, activeComponent, setActiveComponent } = useContext(GlobalState)

   

 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: '1'
      }}
      className='flex-b items-start'>
      <div className={`${arrowClick ? 'w-10' : 'w-72'} sidebar scroll-none relative border-r border-slate-50`}>
        <img onClick={() => setArrowClick(!arrowClick)} className='arrow' src={arrow} alt="roktojoddha" />
        <Sidebar />
      </div>
      <div className="main scroll-none bg-slate-500">
        <div className="heading">{activeComponent}</div>
         <GetBlogs/>
        {/* <div style={{ height: '10000px' }}></div> */}
      </div>
    </motion.div>
  )
}

export default AdminDashboard