import React from 'react'
import { motion } from 'framer-motion';

function LoadingSpinner() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: "1"
      }}
      className='w-full h-screen flex items-center justify-center bg-slate-50'>
      Spinner
    </motion.div>
  )
}

export default LoadingSpinner