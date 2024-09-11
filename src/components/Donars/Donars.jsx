import React from 'react'
import Donar from './Donar'
import { useEffect } from 'react'
import { useContext } from 'react'
import { GlobalState } from '../../State/State'
import LoadingSpinner from '../utils/Spinner'
import Heading from '../utils/Heading'
import { useState } from 'react'
import Banner from '../utils/Banner'

function Donars() {
    const { getAllDonarsItems, allDonars, setIsLoading, isLoading } = useContext(GlobalState)


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

        <>
            <Banner path={"Donar Lists"} />

            <div className='py-10 md:py-20 bg-gray-200 overflow-hidden '>

                <div className="wrap w-full md:w-[70%] m-auto">
                    <select required onChange={handleChange} name="bloodGroup" className='w-full py-4 px-5 border rounded-sm'>
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
                <div className='py-10  flex justify-center flex-wrap gap-6'>
                    {allDonars && allDonars.length > 0 ? (
                        allDonars.map(dr => (
                            <Donar key={dr._id} donar={dr} />
                        ))
                    ) : (
                        <h1 className='text-red-500 text-3xl text-center my-4'>There is no donor ! 😔</h1>
                    )}
                </div>
            </div>
        </>
    )
}

export default Donars