import React from 'react'
import SidebarItems from '../../utils/SidebarItems'

function Sidebar() {
  
  const items = [
    { item: 'dashboard', link: '/admin' },
    { item: 'add blog', link: '/admin-add-blog' },
    { item: 'get blog', link: '/admin-get-blog' },
    { item: 'add volunteer', link: '/admin-add-volunteer' },
    { item: 'manage volunteer', link: '/admin-manage-volunteer' },
    { item: 'get request', link: '/admin-get-request' },
    { item: 'add slider', link: '/admin-add-slider' }, 
    { item: 'Manage Content', link: '/admin-manage-content' },
  ]
  return (
    <div className='h-full scroll-none overflow-y-auto'>
      {
        items.map((item, index) => <SidebarItems key={index} item={item} />)
      }
      <div style={{ height: '10000px' }}></div>
    </div>
  )
}

export default Sidebar