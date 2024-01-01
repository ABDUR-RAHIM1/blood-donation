import React, { useContext } from 'react'
import { GlobalState } from '../../State/State'
import { Link } from 'react-router-dom'

function SidebarItems(props) {
 const {item , link} = props.item;

  return (
    <Link to={link}>
      <button className='sidebarBtn'>
        {item}
      </button>
    </Link>
  )
}

export default SidebarItems