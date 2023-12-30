import React, { useContext, useEffect } from 'react'
import Heading from '../utils/Heading'
import { GlobalState } from '../../State/State'
import UserEvent from '../../Profiles/UserEvent'

function Users() {
  const { getUserAllRegister, usersAllResgister } = useContext(GlobalState)

  useEffect(() => {
    getUserAllRegister()
  }, [])

  return (
    <div className='my-10'>
      <Heading text="Users" />
      <div className="users flex-b flex-wrap wrap my-20">
        {
          usersAllResgister && usersAllResgister.map(user => (
            <UserEvent userEvent={user} />
          ))
        }
      </div>
    </div>
  )
}

export default Users