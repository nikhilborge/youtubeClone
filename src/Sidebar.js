import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const Sidebar = () => {
  return (
    <div className='sidebar'>
    {/* <h1>I am sidebar</h1> */}

    <SidebarRow icon={HomeIcon} title="Home"/>
    <SidebarRow icon={WhatshotIcon} title="Trending"/>
    <SidebarRow icon={HomeIcon} title="Subscription"/>
    </div>
  )
}

export default Sidebar