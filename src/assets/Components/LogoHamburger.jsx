import React from 'react'
import {Menu} from 'lucide-react'
const LogoHamburger = () => {
  return (
    <div>
      <div className='absolute flex flex-row gap-4 top-3 left-0 right-0 md:right-auto md:top-12  md:left-6 justify-center z-10 text-white cursor-pointer'>
        <Menu size={40} className="hidden md:block lg:block" />
        <div className="flex items-center gap-2">
      
        {/* Red Play Button */}
        <div className='flex gap-3'>
          <div className="bg-red-600 h-5 w-11 h-8 rounded-md flex items-center justify-center">
          <div className="w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
        </div>

        {/* Text */}
        <h1 className="text-white text-2xl md:text-4xl font-bold tracking-tight">
          YouTube
        </h1>
        </div>

      </div>
      </div>
    </div>
  )
}

export default LogoHamburger
