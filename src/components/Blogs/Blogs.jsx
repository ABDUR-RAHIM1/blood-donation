import React, { useContext, useEffect } from 'react'
import Blog from './Blog'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { GlobalState } from '../../State/State';
import LoadingSpinner from '../utils/Spinner';
import Banner from '../utils/Banner';
function Blogs() {
  const { handleGetBlogs, blogs, isLoading, } = useContext(GlobalState)

  useEffect(() => {
    handleGetBlogs()
  }, [])
  if (isLoading) return <LoadingSpinner size="md" />
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: '2'
      }}
    >
      <Banner path={"Blogs"} />
      <div>
        {
          blogs && blogs.slice().reverse().map((bl, index) => (
            <Blog
              key={bl._id}
              blog={bl}
              index={index}
            />
          ))
        }
      </div>

    </motion.div>
  )
}

export default Blogs