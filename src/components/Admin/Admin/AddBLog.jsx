import React from 'react'
import Inputs from '../../utils/Inputs'
import TextArea from '../../utils/TextArea'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { GlobalState } from '../../../State/State'
function AddBLog() {
   const {info , setInfo} = useContext(GlobalState)

   const handleChange = (e) => {
      setInfo({ ...info, [e.target.name]: e.target.value })
   }
   console.log(info)
   return (
      <motion.div
         initial={{ scale: 0, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         transition={{
            duration: '1'
         }}
         className='dFormWrap'>
         <div className="title"> 
            {
                 info.isEdit ? 'Edit Blog' : 'Add Blog'
            }
          </div>
         <form action="">
            <Inputs
               type='text'
               name='title'
               value={info.title}
               placeholder='Title'
               handleChange={handleChange}
               lable='Enter Title'
            />
            <TextArea
               type='text'
               name='text'
               value={info.text}
               placeholder='Description'
               handleChange={handleChange}
               lable='Enter Description'
            />
            <input onChange={handleChange} name='image' type="file" className='form-control my-3' />
            <button className='sidebarBtn'>Post Now</button>
         </form>
      </motion.div>
   )
}

export default AddBLog