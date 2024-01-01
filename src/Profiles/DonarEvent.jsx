import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import demoImg from '../images/demo.jpg'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { GlobalState } from '../State/State';
import { MdOutlineEditNote } from 'react-icons/md';
import { useState } from 'react';


function DonarEvent({ event }) {
    const { _id, profilePic, name, bloodGroup, gender } = event;
    const { handleDeleteRegister } = useContext(GlobalState);
    const [isClick, setIsClick] = useState(false)


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: '1'
            }}
            className='events relative'>
            <div className='w-full  px-2 absolute top-0 left-0 flex-b'>
                <MdOutlineEditNote onClick={() => setIsClick(!isClick)} className="text-3xl cursor-pointer" />

                {isClick && <div className='flex items-end gap-3  bg-slate-400'>
                    <Link to="/donar-register" state={event}>
                        <FaEdit className=" text-white text-3xl bg-green-600  p-1 cursor-pointer" />
                    </Link>
                    <AiFillDelete onClick={() => handleDeleteRegister(_id)} className=" text-white text-3xl bg-red-600  p-1 cursor-pointer" />

                </div>
                }
            </div>

            <div className="bg-gray-200">
                <img className='w-3/5 m-auto h-52' src={profilePic || demoImg} alt="" />
            </div>
            <div className='genarelInfo'>
                <h1> <span>Name :</span> {name}</h1>
                <p> <span>bloodGroup :</span> {bloodGroup} </p>
                <p> <span>gender :</span> {gender}</p>

            </div>
            <Link to='/donars-details' state={event}>
                <button
                    className="button eventBtn"
                > See Details</button>
            </Link>
        </motion.div >
    )
}

export default DonarEvent