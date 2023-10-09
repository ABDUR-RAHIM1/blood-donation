import React  from 'react'
import Header from './Header'
import Slider from './Slider'
import AddBanner from './AddBanner'
import DonationProccess from './DonationProccess'
import Appoinment from './Appoinment' 
import Up from '../utils/Up'

function Home() { 
 
  return (
    <div> 
        <Header/>
        <Slider/>
        <AddBanner/>
        <DonationProccess/>
        <Appoinment/>
        <Up/>
    </div>
  )
}

export default Home