import React from 'react'
import Sidebar from './Profile/SIdebar'

export default function ProifleLayout({ children }) {


    return (

        <div className='flex w-full h-screen'>

            <aside className='w-[300px] h-screen px-4 py-10 overflow-scroll bg-gray-100 text-gray-900'>
                <Sidebar />

            </aside>
            <main className='flex-1 bg-gray-200 h-screen px-5 py-10 overflow-scroll scrollbar-hide '>
                {children}
            </main>
        </div>

    )
}
