import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';

const Header = () => {
  return (
    <div className='header'>
    <div className="header__left">

    <MenuIcon/>
    <img
    className='header__logo' 
    src='https://www.nicepng.com/png/detail/940-9401665_television-show-icons-youtube-subscribe-computer-video-logo.png' alt=''/>
    </div>

    <div className="header__input">

    <input placeholder='Search' type="text"/>
    <SearchIcon className='header__inputButton'/>
    </div>

    <div className="header__icons">

    <VideoCallIcon  className='header__icon'/>
    <AppsIcon  className='header__icon'/>
    <NotificationsIcon  className='header__icon'/>
    <Avatar
    alt='avatar icon'
    src="https://cdn3d.iconscout.com/3d/premium/thumb/change-avatar-in-metaverse-5214775-4357098.png"
     />
    </div>

    </div>
  )
}

export default Header