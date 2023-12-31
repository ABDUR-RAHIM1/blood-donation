import React from 'react'
import demoImg from "../../../../images/demo.jpg"
import { useContext } from 'react';
import { GlobalState } from '../../../../State/State';
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from 'react';
import { MdDelete } from 'react-icons/md';

function Users(props) {
    const [isClick, setIsClick] = useState(false)
    const { times } = useContext(GlobalState)
    const {_id , name, email, profilePic, date } = props.user;
    const {handleDelete} = props;

    return (
        <div style={{fontSize : '12px'}} className='rounded-sm my-3 w-full md:w-31 border border-fuchsia-100 p-2 text-white'>
            <img className='w-16 h-16 my-2 m-auto' src={profilePic || demoImg} alt="" />
            <h3>  {name}</h3>
            <p> {email}</p>
            <p>Joined : {times(date)}</p>

            <div className='flex items-center justify-between px-2'>
                <BsThreeDotsVertical onClick={() => setIsClick(!isClick)} className="text-2xl bg-blue-500 my-2 cursor-pointer" />
                {isClick &&
                    <div className=' cursor-pointer'>
                    <MdDelete onClick={()=>handleDelete(_id)} className="text-3xl text-red-600" />
                    </div>}
            </div>
        </div>
    )
}

export default Users