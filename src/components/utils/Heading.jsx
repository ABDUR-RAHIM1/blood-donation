import React from 'react' 
import img from '../../images/border.png'
function Heading({text}) {
  return (
    <span className='text-2xl sm:text-3xl my-20 font-semibold italic relative text-center  bg-red-400'>
      <h2>{text}</h2>
       <img className='w-10 absolute -top-3 left-0' src={img} alt="" />
       <img className='w-10 absolute -top-3 right-0 rotate-180' src={img} alt="" />
    </span>
  )
}

export default Heading