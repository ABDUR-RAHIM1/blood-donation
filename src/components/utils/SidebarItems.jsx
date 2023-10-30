import React, { useContext } from 'react'
import { GlobalState } from '../../State/State'

function SidebarItems(props) {
  const { btnText, setBtnText } = useContext(GlobalState)
  const handle = (e) => {
       setBtnText(e.target.innerText)
  }
  console.log(btnText)
  return ( 
      <button onClick={handle} className='sidebarBtn'>
        {props.item}
      </button> 
  )
}

export default SidebarItems