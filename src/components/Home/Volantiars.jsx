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
                <p className='text-lg mt-10 text-center'>স্বেচ্ছাসেবকগণ  যারা তাদের সময় এবং প্রতিভা আমাদের মিশন পূরণ করতে সাহায্য করে.</p>

                {/*  voluteers card */}
                <div className='wrap sm:w-2/4 sm:m-auto md:w-full mt-4 flex-b flex-wrap'>
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