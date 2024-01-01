import React from 'react'
import Donar from './Donar'
import { useEffect } from 'react'
import { useContext } from 'react'
import { GlobalState } from '../../State/State'
import LoadingSpinner from '../utils/Spinner'
import Heading from '../utils/Heading'
import { useState } from 'react'

function Donars() {
    const { getAllDonarsItems, allDonars,setIsLoading, isLoading } = useContext(GlobalState)


    const [search, setSearch] = useState("");
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
 
    useEffect(() => {
        getAllDonarsItems(search)
        if (search) {
            setIsLoading(false)
        }
    }, [search])

    if (isLoading) {
        return <LoadingSpinner />
    }
    return (

        <div className='my-10'>
            <Heading text="Donar List" />


            <div className="wrap">
                <select required onChange={handleChange} name="bloodGroup" className='w-full md:w-2/4 m-auto form-control mt-4 fw-semi-bold'>
                    <option value="">Select Your Blood Group</option>
                    <option value="A">A+</option>
                    <option value="B">B+</option>
                    <option value="AB">AB+</option>
                    <option value="O">O+</option>
                    <option value="A">A-</option>
                    <option value="B">B-</option>
                    <option value="AB">AB-</option>
                    <option value="O">O-</option>
                </select>
            </div>
            <div className='wrap py-10 flex-b flex-wrap items-start'>
                {allDonars && allDonars.length > 0 ? (
                    allDonars.map(dr => (
                        <Donar key={dr._id} donar={dr} />
                    ))
                ) : (
                    <h1 className='text-red-500 text-3xl text-center my-4'>There is no donor ! 😔</h1>
                )}
            </div>
        </div>

    )
}

export default Donars