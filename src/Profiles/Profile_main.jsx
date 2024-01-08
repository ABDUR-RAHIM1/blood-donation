import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { GlobalState } from '../State/State'
import BlogOne from '../components/Blogs/BlogOne'
import Notification from '../components/utils/Notification'
import { Link } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import { motion } from "framer-motion"

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
            <h1 className='text-center text-xl my-8'>Your Events ( Donar )</h1>
            {
                !registerEventDonar &&
                <h3 className='text-lg capitalize text-red-500'>
                    You have no Event (Donar) ! 🔎
                </h3>
            }
            {/*  donar regsieter event */}

            {registerEventDonar && registerEventDonar.length > 0 &&
                <table className='table table-striped table-hover table-responsive overflow-auto'>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Bllod Group</th>
                            <th>Problem</th>
                            <th>Edit </th>
                            <th>Delete </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            registerEventDonar.map(re => (
                                <DonarsEvents key={re._id} event={re} />
                            ))
                        }
                    </tbody>

                </table>}

            {/*  user regiseter event */}

            <div>
                <h1 className='text-center text-xl my-8'>Your Events ( Appoinment )</h1>
                {
                    !registerEventUser &&
                    <h3 className='text-2xl capitalize text-red-500'>
                        You have no Event (Appoinment) ! 🔎
                    </h3>
                }
                {registerEventUser && registerEventUser.length > 0 &&

                    <table className='table table-striped table-hover table-responsive overflow-auto'>
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Bllod Group</th>
                                <th>Problem</th>
                                <th>Edit </th>
                                <th>Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                registerEventUser.slice().reverse().map(userEvent => (
                                    <UserEvents key={userEvent._id} userEvent={userEvent} />
                                ))
                            }

                        </tbody>
                    </table>
                }
            </div>


            <div className="my-20">
                <h3 className="text-center my-4 uppercase text-xl ">Your Blogs</h3>
                {
                    !oneBlog  && <h3 className='text-xl capitalize text-red-500'>
                        You have no Blog ! 📝
                    </h3>
                }
                {message && <Notification />}

            {    oneBlog && oneBlog.length > 0 &&
              <table className='table table-striped table-hover table-responsive overflow-auto'>
                    <thead>
                        <tr>
                            <td>Photo</td>
                            <td>title</td>
                            <td>Date</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            oneBlog && oneBlog.slice().reverse().map(blog => (
                                <BlogOne key={blog._id} blog={blog} />
                            ))
                        }
                    </tbody>

                </table>
                }
            </div>

        </div>
    )
}

export default Profile_main

// donar events table 

export function DonarsEvents({ event }) {
    const { _id, profilePic, name, bloodGroup, gender } = event;
    const { handleDeleteRegister } = useContext(GlobalState)
    return (
        <motion.tr
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: '1'
            }}
        >
            <td>
                <Link to="/donars-details" state={event} >
                    <img className='w-16 h-16' src={profilePic} alt="" />
                </Link>
            </td>
            <td> {name} </td>
            <td> {bloodGroup} </td>
            <td> {gender} </td>
            <td>
                <Link to="/donar-register" state={event}>
                    <FaEdit className="text-white text-3xl bg-green-600 p-1 cursor-pointer" />
                </Link>
            </td>
            <td>
                <AiFillDelete onClick={() => handleDeleteRegister(_id)} className="bg-red-700 text-white text-3xl p-1 cursor-pointer" />
            </td>
        </motion.tr>
    )
}


//  users events table
export function UserEvents(props) {
    const { handleDeleteUserRegister } = useContext(GlobalState)
    const { _id, profilePic, name, bloodGroup, problem } = props.userEvent;
    return (
        <motion.tr
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: '1'
            }}
        >
            <td>
                <Link to='/users-details' state={props.userEvent}>
                    <img className='w-16 h-16' src={profilePic} alt="" />
                </Link>
            </td>
            <td>{name}</td>
            <td>{bloodGroup}</td>
            <td>{problem}</td>
            <td>
                <Link to="/appoinment" state={props.userEvent}>
                    <FaEdit className="text-white text-3xl bg-green-600 p-1 cursor-pointer" />
                </Link>
            </td>
            <td>
                <AiFillDelete onClick={() => handleDeleteUserRegister(_id)} className="bg-red-700 text-white text-3xl p-1 cursor-pointer" />
            </td>
        </motion.tr>



    )
}