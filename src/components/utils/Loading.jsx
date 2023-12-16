import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
function Loading({size}) {
  return (
    <Spinner animation="border" size={size} />
  )
}

export default Loading