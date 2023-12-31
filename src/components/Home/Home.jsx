import React  from 'react'  
import AddBanner from './AddBanner'
import DonationProccess from './DonationProccess'
import Appoinment from './Appoinment' 
import Up from '../utils/Up'
import Volantiars from './Volantiars' 
import Testimonial from './Testimonial'
import {motion} from 'framer-motion'
import LetestBlog from './LetestBlog' 
import Slider from '../utils/Slider'

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
        <LetestBlog/>
        <Testimonial/>
        <Up/>
    </motion.div>
  )
}

export default Home