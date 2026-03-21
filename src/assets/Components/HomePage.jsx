import React from 'react'
import HomePageVideoCard from './HomePageVideoCard'
const HomePage = () => {
    const API_KEY = import.meta.env.VITE_YT_API_KEY
  const [trendingVideo, setTrendingVideo] = React.useState([])
  const [activeVideoId, setActiveVideoId] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    trendingVideos()
  }, [])

  const trendingVideos = async () => {
    if (!API_KEY) {
      setError("YouTube API key is missing. Set VITE_YT_API_KEY in your environment variables.")
      return
    }
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=trending&type=video&videoDuration=long&maxResults=50&key=${API_KEY}`
      )
      const data = await res.json()
      if (!res.ok) {
        setError(data.error?.message || `YouTube API error (${res.status})`)
        return
      }
      setTrendingVideo(data.items || [])
    } catch (err) {
      setError("Failed to fetch videos: " + err.message)
    }
  }

  return (
    <div className='relative overflow-y-auto text-white grid sm:grid-cols-1 md:grid-cols-2 justify-items-start sm:justify-items-center lg:grid-cols-3 gap-x-8 px-4'>
      {error && (
        <div className='col-span-full text-center py-10'>
          <p className='text-red-400 text-lg'>{error}</p>
        </div>
      )}
      {trendingVideo.map((item) => (
        <div key={item.id.videoId} onClick={()=>setActiveVideoId(
            activeVideoId === item.id.videoId ? null : item.id.videoId
        )} className='cursor-pointer '>
            {activeVideoId==item.id.videoId ? (
                 < iframe
                 className='relative z-20 rounded-2xl '
                width="100%"
                height="250" 
                src={`https://www.youtube.com/embed/${item.id.videoId}?autoplay=1&controls=1&fs=1`}
                title={item.snippet.title}
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  
                allowFullScreen={true}
                />
            ):(
                <HomePageVideoCard 
              key={item.id.videoId}
              title={item.snippet.title}
              thumbnail={item.snippet.thumbnails.high.url}
              channelTitle={item.snippet.channelTitle}
            />
            )}
            
        </div>
      ))}
    </div>
  )
}

export default HomePage