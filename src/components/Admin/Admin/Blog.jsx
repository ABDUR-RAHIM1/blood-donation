import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../../State/State'
import demoImg from '../../../images/demo1.png'
import { FaRegEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

function Blog(props) {
    const { _id, title, desc, profilePic } = props.blog;
    const [show, setShow] = useState(false)
    const {handleDeleteBlog } = useContext(GlobalState)
    const handleShow = () => {
        setTimeout(() => {
            setShow(!show)
        }, 1000);
    }
 
    //  admin blog 

    return (
        <div className='w-48 md:w-23 border border-dotted my-3 cursor-pointer relative'>
            <img className='w-full h-32' src={profilePic || demoImg} alt="" />
            <div className='p-2'>
                <Link to='/blog-details' state={props.blog}>
                    <h1 title='go to details' className="text-lg font-bold text-center uppercase underline">{title}</h1>
                </Link>
                <p className='text-white' onClick={handleShow}>{(desc).slice(0, 50) + ' . . .'}</p>
            </div>

            {/*  admin button => edit and delete start */}

            {show && <div className="adminBtn px-3 py-2 flex-b">
                <Link to='/admin-add-blog' state={props.blog}>

                    <FaRegEdit className="text-2xl cursor-pointer text-green-400" />
                </Link>
                <MdDelete onClick={() => handleDeleteBlog(_id)} className="text-2xl cursor-pointer text-red-600" />
            </div>}

            {/*  admin button => edit and delete end  */}

        </div>
    )
}

export default Blog