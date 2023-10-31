import React, { useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalState } from '../../../State/State'

function Blog({ blog }) { 
    const [show, setShow] = useState(false)
    const {setInfo } = useContext(GlobalState)
    const handleShow = () => {
        setTimeout(() => {
            setShow(!show)
        }, 1000);
    }

    const handleEdit = (id, blog) =>{
       const newInfo  = blog 
       newInfo.isEdit = true
       setInfo(newInfo)
    }

    return (
        <div className='w-48 md:w-23 border border-dotted my-3 cursor-pointer relative'>
            <img className='w-full h-24' src={blog.image} alt="" />
            <div className='p-2'>
                <Link to='/blog-details' state={blog}>
                    <h1 title='go to details' className="text-lg font-bold text-center uppercase underline">{blog.title}</h1>
                </Link>
                <p onClick={handleShow}>{(blog.text).slice(0, 50) + ' . . .'}</p>
            </div>

            {/*  admin button => edit and delete */}

            {show && <div className="adminBtn flex-b">
                <Link to='/add-blog' state={blog} onClick={() => handleEdit(blog.id, blog)}>
                    <button className='button'>Edit</button>
                </Link>
                <button className='button'>Delete</button>
            </div>}

            {/*  admin button => edit and delete */}

        </div>
    )
}

export default Blog