import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { GlobalState } from '../State/State'
import Event from './Event'

function Profile_main() {
    const { donartoken, API, setIsLoading, isDelete } = useContext(GlobalState)
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
            })
    }, [isDelete])

    return (
        <div className='' >
            <div className="event ">
                {
                    regsiterEvent && regsiterEvent.map(re => (
                        <Event key={re._id} event={re} />
                    ))
                }
            </div>

               <div className="blogsArea flex-b">
                  <p>blogs</p>
                  <p>blogs</p>
                  <p>blogs</p>
                  <p>blogs</p>
                  <p>blogs</p>
                  <p>blogs</p>
               </div>

        </div>
    )
}

export default Profile_main