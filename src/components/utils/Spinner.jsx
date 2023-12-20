import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
function LoadingSpinner() {
  return (
     <div className='w-full h-screen flex items-center justify-center bg-slate-300'>
          <Spinner animation="border" size='md' />
     </div>
  )
}

export default LoadingSpinner