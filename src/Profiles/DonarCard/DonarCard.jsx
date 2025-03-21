import React, { useContext, useEffect, useState } from 'react'
import ProifleLayout from '../ProifleLayout'
import { GlobalState } from '../../State/State'
import { MdDelete, MdEdit } from 'react-icons/md'
import ProfileLoading from '../Loading/ProfileLoading'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import DataNotFound from '../../components/utils/DataNotFound'
import { deletDonar, getAuthenticatDonarCard } from '../../API/API'

export default function DonarCard() {
    const { fetchData, deleteHandler } = useContext(GlobalState)
    const [isLoading, setIsLoading] = useState(true)
    const [donarInfo, setDonarInfo] = useState(null)

    useEffect(() => {
        setIsLoading(true);

        const getData = async () => {
            try {
                const data = await fetchData(getAuthenticatDonarCard);
                setDonarInfo(data);

            } catch (error) {
                console.error("Failed to fetch authenticated user info", error);
            } finally {
                setIsLoading(false);
            }
        };

        getData();
    }, []);



    if (isLoading) {
        return <ProfileLoading />
    }


    const handleDeleteDonar = (id) => {
        const DELETE_API = deletDonar + id
        const res = window.confirm("Are You Sure ? ")
        res ?
            deleteHandler(DELETE_API)
            : null
    }

    if (!donarInfo) {
        return <DataNotFound text={"Data not Found"} />
    }

    const {
        photo,
        email,
        address,
        dob,
        weight,
        gender,
        beforeDonation,
        bloodGroup,
        contactNumber,
        emergencyContact,
        relationshipContact,
        donationDate,
        preferredDonationTime,
        message,
        allergies,
        donationLocation,
        lastDonationLocation,
        medicalCondition,
        createdAt,
        updatedAt
    } = donarInfo;



    return (

        <ProifleLayout>

            <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='overflow-x-auto'
            >
                <div className='w-full py-5 px-10 primaryBg2 my-5 flex items-center justify-between'>
                    <div>Actions</div>
                    <div className='flex items-center gap-10'>
                        <Link to={"/profile/donar-registration"}
                            state={donarInfo}
                            className='inline-block text-4xl text-blue-600 cursor-pointer bg-blue-50 p-2 hover:shadow-xl'>
                            <MdEdit />
                        </Link>
                        <span onClick={() => handleDeleteDonar(donarInfo._id)} className='text-4xl text-red-600 cursor-pointer bg-blue-50 p-2 hover:shadow-xl'>
                            <MdDelete />
                        </span>
                    </div>
                </div>

                <div className=' w-full'>
                    <img className=' w-auto  max-w-full  h-auto max-h-[70vh] mx-auto rounded-md' src={photo} alt="roktojoddha" />
                </div>



                <table className="bg-white px-5 min-w-full table-auto border-collapse overflow-auto my-6">
    <thead className="bg-gray-100">
        <tr>
            <th className="px-6 py-3 text-left font-bold border-b w-[28%]">সিরিয়াল</th>
            <th className="px-6 py-3 text-left font-bold border-b w-[68%]">মান</th>
        </tr>
    </thead>
    <tbody className="bg-white">
        <tr className="border-b">
            <td className="px-6 py-4 font-medium text-gray-900">রক্তের গ্রুপ:</td>
            <td className="px-6 py-4">{bloodGroup}</td>
        </tr>
        <tr className="border-b">
            <td className="px-6 py-4 font-medium text-gray-900">ইমেইল:</td>
            <td className="px-6 py-4 lowercase">{email}</td>
        </tr>
        <tr className="border-b">
            <td className="px-6 py-4 font-medium text-gray-900">ঠিকানা:</td>
            <td className="px-6 py-4 lowercase">{address}</td>
        </tr>
        <tr className="border-b">
            <td className="px-6 py-4 font-medium text-gray-900">জন্ম তারিখ:</td>
            <td className="px-6 py-4">{new Date(dob).toLocaleDateString()}</td>
        </tr>
        <tr className="border-b">
            <td className="px-6 py-4 font-medium text-gray-900">ওজন:</td>
            <td className="px-6 py-4">{weight} কেজি</td>
        </tr>
        <tr className="border-b">
            <td className="px-6 py-4 font-medium text-gray-900">লিঙ্গ:</td>
            <td className="px-6 py-4">{gender}</td>
        </tr>
        <tr className="border-b">  
            <td className="px-6 py-4 font-medium text-gray-900">যোগাযোগ নম্বর:</td>
            <td className="px-6 py-4">+888 {contactNumber}</td>
        </tr>
        <tr className="border-b">
            <td className="px-6 py-4 font-medium text-gray-900">জরুরি যোগাযোগ:</td>
            <td className="px-6 py-4">+888 {emergencyContact}</td>
        </tr>
        <tr className="border-b">
            <td className="px-6 py-4 font-medium text-gray-900">সম্পর্কিত যোগাযোগ:</td>
            <td className="px-6 py-4">{relationshipContact ? "+888 " + relationshipContact : "নাই"}</td>
        </tr>
        <tr className="border-b">
            <td className="px-6 py-4 font-medium text-gray-900">আগের দান সংখ্যা:</td>
            <td className="px-6 py-4">{beforeDonation} বার</td>
        </tr>
        <tr className="border-b">
            <td className="px-6 py-4 font-medium text-gray-900">সর্বশেষ দানের তারিখ:</td>
            <td className="px-6 py-4">{new Date(donationDate).toLocaleDateString()}</td>
        </tr>
        <tr className="border-b">
            <td className="px-6 py-4 font-medium text-gray-900">পছন্দের দান সময়:</td>
            <td className="px-6 py-4">{preferredDonationTime} AM/PM</td>
        </tr>
        <tr className="border-b">
            <td className="px-6 py-4 font-medium text-gray-900">দান স্থান:</td>
            <td className="px-6 py-4">{donationLocation}</td>
        </tr>
        <tr className="border-b">
            <td className="px-6 py-4 font-medium text-gray-900">সর্বশেষ দানের স্থান:</td>
            <td className="px-6 py-4">{lastDonationLocation}</td>
        </tr>
        <tr className="border-b">
            <td className="px-6 py-4 font-medium text-gray-900">অ্যালার্জি:</td>
            <td className="px-6 py-4">{allergies}</td>
        </tr>
        <tr className="border-b">
            <td className="px-6 py-4 font-medium text-gray-900">মেডিক্যাল অবস্থা:</td>
            <td className="px-6 py-4">{medicalCondition}</td>
        </tr>
        <tr className="border-b">
            <td className="px-6 py-4 font-medium text-gray-900">তৈরির সময়:</td>
            <td className="px-6 py-4">{new Date(createdAt).toLocaleString()}</td>
        </tr>
        <tr className="border-b">
            <td className="px-6 py-4 font-medium text-gray-900">সর্বশেষ আপডেট:</td>
            <td className="px-6 py-4">{new Date(updatedAt).toLocaleString()}</td>
        </tr>
        <tr className="border-b">
            <td className="px-6 py-4 font-medium text-gray-900">শর্তাবলী:</td>
            <td className="px-6 py-4">
                {message && message.split(".").map((m, i) => (
                    <p key={i} className='my-3'>{m}</p>
                ))}
            </td>
        </tr>
    </tbody>
</table>

            </motion.div>

        </ProifleLayout>
    )
}
