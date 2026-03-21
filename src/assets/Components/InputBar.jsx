import React from 'react'
import { AudioLines, Search } from 'lucide-react';
import VideoCard from '../VideoCard';

const InputBar = ({onSearch, activeStatePage,account}) => {
    const API_KEY = import.meta.env.VITE_YT_API_KEY
    const [searchValue, setSearchValue] = React.useState("");
    const [searchResult, setSearchResult] = React.useState([]);
    const [activeVideoId, setActiveVideoId] = React.useState(null);
    const [error, setError] = React.useState(null);

    const fetchAPI = async () => {
        if (!API_KEY) {
            setError("YouTube API key is missing. Set VITE_YT_API_KEY in your environment variables.")
            return
        }
        try {
            const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchValue}&type=video&maxResults=50&key=${API_KEY}`)
            const data = await res.json()
            if (!res.ok) {
                setError(data.error?.message || `YouTube API error (${res.status})`)
                return
            }
            setError(null)
            setSearchResult(data.items || [])
            onSearch(data.items || [])
        } catch (err) {
            setError("Failed to fetch videos: " + err.message)
        }
    }

  return (
    <div className='flex flex-col'>
        <div className='text-white w-full sm:w-[30%] md:w-[70%] lg:w-[65%] h-0 p-6 mt-5 md:ml-[30%] flex justify-center items-center z-20 flex-row bg-gradient-to-b from-white/40 to-white/1 ring-1 ring-white/20 backdrop-blur-md rounded-4xl'>
            <input
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && fetchAPI()}
                type="text"
                className='outline-none bg-transparent flex-1 text-white placeholder-white/60 px-4'
                placeholder='Search on YouTube'
            />
            <div className='m-3 bg-gradient-to-b from-white/10 to-blue-800/20 backdrop-blur-md rounded-2xl w-10 flex justify-center items-center'>
                <Search onClick={fetchAPI} size={30} />
            </div>
            <div className='m-3 bg-gradient-to-b from-white/10 to-blue-800/20 backdrop-blur-md rounded-2xl w-10 flex justify-center items-center'>
                <AudioLines size={30} />
            </div>
            {account && (
                <img src={account.photoURL} className='h-9 w-9 ml-2 flex-shrink-0 rounded-full' referrerPolicy='no-referrer' alt="" />
            )}
        </div>

        {error && (
            <div className='text-red-400 text-center py-4 md:ml-[30%]'>
                <p>{error}</p>
            </div>
        )}

        {activeStatePage === "Search" && searchResult.length > 0 && (
            <div className='fixed top-30 md:left-[30%] lg:left-[20%] bottom-0 overflow-y-auto'>
                <div className='grid gap-x-4 gap-y-6 px-6 py-4'>
                    {searchResult.map((item) => (
                        <div className='cursor-pointer' key={item.id.videoId} onClick={() =>
                            setActiveVideoId(activeVideoId === item.id.videoId ? null : item.id.videoId)
                        }>
                            {activeVideoId === item.id.videoId ? (
                                <iframe
                                    width="100%"
                                    height="500"
                                    src={`https://www.youtube.com/embed/${item.id.videoId}?autoplay=1&controls=1&fs=1`}
                                    title={item.snippet.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                                    allowFullScreen={true}
                                />
                            ) : (
                                <VideoCard
                                    title={item.snippet.title}
                                    thumbnail={item.snippet.thumbnails.high.url}
                                    desc={item.snippet.description}
                                    channelTitle={item.snippet.channelTitle}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
  )
}

export default InputBar