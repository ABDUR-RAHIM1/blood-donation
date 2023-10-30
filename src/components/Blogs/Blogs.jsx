import React from 'react'
import BlogsData from '../../Data/Blogs'
import Blog from './Blog'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion';
function Blogs() {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{
        duration : '2'
      }}
    className='mt-5'>
      <h1 className='text-center text-3xl font-semibold my-8'>Blogs</h1>
      <div className='wrap flex-b flex-wrap'>
        {
          BlogsData.map((bl, index) => (
            <Blog
              key={bl.id}
              blog={bl}
              index={index}
            />
          ))
        }
      </div>
      <div className='text-center  my-5'>
        <Link to='/blogs'>
          <button className='button text-white hover:bg-red-600'>See More BLogs</button>
        </Link>
      </div>
    </motion.div>
  )
}

export default Blogs