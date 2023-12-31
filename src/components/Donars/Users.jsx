import React, { useContext, useEffect } from 'react'
import Heading from '../utils/Heading'
import { GlobalState } from '../../State/State'
import UserEvent from '../../Profiles/UserEvent'
import { useState } from 'react'

function Users() {
  const { getUserAllRegister, usersAllResgister } = useContext(GlobalState)
  const [search, setSearch] = useState("")
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    getUserAllRegister(search)
  }, [search])

  return (
    <div className='my-10'>
      <Heading text="Users" />
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
      <div className="users flex-b flex-wrap wrap my-20">
        {
          usersAllResgister && usersAllResgister.length > 0 ? ( usersAllResgister.map(user => (
            <UserEvent userEvent={user} />
          )) ) :   <h1 className='text-red-500 text-3xl text-center my-4'>There is no Request ! 😔</h1>
        }
      
        
       
      </div>
    </div>
  )
}

export default Users