import React  from 'react'
import Header from './Header'
import Slider from './Slider'
import AddBanner from './AddBanner'
import DonationProccess from './DonationProccess'
import Appoinment from './Appoinment' 
import Up from '../utils/Up'
import Volantiars from './Volantiars'

function Home() { 
 
  return (
    <div> 
     
        <Slider/>
        <AddBanner/>
        <DonationProccess/>
        <Appoinment/>
        <Volantiars/>
        <Up/>
    </div>
  )
}

export default Home