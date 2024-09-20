import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import demoImg from '../../images/demo.jpg'

function Recipient(props) {
    const { photo, patientName, bloodGroup, howMuch, location, needTime } = props.recipient

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1
            }}
            viewport={{ once: true }}
            className=' group w-full md:w-[31%] bg-white shadow-md shadow-gray-300 rounded-md  p-3'>
            <div className="w-full h-[50vh] overflow-hidden scrollbar-hide" >
                <img className='w-full h-full group-hover:scale-110 group-hover:opacity-80   duration-300' src={photo || demoImg} alt="" />
            </div>
            <div className='h-[270px] overflow-y-auto scrollbar-hide cursor-all-scroll'>
                <table className="my-6 w-full  border-collapse">
                    <tbody className="space-y-4">
                        <tr className="border-b border-b-gray-100">
                            <td className="p-2 font-bold">Name:</td>
                            <td className="p-2">{patientName}</td>
                        </tr>
                        <tr className="border-b border-b-gray-100">
                            <td className="p-2 font-bold">Required Group:</td>
                            <td className="p-2">{bloodGroup}</td>
                        </tr>
                        <tr className="border-b border-b-gray-100">
                            <td className="p-2 font-bold">Bags Required:</td>
                            <td className="p-2">{howMuch}</td>
                        </tr>
                        <tr className="border-b border-b-gray-100">
                            <td className="p-2 font-bold">Address:</td>
                            <td className="p-2">{location}</td>
                        </tr>
                        <tr className="border-b border-b-gray-100">
                            <td className="p-2 font-bold">Required Time:</td>
                            <td className="p-2">{needTime}</td>
                        </tr>
                    </tbody>
                </table>


            </div>
            <Link to='/recipient-details' state={props.recipient} >
                <button
                    className="group-hover:bg-red-500 duration-300 py-4 px-6 bg-black text-white text-center rounded-sm my-5 w-full"
                > See Details</button>
            </Link>
        </motion.div >
    )
}

export default Recipient