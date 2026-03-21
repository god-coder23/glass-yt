import React from 'react'
import {House, Dumbbell, SquareLibrary, ListVideo, Clock, PlaySquare, ThumbsUp, TrendingUp, Music, Film, Gamepad2 } from 'lucide-react'

const Sidebar = ({activeStatePage,setActiveStatePage,handleLogOut}) => {

    const sidebarSection = [
        [
        { label: 'Home', icon: <House size={20} /> },
        { label: 'Shorts', icon: <Dumbbell size={20} /> },
        { label: 'Subscription', icon: <SquareLibrary size={20} /> },
        ],
        [
          {label: "Library", icon:<ListVideo size={20}/>},
          {label: "History", icon:<Clock size={20}/>},
          {label: "Your Videos", icon:<PlaySquare size={20}/>},
          {label: "Watch Later", icon:<Clock size={20}/>},
          {label: "Liked Videos", icon:<ThumbsUp size={20}/>},
        ],
        [
          {label:"Trending" , icon:<TrendingUp size={20} />},
          {label:"Music" , icon:<Music size={20} />},
          {label:"Film" , icon:<Film size={20} />},
          {label:"Gaming" , icon:<Gamepad2 size={20} />},
        ]
      ]

      const [active, setActive] = React.useState('Home');

  return (
    <>
      {/* Desktop Sidebar */}
      <div className='hidden md:block w-62 rounded-3xl h-full ml-6 mt-10 absolute justify-center bg-black/40 border border-white/30 backdrop-blur-sm'>
        <div className='w-full px-3 flex flex-col gap-4 mt-3'>
          {sidebarSection.map((lstNum, idx) => (
            <div key={idx}>
              {lstNum.map((item) => (
                <div
                  key={item.label}
                  onClick={() => setActiveStatePage(item.label)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-full mt-1 cursor-pointer transition-all text-white
                    ${activeStatePage === item.label
                      ? 'bg-gradient-to-b from-white/30 to-white/5 ring-1 ring-white/20'
                      : 'text-white/70 hover:border hover:border-white/10 hover:bg-gray-400/20'
                    }`}
                >
                  {item.icon}
                  <span className='text-md font-medium'>{item.label}</span>
                </div>
              ))}
              <div className='border-t border-white/20 my-2'></div>
            </div>
          ))}
        <button
          onClick={handleLogOut}
          className='w-full -mt-2 text-white text-sm bg-white/10 px-3 py-2  rounded-full border border-white/20 hover:bg-white/20 transition'>
          Logout
        </button>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className='fixed bottom-0 left-0 right-0 z-50 flex md:hidden justify-around items-center bg-black/60 backdrop-blur-md border-t border-white/20 py-3 px-4'>
        {sidebarSection[0].map((item) => (
          <div
            key={item.label}
            onClick={() => setActiveStatePage(item.label)}
            className={`flex flex-col items-center gap-1 cursor-pointer
              ${activeStatePage === item.label ? 'text-white' : 'text-white/50'}`}
          >
            {item.icon}
            <span className='text-[10px]'>{item.label}</span>
          </div>
        ))}
     <button
          onClick={handleLogOut}
          className='w-30 -mt-1 text-white text-sm bg-white/10 px-3 py-2 rounded-full border border-white/20 hover:bg-white/20 transition'>
          Logout
        </button>
      </div>
    </>
  )
}

export default Sidebar