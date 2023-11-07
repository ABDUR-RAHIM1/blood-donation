import React from 'react'
import img from '../../images/me.png'
import { useState } from 'react'
import { motion } from 'framer-motion'
function Donar(props) {
    const [show, setShow] = useState(false)
    const { name, birthDate, gender, bloodGroup, weight, beforeDonate, mCondition, FrequencyDonation, email, phone, eContact, rContact, message } = props.donar
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: '1'
            }}
            className='donarCard'>
            <div className={`${gender === 'male' ? 'bg-red-500' : 'bg-blue-500' }`}>
                <img className='w-3/5 m-auto h-52' src={img} alt="" />
            </div>
            <div className='genarelInfo'>
                <h1> <span>Name :</span> {name}</h1>
                <p> <span>bloodGroup :</span> {bloodGroup} </p>
                <p> <span>gender :</span> {gender}</p>
                {show &&
                    <div>
                        <p> <span>Weight :</span> {weight} </p>
                        <p> <span>birthDate :</span> {birthDate} </p>
                        <p> <span>beforeDonate : </span> {beforeDonate} </p>
                        <p> <span>Medical Condition : </span> {mCondition} </p>
                        <p> <span>Frequency Donation : </span> {FrequencyDonation} </p>
                        <p> <span>Frequency Donation : </span> {FrequencyDonation} </p>
                        <p><span>My Message :</span> {message}</p>
                    </div>}
                <div className='hidden'>
                    <p><span>Email : </span>{email}</p>
                    <p><span>Phone : </span>{phone}</p>
                    <p><span>Emergency Contact : </span>{eContact}</p>
                    <p><span>Relational Contact : </span>{rContact}</p>
                </div>

            </div>
            <button onClick={() => setShow(!show)} className={`donarBtn duration-200 ${gender==='male' ?'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}>Show {`${show ? 'Less' : 'More'}`} Info</button>
        </motion.div>
    )
}

export default Donar