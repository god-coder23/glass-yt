import React from 'react'

const HomePageVideoCard = ({ title, thumbnail, desc, channelTitle }) => {
  return (
    <div className=''>
        <div className='relative aspect-video rounded-xl p-2'>
        <img className='object-cover h-full w-full flex-shrink-0 rounded-2xl' src={thumbnail} alt="" />
        <div className='flex gap-2 mt-2'>
            <div className='flex-shrink-0 w-8 h-8 rounded-full bg-gray-500 '></div>
            <div className='flex flex-col gap-1'>
                <p className='text-white text-sm line-clamp-2 font-semibold'>{title}</p>
                <p className='text-gray-400 text-xs'>{channelTitle}</p>
            </div>
            {desc}
        </div>

    </div>
    </div>
  )
}

export default HomePageVideoCard
