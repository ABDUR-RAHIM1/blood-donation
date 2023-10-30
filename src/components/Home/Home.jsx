import React  from 'react'
import Header from './Header'
import Slider from './Slider'
import AddBanner from './AddBanner'
import DonationProccess from './DonationProccess'
import Appoinment from './Appoinment' 
import Up from '../utils/Up'
import Volantiars from './Volantiars'
import Blogs from '../Blogs/Blogs'
import Testimonial from './Testimonial'
import {motion} from 'framer-motion'

function Home() { 
 
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{
        duration :'1'
      }}
    > 
     
        <Slider/>
        <AddBanner/>
        <DonationProccess/>
        <Appoinment/>
        <Volantiars/>
        <Blogs/>
        <Testimonial/>
        <Up/>
    </motion.div>
  )
}

export default Home