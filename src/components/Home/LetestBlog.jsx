import React, { useContext, useEffect } from 'react'
import { GlobalState } from '../../State/State'

function LetestBlog() {
    const navigate = useNavigate()
    const { handleGetBlogs, blogs } = useContext(GlobalState)

    useEffect(() => {
        const fetchData = async () => {
            await handleGetBlogs();
        };

        fetchData();
    }, []);


    return (
        <div className=' my-32'>
            <Heading text="LETEST BLOG" />
            <div className='wrap'>
                <div className='flex-b mt-10 flex-wrap'>
                    {blogs && blogs.slice(0, 6).map(lb => (
                        <HomeBlog key={lb._id} blog={lb} />
                    ))

                    }
                </div>
                <div onClick={() => navigate("/blogs")} className='text-center my-10'>
                    <button className='button bg-slate-900 text-white hover:bg-slate-950'>More Blogs</button>
                </div>
            </div>
        </div>
    )
}

export default LetestBlog

//  home blog compoennt
import demoImg from "../../images/demo1.png";
import { Link, useNavigate } from "react-router-dom";
import Heading from '../utils/Heading'

export function HomeBlog(props) {
    const { name, email, postAt, title, profilePic, desc } = props.blog;
    const { times } = useContext(GlobalState)
    return (
        <div className='w-full sm:w-48 md:w-31 my-4 shadow-sm'>
            <img className='w-full h-52 rounded-sm' src={profilePic || demoImg} alt={name} />
            <div className='mt-2 bg-gray-50 py-2 px-1'>
                <small className='uppercase underline'>Author : {name}</small> <br />
                <small>email : {email}</small> <br />
                <small>Post on : {times(postAt)}</small>
            </div>
            <div>
                <h1 className='text-lg md:text-2xl my-2 font-bold'>{title}</h1>
                <p>{desc && desc.slice(0, 350)}</p>
                <Link to='/blog-details' state={props.blog}>
                    <button className='button bg-gray-200 text-black hover:bg-slate-400 hover:text-white my-3 '>Read More</button>
                </Link>
            </div>
        </div>
    )
}