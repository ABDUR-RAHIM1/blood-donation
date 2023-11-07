import React from 'react'
import { motion } from 'framer-motion'
import logo from '../../../../images/logo.png'
function Add_logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: '2'
      }}
      className='dFormWrap'
    >
      <h1 className="manageHeading">Add logo</h1>
      <form action="">
        <input type="file" className='form-control' />
        <button className='sidebarBtn'>Change Now</button>
      </form>
     
     <div className="logos">
         <img className='w-44 border p-2' src={logo} alt="" />
         <img className='w-44 border p-2' src={logo} alt="" />
         <img className='w-44 border p-2' src={logo} alt="" />
         <img className='w-44 border p-2' src={logo} alt="" />
     </div>

    </motion.div>
  )
}

export default Add_logo