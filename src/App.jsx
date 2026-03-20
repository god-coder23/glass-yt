import React, { useState } from 'react'
import bac from './assets/bac.jpg'
import LogoHamburger from './assets/Components/LogoHamburger'
import Sidebar from './assets/Components/Sidebar'
import InputBar from './assets/Components/InputBar'
import HomePage from './assets/Components/HomePage'
import VideoCard from './assets/VideoCard'

const App = () => {

  const [videos, setVideos] = React.useState([]);
  const [searchResult, setSearchResult] = React.useState([])
  
  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      
      {/* Background image */}
      <img 
        src={bac} 
        alt="background" 
        className='absolute inset-0 w-full h-full object-cover brightness-75 blur-md scale-110'
      />

      {/* Hamburger and yt logo* and inputbar*/}
      <div className='flex flex-row justify-center px-6 py-4 items-center'>
      <LogoHamburger />
      </div>
      <InputBar onSearch={setVideos} />
      
      <Sidebar />
      {videos.length==0 ? (
        <div className='absolute top-20 left-64 right-0 bottom-0 overflow-y-auto px-4 py-11'>
          <HomePage />
        </div>
      ): (
        <div className='hidden cursor-pointer' onClick={()=>window.open(`https://www.youtube.com/watch?v=${item.id.videoId}`)}>
          {videos.map((item)=>(
            <VideoCard
                key={item.id.videoId}
                title={item.snippet.title}
                thumbnail={item.snippet.thumbnails.high.url}
                desc={item.snippet.description}
                channelTitle={item.snippet.channelTitle}
                
              />
          ))}
        </div>
      )}
        
      {/* sidebar*/}
    </div>
  )
}

export default App
