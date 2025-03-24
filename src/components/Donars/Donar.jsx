import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import demoImg from '../../images/demo.jpg'

function Donar(props) {
    const { photo, name, bloodGroup, gender, address, reviews } = props.donar;

    console.log(props.donar);

    // রেটিং গুলো বের করা
    const totalReviews = reviews?.length || 0; 
    const averageRating = totalReviews 
        ? (reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews).toFixed(1) // এক দশমিক পর্যন্ত রাখছি
        : 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1
            }}
            viewport={{ once: true }}
            className='group w-full md:w-[31%] bg-white shadow-md shadow-gray-300 rounded-md p-3'
        >
            <div className="w-full h-[50vh] md:h-[40vh] overflow-hidden">
                <img className='w-full h-full group-hover:scale-110 group-hover:opacity-80 duration-300' src={photo || demoImg} alt="" />
            </div>
            <table className="my-3 w-full border-collapse">
                <tbody>
                    <tr className="border-b border-b-gray-100">
                        <td className="p-2 font-bold">নাম:</td>
                        <td className="p-2">{name}</td>
                    </tr>
                    <tr className="border-b border-b-gray-100">
                        <td className="p-2 font-bold">রক্তের গ্রুপ:</td>
                        <td className="p-2">{bloodGroup}</td>
                    </tr>
                    <tr className="border-b border-b-gray-100">
                        <td className="p-2 font-bold"> জেন্ডার:</td>
                        <td className="p-2">{gender}</td>
                    </tr>
                    <tr className="border-b border-b-gray-100">
                        <td className="p-2 font-bold">ঠিকানা:</td>
                        <td className="p-2">{address}</td>
                    </tr>
                    <tr className="border-b border-b-gray-100">
                        <td className="p-2 font-bold"> রেটিং :</td>
                        <td className="p-2">
                            <span className="text-yellow-500 text-xl">
                                {"⭐".repeat(Math.round(averageRating))}
                            </span>  
                            <span className="ml-2 text-gray-600">({averageRating}/5)</span>
                            <span className="ml-2 text-gray-500">• {totalReviews} রিভিউ</span>
                        </td>
                    </tr>
                </tbody>
            </table>

            <Link to='/donars-details' state={props.donar} >
                <button
                    className="group-hover:bg-red-500 duration-300 py-4 px-6 bg-black text-white text-center rounded-sm my-2 w-full"
                >  বিস্তারিত দেখুন </button>
            </Link>
        </motion.div>
    )
}

export default Donar;
