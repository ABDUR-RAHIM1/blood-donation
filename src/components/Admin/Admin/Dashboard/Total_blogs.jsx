import React from 'react'
 
function Total_blogs(props) {
  const { allBLogs, adminBlog, userBlog , donarBlog } = props;
  return (
    <div className='dash_board_items bg-blue-600 text-gray-900 '>
      <h1 className='text-2xl text-center my-2'>Blogs Info</h1>
      <h3 className='dash_card '>Total Blogs : {allBLogs && allBLogs.length}</h3>
      <h3 className='dash_card '> Admin : {adminBlog && adminBlog.length}</h3>
      <h3 className='dash_card '> Donar : {donarBlog && donarBlog.length}</h3>
      <h3 className='dash_card '> User : { userBlog && userBlog.length}</h3>
    </div>
  )
}

export default Total_blogs