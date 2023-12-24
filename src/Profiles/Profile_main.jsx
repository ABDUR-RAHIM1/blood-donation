import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { GlobalState } from '../State/State'
import Event from './Event'
import BlogOne from '../components/Blogs/BlogOne'
import Notification from '../components/utils/Notification'

function Profile_main() {
    const { donartoken, API, setIsLoading, getOneBlog, oneBlog, isDelete, message } = useContext(GlobalState)
    const [regsiterEvent, setRegsiterEvent] = useState([])
    //  get login donars Account
    useEffect(() => {
        setIsLoading(true)
        fetch(`${API}/donar-register/donars-one`, {
            method: "GET",
            headers: {
                'Content-type': "application/json",
                'Authorization': `Bearer ${donartoken}`
            },
        }).then(res => res.json())
            .then(data => {

                setRegsiterEvent(data.donarInfo)
                setIsLoading(false)
            });

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
                            <BlogOne blog={blog} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Profile_main