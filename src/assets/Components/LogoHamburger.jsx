import React from 'react'
import {Menu} from 'lucide-react'
const LogoHamburger = () => {
  return (
    <div>
      <div className='absolute flex flex-row gap-4 top-7 left-7 z-10 text-white cursor-pointer'>
        <Menu size={40} />
        <div className="flex items-center gap-2">
      
        {/* Red Play Button */}
        <div className="bg-red-600 w-11 h-8 rounded-md flex items-center justify-center">
          <div className="w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
        </div>

        {/* Text */}
        <h1 className="text-white text-4xl font-bold tracking-tight">
          YouTube
        </h1>

      </div>
      </div>
    </div>
  )
}

export default LogoHamburger
