import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import demoImg from '../images/demo.jpg'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { GlobalState } from '../State/State';


function Event({ event }) {
    const { _id, profilePic, name, bloodGroup, gender } = event;
    const { handleDeleteRegister } = useContext(GlobalState);



    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: '1'
            }}
            className='donarCard relative'>
            <div className='w-full bg-slate-400  absolute top-0 left-0 flex-b'>
                <Link to="/donar-register" state={event}>
                    <FaEdit className=" text-white text-3xl bg-green-600  p-1 cursor-pointer" />
                </Link>
                <AiFillDelete onClick={() => handleDeleteRegister(_id)} className=" text-white text-3xl bg-red-600  p-1 cursor-pointer" />

            </div>

            <div className={`${gender === 'male' ? 'bg-red-400' : 'bg-blue-400'}`}>
                <img className='w-3/5 m-auto h-52' src={profilePic || demoImg} alt="" />
            </div>
            <div className='genarelInfo'>
                <h1> <span>Name :</span> {name}</h1>
                <p> <span>bloodGroup :</span> {bloodGroup} </p>
                <p> <span>gender :</span> {gender}</p>

            </div>
            <Link to='/donars-details' state={event}>
                <button
                    className={`donarBtn duration-200 ${gender === 'male' ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
                > See Details</button>
            </Link>
        </motion.div >
    )
}

export default Event