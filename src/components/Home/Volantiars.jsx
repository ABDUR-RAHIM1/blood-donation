import React from 'react'
import { VolunteersInfo } from '../../Data/Volanteers'
import VolaanteersCard from './VolaanteersCard'
import Heading from '../utils/Heading'
import { useContext } from 'react'
import { GlobalState } from '../../State/State'
import { useEffect } from 'react'
function Volantiars() {
    const { handleGetVolunteer, volunteer } = useContext(GlobalState);


    const volunteers = volunteer.filter(vl => vl.title === "co-founder" || vl.title === "founder");

    useEffect(() => {
        handleGetVolunteer()
    }, [])
    return (
        <div>
            <div className="text-lg my-10">
                <Heading text="স্বেচ্ছাসেবকগণ" />
                <h1 className='text-lg mt-10 font-bold text-center'>স্বেচ্ছাসেবকগণ  যারা তাদের সময় এবং প্রতিভা আমাদের মিশন পূরণ করতে সাহায্য করে.</h1>

                {/*  voluteers card */}
                <div className='wrap  mt-4 flex-b flex-wrap'>
                    {
                        volunteers && volunteers.slice(0, 3).map(vt => (
                            <VolaanteersCard
                                key={vt._id}
                                vt={vt}
                            />
                        ))
                    }
                </div>
                {/*  voluteers card */}
            </div>


        </div>
    )
}

export default Volantiars