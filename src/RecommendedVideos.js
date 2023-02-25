import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'

const RecommendedVideos = () => {
  return (
    <div className='recommendedvideos'>
    <h2>Recommended</h2>
    <div className='recommendedvideos__videos'>
        <VideoCard 
          title="Become a web Developer in : 10 min"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage=""
          channel="Chanel tech"
          image="https://static-cse.canva.com/blob/1011728/1600w-wK95f3XNRaM.jpg"
        />
        <VideoCard 
          title="Become a web Developer in : 10 min"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage=""
          channel="Chanel tech"
          image="https://static-cse.canva.com/blob/1011725/1600w-CrM91Tjbmbc.jpg"
        />
        <VideoCard 
          title="Become a web Developer in : 10 min"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage=""
          channel="Chanel tech"
          image="https://i.easil.com/wp-content/uploads/20210901140229/Block-Heading-Falling-Cash-Template-youtube-thumbnail.jpg"
        />
        <VideoCard 
          title="Become a web Developer in : 10 min"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage=""
          channel="Chanel tech"
          image="https://static-cse.canva.com/blob/1011728/1600w-wK95f3XNRaM.jpg"
        />
        <VideoCard 
          title="Become a web Developer in : 10 min"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage=""
          channel="Chanel tech"
          image="https://static-cse.canva.com/blob/1011728/1600w-wK95f3XNRaM.jpg"
        />
    </div>
    </div>
  )
}

export default RecommendedVideos