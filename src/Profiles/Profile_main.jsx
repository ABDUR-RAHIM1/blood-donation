import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { GlobalState } from '../State/State'
import Event from './Event'
import BlogOne from '../components/Blogs/BlogOne'
import Notification from '../components/utils/Notification'

function Profile_main(props) {
    const {regsiterEvent} = props;
    console.log(regsiterEvent)
    const {getOneBlog, oneBlog, isDelete, message } = useContext(GlobalState)

    useEffect(() => {
        //  get one blog => who is login 
        getOneBlog()
    }, [isDelete])

    return (
        <div className="h-screen overflow-y-auto scroll-none">
            <div className="event ">
                {
                    regsiterEvent && regsiterEvent.map(re => (
                        <Event key={re._id} event={re} />
                    ))
                }
            </div>

            <div className="blogsArea">
                <h3 className="text-center my-4 uppercase text-3xl ">Your Blogs</h3>
                {message && <Notification />}
                <div className="flex-b flex-wrap">
                    {
                        oneBlog && oneBlog.map(blog => (
                            <BlogOne key={blog._id} blog={blog} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Profile_main