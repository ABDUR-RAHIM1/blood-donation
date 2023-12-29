import React from 'react'

function Total_admin(props) {
  const { allUsers, loginUser, adminBlog } = props;
  return (
    <div className='dash_board_items bg-cyan-500 text-gray-900 '>
      <h1 className='text-2xl text-center my-2'>Admin Info</h1>
      <h3 className='dash_card '> log-in Donar : {loginUser && loginUser.length}</h3>
      <h3 className='dash_card '> total Register : {allUsers && allUsers.length}</h3>
      <h3 className='dash_card '> Blog : {adminBlog && adminBlog.length}</h3>
    </div>
  )
}

export default Total_admin