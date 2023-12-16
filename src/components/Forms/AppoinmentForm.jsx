import React from 'react'
import Inputs from '../utils/Inputs'

function AppoinmentForm() {
  const handleChange = (e) => {
    console.log('apponiment form handler')
  }
  return (
    <>
      <div className='w-full py-3 text-white bg-red-500'>
        <h2 className='text-2xl text-center text-uppercase'>Apply for Apoinment</h2>
      </div>
      <form>
        <Inputs
          type="text"
          name="name"
          value={''}
          placeholder="Name"
          handleChange={handleChange}
          lable="Enter Your Good Name"
        />
        <Inputs
          type="email"
          name="email"
          value={''}
          placeholder="Enter Name"
          handleChange={handleChange}
          lable="Enter Your Email"
        />
        <Inputs
          type="number"
          name="number"
          value={''}
          placeholder="number"
          handleChange={handleChange}
          lable="Enter Your Number"
        />
        <Inputs
          type="text"
          name="bGroup"
          value={''}
          placeholder="Blood Group"
          handleChange={handleChange}
          lable="Enter Blood Group"
        />

        <Inputs
          type="text"
          name="message"
          value={''}
          placeholder="Message"
          handleChange={handleChange}
          lable="Write Your Message With Us"
        />

      </form>


    </>
  )
}

export default AppoinmentForm