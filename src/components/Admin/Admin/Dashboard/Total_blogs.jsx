import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Total_blogs() {
  const navigate = useNavigate()
  const handleMove =()=>{
    navigate('/admin-get-blog')
  }
  return (
    // <Link  to='/admin-get-blog' className='dash_board_items'>Total_blogs</Link>
    <div onClick={handleMove}  to='/admin-get-blog' className='dash_board_items'>Total_blogs</div>
  )
}

export default Total_blogs