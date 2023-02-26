import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

const SearchPage = () => {
  return (
    <div className='searchPage'>
    <div className='searchPage__filter'>
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
    </div>
    <hr/>
    <ChannelRow
        image="https://zipmex.com/static/d1af016df3c4adadee8d863e54e82331/Twitter-NFT-profile.jpg"
        channel="code Tech"
        verified
        subs="659k"
        noOfVideos={382}
        description="You can find tech and programming videos here You can find tech and programming videos here"
    />
    <hr/>
    <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want a free online course from youtube"
        timestamp="59 second ago"
        channel="Code Tech"
        title="Build a Youtube clone today"
        image="https://static-cse.canva.com/blob/1011729/1600w-K9NTgBT1uG8.jpg"
    />
    <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want a free online course from youtube"
        timestamp="59 second ago"
        channel="Code Tech"
        title="Build a Youtube clone today"
        image="https://static-cse.canva.com/blob/1011729/1600w-K9NTgBT1uG8.jpg"
    />
    <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want a free online course from youtube"
        timestamp="59 second ago"
        channel="Code Tech"
        title="Build a Youtube clone today"
        image="https://static-cse.canva.com/blob/1011729/1600w-K9NTgBT1uG8.jpg"
    />
    </div>
  )
}

export default SearchPage