import React from 'react'
import { AudioLines, Search } from 'lucide-react';
import VideoCard from '../VideoCard';

const InputBar = ({onSearch, activeStatePage,account}) => {
    const API_KEY = import.meta.env.VITE_YT_API_KEY
    const [searchValue, setSearchValue] = React.useState("");
    const [searchResult, setSearchResult] = React.useState([]);
    const [activeVideoId, setActiveVideoId] = React.useState(null);
    const [suggestions, setSuggestions] = React.useState([]);
    const [showSuggestions, setShowSuggestions] = React.useState(false);
    const [isRecording, setisRecording] = React.useState(false);
    const handleVoiceSearch = ()=>{
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.start()
        setisRecording(true)
        recognition.onresult = (e) => {
            const transcript = e.results[0][0].transcript
            setSearchValue(transcript)
            fetchAPI(transcript)
        }
        recognition.onend = () => setisRecording(false)
    }
    const fetchAPI = async (query) => {
    const q = query || searchValue
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&type=video&maxResults=50&key=${API_KEY}`)
    const data = await res.json()
    setSearchResult(data.items)
    onSearch(data.items)
    }

    const fetchSuggestion = async (query) => {
        try {
            const res = await fetch(`https://corsproxy.io/?https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=${encodeURIComponent(query)}&callback=?`)
            const text = await res.text()
            const json = JSON.parse(text.replace(/^window\.google\.ac\.h\(|\)$/g, ''))
            const items = json[1].map((item) => item[0])
            setSuggestions(items.slice(0, 6))
        } catch (err) {
            setSuggestions([])
        }
    }
    const handleInputChange = (e) =>{
        const val = e.target.value
        console.log(val)
        setSearchValue(val)
        setSuggestions([])
        setShowSuggestions(true)
        fetchSuggestion(val)
    }


  return (
    <div className='flex flex-col relative'>
        {/*input search hai */}
        <div className='text-white w-full sm:w-[30%] md:w-[70%] lg:w-[65%] h-0 p-6 mt-5 md:ml-[30%] flex justify-center items-center z-20 flex-row bg-gradient-to-b from-white/40 to-white/1 ring-1 ring-white/20 backdrop-blur-md rounded-4xl'>
            <input
                value={searchValue}
                onChange={handleInputChange}
                onKeyDown={(e) => e.key === 'Enter' && fetchAPI()}
                type="text"
                className='outline-none bg-transparent flex-1 text-white placeholder-white/60 px-4'
                placeholder='Search on YouTube'
            />
            <div className='m-3 bg-gradient-to-b from-white/10 to-blue-800/20 backdrop-blur-md rounded-2xl w-10 flex justify-center items-center'>
                <Search onClick={fetchAPI} size={30} />
            </div>
            <div onClick={handleVoiceSearch} className={`m-3 backdrop-blur-md rounded-2xl w-10 flex justify-center items-center cursor-pointer transition-all
        ${isRecording 
            ? 'bg-red-500/80 animate-pulse' 
            : 'bg-gradient-to-b from-white/10 to-blue-800/20'
        }`}>
                <AudioLines size={30} />
            </div>
            {account && (
                <img src={account.photoURL} className='h-9 w-9 ml-2 flex-shrink-0 rounded-full' referrerPolicy='no-referrer' alt="" />

            )}
        </div> 
        {/*suggestion hai jo input ke niche dhikega */}
        {showSuggestions && suggestions.length > 0 && (
           <div className='absolute z-20 flex flex-col items-center backdrop-blur-xl shadow-2xl border border-white/5 justify-center bg-black/90  rounded-3xl md:ml-[30%] mt-2 w-full sm:w-[30%] top-full mt-2 md:w-[70%] lg:w-[65%]'>
            {suggestions.map((s,i)=>(
                <div
                key={i}
                onMouseDown={() => {
                    setSearchValue(s)
                    setShowSuggestions(false)
                    fetchAPI(s)  
                }}

                 className='h-10 flex justify-start hover:cursor-pointer items-center w-full pl-10'>
                    <div className='flex flex-row gap-10'>
                        <Search color='white' />
                        <h1 className='text-white relative'>{s}</h1>
                    </div>
                </div>
            ))}
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