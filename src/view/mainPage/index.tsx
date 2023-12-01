import { categories, videos } from '../../data/home'
import Pills from './pill'
import VideoCard from './videoCard'

const MainPage = () => {
  return (
    <div className="flex flex-col overflow-x-hidden px-8 pb-4">
      <Pills categories={categories} />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {videos.map(video => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </div>
  )
}

export default MainPage
