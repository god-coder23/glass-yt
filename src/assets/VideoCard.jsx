import React from 'react'

const VideoCard = ({ title, thumbnail, desc, channelTitle }) => {
  return (
    <div className='flex flex-col md:flex-row cursor-pointer w-full mb-6 gap-3'>

      {/* Thumbnail */}
      <div className='relative w-full md:w-[390px] md:h-[220px] h-[200px] flex-shrink-0 rounded-xl overflow-hidden'>
        <img className='object-cover h-full w-full' src={thumbnail} alt="" />
      </div>

      <div className='flex gap-3 px-2 md:px-0'>
        <div className='flex-shrink-0 w-9 h-9 bg-gray-500 rounded-full'></div>

        {/* Text */}
        <div className='flex flex-col gap-1'>
          <p className='text-white text-sm font-medium leading-snug line-clamp-2'>{title}</p>
          <p className='text-gray-400 text-xs'>{channelTitle}</p>
          <p className='text-gray-400 text-xs line-clamp-2 hidden md:block'>{desc}</p>
        </div>
      </div>

    </div>
  )
}

export default VideoCard