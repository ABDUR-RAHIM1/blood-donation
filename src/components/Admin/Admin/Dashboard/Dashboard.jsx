import React from 'react'
import AdminDashboard from '../../Dashboard/AdminDashboard'
import { motion } from 'framer-motion'
import Total_donars from './Total_donars'
import Total_donations from './Total_donations'
import Total_user from './Total_user'
import Total_volunteers from './Total_volunteers'
import Total_blogs from './Total_blogs'
function Dashboard() {
  return (
    <AdminDashboard>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: '2'
        }}
        className='flex-b flex-wrap'
      >
       
       <Total_donars/>
       <Total_donations/>
       <Total_user/>
       <Total_volunteers/>
       <Total_blogs/>


      </motion.div>
    </AdminDashboard>
  )
}

export default Dashboard