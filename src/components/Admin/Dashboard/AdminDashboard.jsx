import React, { useContext } from 'react'
import Sidebar from './Sidebar'
import arrow from '../../../images/arrow.png'
import { GlobalState } from '../../../State/State'
import { motion } from 'framer-motion'    
function AdminDashboard({children}) { 
  const { arrowClick, setArrowClick } = useContext(GlobalState)

  return (
    <motion.div
      className='flex-b items-start'>
      <div className={`${arrowClick ? 'w-10' : 'w-72'} sidebar scroll-none relative border-r border-slate-50`}>
        <img onClick={() => setArrowClick(!arrowClick)} className='arrow' src={arrow} alt="roktojoddha" />
        <Sidebar />
      </div>
      <div className="main scroll-none bg-slate-500 pb-32">
        {children} 
      </div>
    </motion.div>
  )
}

export default AdminDashboard