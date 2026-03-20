import React from 'react'

const VideoCard = ({ title, thumbnail, desc,channelTitle }) => {
  return (
    <div className='flex flex-row cursor-pointer group w-full h-[220px] gap-3'>

      <div className='relative flex-shrink-0 w-[390px] h-full rounded-xl overflow-hidden'>
        <img className='object-cover h-full w-full' src={thumbnail} alt="" />
      </div>

      <div className='flex-1 pt-2'>
        <p className='text-white text-xl font-medium leading-snug line-clamp-2'>
          {title}
        </p>
        <div className='text-gray-400 mt-10 flex flex-col'>
            <div className='flex flex-row'>
                <div className='h-6 w-6 bg-gray-500 rounded-full'></div>
                <div className='flex items-center ml-2'>
                    {channelTitle}
                </div>
            </div>
            <div className='line-clamp-2'>
                {desc}
            </div>
        </div>
      </div>

    </div>
  )
}

export default VideoCard