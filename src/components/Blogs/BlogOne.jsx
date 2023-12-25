import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import demoImg from '../../images/demo.jpg'
import { MdOutlineEditNote, MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useContext } from 'react';
import { GlobalState } from '../../State/State';

function BlogOne(props) {
    const { handleDeleteBlog ,isDelete } = useContext(GlobalState)
    const { _id , title, desc, profilePic, postAt } = props.blog;
    const [isClick, setIsClick] = useState(false);




    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: '1'
            }}
            className='relative w-full sm:w-48 md:w-31 px-2 py-1 bg-gray-100 overflow-auto border my-4 text-left'
        >
            <div className='flex items-center justify-between'>
                <MdOutlineEditNote onClick={() => setIsClick(!isClick)} className="text-2xl cursor-pointer" />
                <div className={`${isClick ? "flex" : "hidden"} flex-b gap-3 w-2/4 px-2 bg-gray-400 py-1 top-0 left-0 `}>
                    <Link to="/add-blog" state={props.blog}>
                        <FaRegEdit className="text-2xl cursor-pointer text-green-400" />
                    </Link>
                    <MdDelete onClick={() => handleDeleteBlog(_id)} className="text-2xl cursor-pointer text-red-600" />
                </div>
            </div>
            <img className='w-4/5 m-auto h-20 mb-2' src={profilePic ? profilePic : demoImg} alt="" />
            <small>{postAt}</small>
            <h1 className='text-1xl font-semibold my-2 underline'>{title.slice(0,20) + ". . ."}</h1>
            <p>{desc && desc.slice(0, 30) + " . . ."}</p>
            <Link to="/blog-details" state={props.blog}>
                <button className='w-full bg-gray-300 mt-3 py-1 hover:bg-gray-200'>Details</button>
            </Link>

        </motion.div>
    )
}

export default BlogOne