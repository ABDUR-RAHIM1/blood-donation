import React from 'react'
import { VolunteersInfo } from '../../Data/Volanteers'
import VolaanteersCard from './VolaanteersCard'
function Volantiars() {
    return (
        <div>
                 <div className="text-lg my-10">
                <h3 className='text-lg font-bold text-center mb-3'>স্বেচ্ছাসেবকগণ</h3>
                <h1 className='text-2xl font-bold text-center'>স্বেচ্ছাসেবকগণ  যারা তাদের সময় এবং প্রতিভা আমাদের মিশন পূরণ করতে সাহায্য করে.</h1>

                {/*  voluteers card */}
                <div className='wrap  mt-4 flex-b flex-wrap'>
                    {
                        VolunteersInfo.map(vt => (
                             <VolaanteersCard
                              key={vt.id}
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