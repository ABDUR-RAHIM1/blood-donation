import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import demoImg from '../images/demo.jpg'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useContext } from 'react';
import { GlobalState } from '../State/State';


function UserEvent({ userEvent }) {
    const { handleDeleteUserRegister } = useContext(GlobalState);
    const { _id, profilePic, name, bloodGroup, problem } = userEvent;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: '1'
            }}
            className='userEvents relative'
        >
            <div className='w-full bg-slate-400  absolute top-0 left-0 flex-b'>
                <Link to="/appoinment" state={userEvent}>
                    <FaEdit className=" text-white text-3xl bg-green-600  p-1 cursor-pointer" />
                </Link>
                <AiFillDelete onClick={() => handleDeleteUserRegister(_id)} className=" text-white text-3xl bg-red-600  p-1 cursor-pointer" />

            </div>

            <div className="bg-gray-200">
                <img className='w-3/5 m-auto h-52' src={profilePic || demoImg} alt="" />
            </div>
            <div className='genarelInfo'>
                <h1> <span>Name :</span> {name}</h1>
                <p> <span>bloodGroup :</span> {bloodGroup} </p>
                <p> <span>Problem :</span> {problem} </p>

            </div>
            <Link to='/users-details' state={userEvent}>
                <button
                    className={`button eventBtn`}
                > See Details</button>
            </Link>


        </motion.div>

    )
}

export default UserEvent