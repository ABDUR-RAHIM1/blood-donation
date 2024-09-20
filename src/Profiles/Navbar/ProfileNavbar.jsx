import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import demoImg from "../../images/demo.jpg"
import { GlobalState } from '../../State/State';
import useFetch from '../../hooks/usefetch';
import { MdEmail, MdHome, MdLogout } from 'react-icons/md';
import { IoIosMan } from 'react-icons/io';

export default function ProfileNavbar() {

    const { token } = useContext(GlobalState);
    const API = `/users/users-one`;
    const { isLoading, data } = useFetch(API, token);

    if (isLoading) {
        return <div className=' py-5 px-10 text-center'>Loading . .. </div>
    }

    if (!data) {
        return <div className=' py-5 px-10 text-center'>Data not Found</div>
    }

    const { name, email, profilePic } = data;



    return (
        <div className='px-5 mnd:px-10 flex items-center justify-between h-[100px] sticky top-0  primaryBg z-[111] border-b border-b-red-500'>
            <div className={`  w-auto px-2 md:p-4 h-full flex items-center justify-start`}>
                <Link to="/" className="text-2xl md:text-5xl font-bold primaryBg2 py-2 px-3  rounded-md text-gray-50 hover:text-gray-200">
                    <MdHome />
                </Link>
            </div>
            <div className=' flex items-center justify-center gap-4'>
                <img src={profilePic || demoImg} className=' w-[70px] h-[70px] rounded-md' alt="roktojoddha" />
                <div className=' flex flex-col gap-3'>
                    <div className=' flex items-center gap-2'>
                        <IoIosMan />
                        <p>{name}</p>
                    </div>
                    <div className=' flex items-center gap-2'>
                        <MdEmail />
                        <p>{email}</p>
                    </div>

                </div>
            </div>
            <div>
                <button className=' py-5 px-6  primaryBg2 text-gray-100 font-medium flex items-center gap-3'>
                    Log Out
                    <span className=' text-3xl'>
                        <MdLogout />
                    </span>
                </button>
            </div>
        </div>
    )
}
