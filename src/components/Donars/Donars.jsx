import React from 'react'
import Donar from './Donar'
import LoadingSpinner from '../utils/Spinner'
import { useState } from 'react'
import Banner from '../utils/Banner'
import useFetch from '../../hooks/usefetch'
import ErrorMessage from '../utils/ErrorMessage'

function Donars() {

    const [search, setSearch] = useState("");
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const API = `/donar-register/donars/?search=${search}`;
    const { isLoading, error, data } = useFetch(API);

    console.log(data)

    if (isLoading) {
        return <LoadingSpinner />
    }
    return (

        <>
            <Banner path={"Donar Lists"} />


            {

                error ? (
                    <ErrorMessage message={error} />
                ) :
                    (
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
                                {data && data.length > 0 ? (
                                    data.map(dr => (
                                        <Donar key={dr._id} donar={dr} />
                                    ))
                                ) : (
                                    <h1 className='text-red-500 text-3xl text-center my-4'>There is no donor ! 😔</h1>
                                )}
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default Donars