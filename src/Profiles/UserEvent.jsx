import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import demoImg from '../images/demo.jpg'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useContext } from 'react';
import { GlobalState } from '../State/State';
import { MdOutlineEditNote } from 'react-icons/md';


function UserEvent({ userEvent }) {
    const { token, handleDeleteUserRegister } = useContext(GlobalState);
    const { _id, profilePic, name, bloodGroup, problem } = userEvent;
    const path = useLocation().pathname;
    const [isClick, setIsClick] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: '1'
            }} userEvent
            className='group w-full md:w-[31%] bg-white shadow-md shadow-gray-300 rounded-md  p-3'
        >
            {
                token && path === "/profile" &&
                <div className='w-full absolute top-0 left-0 flex-b'>
                    <MdOutlineEditNote onClick={() => setIsClick(!isClick)} className="text-3xl cursor-pointer" />

                    {isClick && <div className='flex items-end gap-3  bg-slate-400'>
                        <Link to="/appoinment" state={userEvent}>
                            <FaEdit className=" text-white text-3xl bg-green-600  p-1 cursor-pointer" />
                        </Link>
                        <AiFillDelete onClick={() => handleDeleteUserRegister(_id)} className=" text-white text-3xl bg-red-600  p-1 cursor-pointer" />

                    </div>
                    }
                </div>

            }

            <div className="w-full h-[60vh] overflow-hidden" >
                <img className='w-full h-full group-hover:scale-110 group-hover:opacity-80   duration-300' src={profilePic || demoImg} alt="" />
            </div>
            <table className="my-6 w-full border-collapse">
                <tbody className="space-y-4">
                    <tr className="border-b border-b-gray-100">
                        <td className="p-2 font-bold">Name:</td>
                        <td className="p-2">{name}</td>
                    </tr>
                    <tr className="border-b border-b-gray-100">
                        <td className="p-2 font-bold">Blood Group:</td>
                        <td className="p-2">{bloodGroup}</td>
                    </tr>
                    <tr className="border-b border-b-gray-100">
                        <td className="p-2 font-bold">Problem:</td>
                        <td className="p-2">{problem}</td>
                    </tr>
                </tbody>
            </table>

            <Link to='/users-details' state={userEvent} >
                <button
                    className="group-hover:bg-red-500 duration-300 py-4 px-6 bg-black text-white text-center rounded-sm my-5 w-full"
                > See Details</button>
            </Link>


        </motion.div>

    )
}

export default UserEvent