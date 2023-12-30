import React from 'react'
import AdminDashboard from '../../Dashboard/AdminDashboard'
import { motion } from 'framer-motion'
import Total_donars from './Total_donars' 
import Total_user from './Total_user'
import Total_volunteers from './Total_volunteers'
import Total_blogs from './Total_blogs'
import { useContext } from 'react'
import { GlobalState } from '../../../../State/State'
import { useEffect } from 'react'
import Total_admin from './Total_admin'
function Dashboard() {
  const { getAllDonarsItems , allDonars, getDonarAccount, donarsAcc,handleGetBlogs, blogs, usersAcc ,getUserAccount , handleAppoinment , getUserAllRegister , usersAllResgister} = useContext(GlobalState);

    const donarBlog =  blogs.filter(bl => bl.role === 'donar');
    const userBlog =  blogs.filter(bl => bl.role === 'user');
    const adminBlog =  blogs.filter(bl => bl.role === 'admin');
  


  useEffect(() => {
    getAllDonarsItems()
    getDonarAccount()
    handleGetBlogs() 
    getUserAccount()
    getUserAllRegister()
  }, [])
  return (
    <AdminDashboard>
      <div className="title">Manage Your Dashboard</div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: '2'
        }}
        className='flex-b flex-wrap'
      >

         <Total_admin adminBlog={adminBlog}/>
        <Total_donars allDonars={allDonars} loginDonar={donarsAcc} blog={donarBlog} />
        <Total_user allUsers={usersAllResgister} loginUser={usersAcc} blog={userBlog} />
        <Total_volunteers />
        <Total_blogs allBLogs={blogs} adminBlog={adminBlog} userBlog={userBlog} donarBlog={donarBlog} />


      </motion.div>
    </AdminDashboard>
  )
}

export default Dashboard