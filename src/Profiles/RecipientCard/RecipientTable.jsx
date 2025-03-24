
import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { GlobalState } from '../../State/State'
import { MdDelete, MdEdit } from 'react-icons/md'
import { Link } from 'react-router-dom'
import demoImg from "../../images/demo.jpg"

export default function RecipientTable(props) {

    if (!props.data) {
        return <p> Data Not Found . . . </p>
    }

    const { data: newData } = props
    const [data, setData] = useState(newData);

    const { deleteHandler, deleting } = useContext(GlobalState)

    const handleDeleteAppoinment = (id) => {
        const DELETE_API = `/users-register/delete/${id}`
        deleteHandler(DELETE_API)

        setData(prevData => prevData.filter(app => app._id !== id))

    }

    useEffect(() => {
        setData(newData)
    }, [newData])



    const columns = [
        {
            name: "রোগীর ফটো",
            selector: row => <img src={row.photo || demoImg} className='w-[100px] h-[100px] my-3' alt="roktojoddha" />
        },
        {
            name: "সমস্যা ",
            selector: row => row.problem
        },
        {
            name: "রক্তের গ্রুপ",
            selector: row => row.bloodGroup
        },
        {
            name: "কবে দরকার",
            selector: row => new Date(row.preferredDate).toLocaleDateString()
        },
        {
            name: "কতো ব্যাগ ",
            selector: row => row.howMuch
        },
        {
            name: "পোস্ট করেছেন",
            selector: row => new Date(row.createdAt).toLocaleDateString()
        },
        {
            name: "আপডেট",
            selector: row => <Link to={"/profile/request-blood"}
                state={row}
                className=' inline-block text-4xl text-blue-600 bg-blue-50   p-2 cursor-pointer hover:shadow-xl duration-200 '><MdEdit /></Link>
        },
        {
            name: <div>
                {
                    deleting ? <span className=' font-bold text-red-500'>Deleting . .  .</span> : "ডিলিট"
                }
            </div>,
            selector: row => <span onClick={() => handleDeleteAppoinment(row._id)} className='text-4xl text-red-600 bg-blue-50 block p-2 cursor-pointer hover:shadow-xl duration-200 '><MdDelete /></span>
        },
    ]
 
    return (

        <>
            <div className=' my-5 primaryBg2 px-5 '>
                <h2 className=' text-3xl font-medium  py-4'>রক্তের জন্য আবেদন করেছেন</h2>
            </div>

            <DataTable
                columns={columns}
                data={data}
                pagination
            />
        </> 

    )
}
