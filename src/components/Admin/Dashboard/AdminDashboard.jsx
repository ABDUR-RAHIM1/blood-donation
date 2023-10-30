import React, { useContext, useState } from 'react'
import Sidebar from './Sidebar'
import arrow from '../../../images/arrow.png'
import { GlobalState } from '../../../State/State'
import { motion } from 'framer-motion'  
import Home from '../Admin/Home'
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
        main  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, perferendis blanditiis. Fugiat nemo laudantium accusantium quo fugit maxime tempore maiores, in veritatis neque qui sed eligendi similique. Nostrum, provident repellendus quasi placeat laudantium explicabo, eaque consequatur dolores molestiae numquam nesciunt. Aliquam aliquid tempora ipsa explicabo cumque suscipit pariatur veritatis possimus ad rem recusandae magni doloribus eos culpa eum, dolor corporis nulla reiciendis veniam voluptatibus molestias minus accusamus aperiam necessitatibus! Quibusdam ducimus consequuntur repudiandae, praesentium aliquid, ratione ut quis quidem, accusantium repellendus provident. Maiores odio dolorum nulla voluptatum, magni rerum. Corporis vitae laboriosam harum earum voluptatem itaque quasi accusantium est nam?
        <div style={{ height: '10000px' }}></div>
      </div>
    </motion.div>
  )
}

export default AdminDashboard