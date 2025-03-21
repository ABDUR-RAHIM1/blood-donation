import React from 'react'
import demoImg from '../../images/demo.jpg';
import { FaFacebook, FaTwitter, FaLinkedin, FaRegEdit } from "react-icons/fa";
import { MdDelete, MdOutlineEditNote } from 'react-icons/md';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalState } from '../../State/State';


function VolaanteersCard(props) {
    const path = useLocation().pathname;
    const { ADMIN_TOKEN, handleDeleteVolunteer } = useContext(GlobalState);
    const [isClick, setIsClick] = useState(false);
    const { _id, name, title, profilePic, fb_link, t_link, l_link } = props.vt;


    return (
        <div className='mt-5 bg-gray-50 w-full md:w-31 shadow-md'>

            {
                ADMIN_TOKEN && path === "/admin-manage-volunteer" &&
                <div className='flex items-center justify-between'>
                    <MdOutlineEditNote onClick={() => setIsClick(!isClick)} className="text-2xl cursor-pointer" />
                    <div className={`${isClick ? "flex" : "hidden"} flex-b gap-3 w-2/4 px-2 bg-gray-200 py-1 top-0 left-0 `}>
                        <Link to="/admin-add-volunteer" state={props.vt}>
                            <FaRegEdit className="text-2xl cursor-pointer text-green-400" />
                        </Link>
                        <MdDelete onClick={() => handleDeleteVolunteer(_id)} className="text-2xl cursor-pointer text-red-600" />
                    </div>
                </div>

            }

            <img className='w-11/12 m-auto h-60' src={profilePic || demoImg} alt={`${profilePic}`} />
            <div className='py-3 bg-white'>
                <h1 className='text-xl text-center font-semibold uppercase'>{name}</h1>
                <p className='text-md text-center uppercase font-semibold text-slate-600'>{title}</p>
            </div>
            <div className='py-3 flex items-center justify-center gap-2'>
                <a href={fb_link} target='_blank'><FaFacebook className="icons" /></a>
                <a href={t_link} target='_blank'> <FaTwitter className="icons" /></a>
                <a href={l_link} target='_blank'>  <FaLinkedin className="icons" /></a>
            </div>


        </div>
    )
}

export default VolaanteersCard