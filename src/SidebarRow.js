import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import './SidebarRow.css'

const SidebarRow = ({title, icon}) => {
  return (
    <div className='sidebarRow'>
    <HomeIcon/>
    <h2>{title}</h2>
    </div>
  )
}

export default SidebarRow