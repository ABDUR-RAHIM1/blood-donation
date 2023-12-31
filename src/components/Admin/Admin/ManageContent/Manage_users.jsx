import React from 'react'
import AdminDashboard from '../../Dashboard/AdminDashboard'
import { useContext } from 'react'
import { GlobalState } from '../../../../State/State'
import { useEffect } from 'react'
import Users from './Users'
import { useState } from 'react'
import Heading from '../../../utils/Heading'

function Manage_users() {
    const { getUserAccount, usersAcc } = useContext(GlobalState);

    useEffect(() => {
        getUserAccount();

    }, [getUserAccount, usersAcc]);


    return (
        <AdminDashboard>
            <Heading text="manage users" />
            <div className='flex-b flex-wrap my-10 '>
                {
                    usersAcc && usersAcc.map(u => (
                        <Users  key={u._id} user={u} />
                    ))
                }
            </div>
        </AdminDashboard>
    )
}

export default Manage_users