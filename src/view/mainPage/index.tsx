import { categories, videos } from '../../data/home'
import Pills from './pill'
import VideoCard from './videoCard'

const MainPage = () => {
  return (
    <div className="overflow-x-hidden px-8 pb-4">
      <div className="sticky top-0 z-10 bg-white pb-4">
        <Pills categories={categories} />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {videos.map(video => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </div>
  )
}

export default MainPage
