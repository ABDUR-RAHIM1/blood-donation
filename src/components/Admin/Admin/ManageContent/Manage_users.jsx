import React from 'react'
import AdminDashboard from '../../Dashboard/AdminDashboard'
import { useContext } from 'react'
import { GlobalState } from '../../../../State/State'
import { useEffect } from 'react'
import Users from './Users'
import { useState } from 'react'

function Manage_users() {
    const { getUserAccount, usersAcc, getDonarAccount, donarsAcc , handleDeleteUserAccount } = useContext(GlobalState);
    const [user, setUser] = useState([])
    const [donarClick, setDonarClick] = useState(true)


    let handleDelete ;


    useEffect(() => {
        const fetchData = async () => {
            if (donarClick) {
                await getDonarAccount();
                setUser(donarsAcc);
            } else {
                await getUserAccount();
                setUser(usersAcc);
            }
        };
    
        fetchData();
    
    }, [donarClick, getUserAccount, usersAcc, getDonarAccount, donarsAcc]);
    
 
    return (
        <AdminDashboard>
            <div className="text-center">
                <button onClick={() => setDonarClick(!donarClick)} className='button bg-slate-300 text-black'>
                    {
                        donarClick ? "users" : "Donars"
                    }
                </button>
                <p className='text-white'>Click this button and change donars to users</p> 

            </div>
            <div className='flex-b flex-wrap my-10 '>
                {
                    user && user.map(u => (
                        <Users handleDelete={handleDeleteUserAccount} key={u._id} user={u} />
                    ))
                }
            </div>
        </AdminDashboard>
    )
}

export default Manage_users