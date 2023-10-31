import React from 'react'
import BlogsData from '../../../Data/Blogs'
import Blog from './Blog'

function GetBlogs() {

  return (
    <>
      <div className="title">Manage All Blogs</div>
      <hr />
      <div className='flex-b flex-wrap my-10' >
        {
          BlogsData && BlogsData.map(bl => (
            <Blog key={bl.id}
              blog={bl}
            />
          ))
        }
      </div>

    </>
  )
}

export default GetBlogs