import React, { useContext, useEffect } from 'react'
import Heading from '../utils/Heading'
import { GlobalState } from '../../State/State'
import UserEvent from '../../Profiles/UserEvent'
import { useState } from 'react'
import Banner from '../utils/Banner'

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
    <>
      <Banner path={"Recipients Lists"} />

      <div className='py-10 md:py-20 bg-gray-200'>
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
        <div className="wrap py-10  flex justify-center flex-wrap gap-10">
          {
            usersAllResgister && usersAllResgister.length > 0 ? (usersAllResgister.map(user => (
              <UserEvent userEvent={user} />
            ))) : <h1 className='text-red-500 text-3xl text-center my-4'>There is no Request ! 😔</h1>
          }



        </div>
      </div>

    </>
  )
}

export default Users