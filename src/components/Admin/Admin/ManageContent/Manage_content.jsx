import React from 'react'
import AdminDashboard from '../../Dashboard/AdminDashboard'
import Add_logo from './Add_logo'
import Change_colors from './Change_colors'

function Manage_content() {
    return (
        <AdminDashboard>
            
            <div>
                <Add_logo/>
                <Change_colors/>
            </div>

            
        </AdminDashboard>
    )
}

export default Manage_content