import React from 'react' 
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import demoImg from '../../images/demo.jpg'
function Donar(props) { 
    const { profilePic, name, bloodGroup, gender } = props.donar

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: '1'
            }}
            className='donarCard'>
            <div className={`${gender === 'male' ? 'bg-red-400' : 'bg-blue-400'}`}>
                <img className='w-3/5 m-auto h-52' src={profilePic || demoImg} alt="" />
            </div>
            <div className='genarelInfo'>
                <h1> <span>Name :</span> {name}</h1>
                <p> <span>bloodGroup :</span> {bloodGroup} </p>
                <p> <span>gender :</span> {gender}</p>

            </div>
            <Link to='/donars-details' state={props} >
                <button
                    className={`donarBtn duration-200 ${gender === 'male' ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
                > See Details</button>
            </Link>
        </motion.div >
    )
}

export default Donar