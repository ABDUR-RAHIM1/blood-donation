import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { GlobalState } from '../State/State'
import DonarEvent from './DonarEvent'
import BlogOne from '../components/Blogs/BlogOne'
import Notification from '../components/utils/Notification'
import UserEvent from './UserEvent'

function Profile_main() {

    const { getLoginUserAccount, getLoginDonarAccount, registerEventUser, registerEventDonar, getOneBlog, oneBlog, isDelete, message } = useContext(GlobalState)

    useEffect(() => {
        //  get one blog => who is login 
        getLoginUserAccount()

        getLoginDonarAccount()
        getOneBlog()
    }, [isDelete])

    return (
        <div className="h-screen overflow-y-auto scroll-none">
            <h1 className='text-center text-3xl font-semibold my-8'>Your Events ( Donar )</h1>
            {
                !registerEventDonar &&
                <h3 className='text-2xl capitalize text-red-500'>
                    You have no Event (Donar) ! 🔎
                </h3>
            }
            {/*  donar regsieter event */}

            <div className="eventWrapper">
                {
                    registerEventDonar && registerEventDonar.map(re => (
                        <DonarEvent key={re._id} event={re} />
                    ))
                }
            </div>

            {/*  user regiseter event */}

            <div>
                <h1 className='text-center text-3xl font-semibold my-8'>Your Events ( Appoinment )</h1>
                {
                    !registerEventUser &&
                    <h3 className='text-2xl capitalize text-red-500'>
                        You have no Event (Appoinment) ! 🔎
                    </h3>
                }
                <div className='eventWrapper'>
                    {
                        registerEventUser && registerEventUser.map(userEvent => (
                            <UserEvent key={userEvent._id} userEvent={userEvent} />
                        ))
                    }
                </div>
            </div>


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