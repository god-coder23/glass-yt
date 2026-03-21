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
  const [activeStatePage, setActiveStatePage] = React.useState("Home");
  const handleSearch = (items) =>{
    setVideos(items)
    setActiveStatePage("Search")
  }
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
      <InputBar onSearch={handleSearch} activeStatePage={activeStatePage} />
      
      <Sidebar activeStatePage={activeStatePage} setActiveStatePage={setActiveStatePage} />        
      {activeStatePage === "Home" && (
        <div className='absolute top-20 left-0 md:left-64 right-0 bottom-0 overflow-y-auto px-4 pb-20 md:pb-11 py-11'>
          <HomePage />
        </div>
      )}
    </div>
  )
}

export default App
