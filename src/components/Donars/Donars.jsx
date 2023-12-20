import React from 'react'
import { donars } from '../../Data/Donars'
import Donar from './Donar'
import { useEffect } from 'react'
import { useContext } from 'react'
import { GlobalState } from '../../State/State' 
import LoadingSpinner from '../utils/Spinner'

function Donars() {
    const { getAllDonarsItems, allDonars, isLoading } = useContext(GlobalState)
    useEffect(() => {
        getAllDonarsItems()
    }, [])

    if (isLoading) {
         return <LoadingSpinner/>
    }
    return (

        <>
            <h1 className="heading text-center mt-5 uppercase">Donar List</h1>
            <div className='wrap py-10 flex-b flex-wrap items-start'>
                {
                   allDonars && allDonars.map(dr => (
                        <Donar key={dr._id} donar={dr} />
                    ))
                }
            </div>


        </>
    )
}

export default Donars