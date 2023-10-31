import React from 'react'
import Inputs from '../../utils/Inputs'
import { motion } from 'framer-motion'
function Add_Volunteer() {
  const handleChange = (e) => {
    console.log(e.target.value)
  }
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: '1'
      }}
      className='dFormWrap'>
      <div className="title">Add Volunteer</div>
      <form action="">
        <Inputs
          type='text'
          name='name'
          placeholder='Name'
          handleChange={handleChange}
          lable='Enter Volunteer Name'
        />
        <Inputs
          type='text'
          name='title'
          placeholder='Title'
          handleChange={handleChange}
          lable='Title of volunteer'
        />
        <Inputs
          type='text'
          name='fbLink'
          placeholder='facebook Link'
          handleChange={handleChange}
          lable='Enter facebook id link'
        />
        <Inputs
          type='text'
          name='twLink'
          placeholder='twitter Link'
          handleChange={handleChange}
          lable='Enter twitter id link'
        />
        <Inputs
          type='text'
          name='liLink'
          placeholder='linkedin Link'
          handleChange={handleChange}
          lable='Enter linkedin id link'
        />
        <input type="file" className='form-control my-3' />
        <button className='sidebarBtn'>Add volunteer</button>
      </form>
    </motion.div>
  )
}

export default Add_Volunteer