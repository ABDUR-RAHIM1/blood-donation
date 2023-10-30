import React from 'react'
import SidebarItems from '../../utils/SidebarItems'

function Sidebar() {
  const items = [
      'home','add blog','get blog','add volunteer ','manage volunteer', 'get Request', 'add Slider', 'add logo'
  ]
  return (
    <div className='h-full scroll-none overflow-y-auto'>
         {
          items.map((item , index) => <SidebarItems key={index} item={item} />)
         }

    {/* <SidebarItems item='home' />
    <SidebarItems item='add blog' />
    <SidebarItems item='get blog' />
    <SidebarItems item='add volunteer' /> */}

         <div style={{ height: '10000px' }}></div>
    </div>
  )
}

export default Sidebar