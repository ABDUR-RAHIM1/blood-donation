import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { GlobalState } from '../State/State'
import DonarEvent from './DonarEvent'
import BlogOne from '../components/Blogs/BlogOne'
import Notification from '../components/utils/Notification'
import UserEvent from './UserEvent'

function Profile_main(props) {
    const { regsiterEvent, userRegsiterEvent } = props;

    const { getOneBlog, oneBlog, isDelete, message } = useContext(GlobalState)

    useEffect(() => {
        //  get one blog => who is login 
        getOneBlog()
    }, [isDelete])

    return (
        <div className="h-screen overflow-y-auto scroll-none">
            <h1 className='text-center text-3xl font-semibold my-8'>Your Events</h1>
            {
                !regsiterEvent && !userRegsiterEvent ? <h3 className='text-2xl capitalize text-red-500'>
                    You have no Event ! 🔎
                </h3> : ""
            }
            {/*  donar regsieter event */}
            {regsiterEvent &&
                <div className="eventWrapper">
                    {
                        regsiterEvent && regsiterEvent.map(re => (
                            <DonarEvent key={re._id} event={re} />
                        ))
                    }
                </div>
            }
            {/*  user regiseter event */}
            {
                userRegsiterEvent &&

                <div className='eventWrapper'>
                    {
                        userRegsiterEvent && userRegsiterEvent.map(userEvent => (
                            <UserEvent key={userEvent._id} userEvent={userEvent} />
                        ))
                    }
                </div>
            }



            <div className="my-20">
                <h3 className="text-center my-4 uppercase text-3xl ">Your Blogs</h3>
                {
                    oneBlog.length === 0 && <h3 className='text-2xl capitalize text-red-500'>
                        You have no Blog ! 📝
                    </h3>
                }
                {message && <Notification />}
                <div className="flex-b justify-start gap-3 flex-wrap">
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