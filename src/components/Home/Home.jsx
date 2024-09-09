import React from 'react'
import AddBanner from './AddBanner'
import DonationProccess from './DonationProccess'
import Appoinment from './Appoinment'
import Up from '../utils/Up'
import Volantiars from './Volantiars'
import Testimonial from './Testimonial'
import { motion } from 'framer-motion'
import LetestBlog from './LetestBlog'
import Slider from './Slider'
import BecomeDonate from './BecomeDonate'
// import Slider from '../utils/Slider'

function Home() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: '1'
      }}
    className=' bg-gray-100'
   >

      <Slider />
      <AddBanner />
      <BecomeDonate />
      <DonationProccess />
      <Appoinment />
      <Volantiars />
      <LetestBlog />
      <Testimonial />
      <Up />
    </motion.div>
  )
}

export default Home