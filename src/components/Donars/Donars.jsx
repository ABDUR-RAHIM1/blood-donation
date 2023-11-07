import React from 'react'
import { donars } from '../../Data/Donars'
import Donar from './Donar'

function Donars() {

    return (
        
        <>
       <h1 className="heading text-center mt-5 uppercase">Donar List</h1>
        <div className='wrap py-10 flex-b flex-wrap items-start'>
            {
                donars.map(dr => (
                    <Donar key={dr.id} donar={dr}/>
                ))
            }
        </div>


        </>
    )
}

export default Donars