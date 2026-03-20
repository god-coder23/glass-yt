import React, { useState } from 'react'
import { AudioLines, Search } from 'lucide-react';
import VideoCard from '../VideoCard';
import HomePageVideoCard from './HomePageVideoCard';
const InputBar = ({onSearch}) => {
    const API_KEY = import.meta.env.VITE_YT_API_KEY
    const [searchValue, setsearchValue] = React.useState("");
    const [videoTitle, setVideoTitle] = React.useState("");
    const [searchResult, setSearchResult] = React.useState([]);
    const [videoDesc, setVideoDesc] = React.useState("");
    const [channelTitle, setChannelTitle] = React.useState("");
    const fetchAPI = async () => {
        const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchValue}&type=video&maxResults=50&key=${API_KEY}`)
        const data = await res.json()
        setSearchResult(data.items)
        onSearch(data.items)
        console.log(data.items)
    }
  return (
    <div className='flex flex-col'>
        <div className='text-white w-150 h-0 p-6 mt-1 ml-[30%] flex justify-center items-center z-20 flex-row bg-gradient-to-b from-white/40 to-white/1 ring-1 ring-white/20 backdrop-blur-md rounded-4xl'>
      <input onChange={(e)=>setsearchValue(e.target.value)} type="text" className='outline-none w-150 flex justify-center items-center p-5 ' placeholder='Search on yt' />
      <div className='m-3 bg-gradient-to-b from-white/10 to-blue-800/20 backdrop-blur-md rounded-2xl  w-10 flex justify-center items-center'>
      <Search onClick={fetchAPI} size={30} />
      </div>
      <div className='m-3  bg-gradient-to-b from-white/10 to-blue-800/20 backdrop-blur-md rounded-2xl w-10 flex justify-center items-center'>
      <AudioLines size={30} />
      </div>
      {console.log(searchValue)}

      
    </div>
      {/*video card ja rha hai */}
      
    <div className='fixed top-30 left-80 right-0 bottom-0 overflow-y-auto '>
        <div className='grid gap-x-4 gap-y-6 px-6 py-4 '>
            {searchResult.map((item)=>(
        <div onClick={()=>window.open(`https://www.youtube.com/watch?v=${item.id.videoId}`)} className='cursor-pointer' key={item.id.videoId}>
            <VideoCard title={item.snippet.title} thumbnail={item.snippet.thumbnails.high.url} desc={item.snippet.description} channelTitle={item.snippet.channelTitle}/>

        </div>
      ))}
        </div>
      </div>
    </div>
  )
}

export default InputBar
