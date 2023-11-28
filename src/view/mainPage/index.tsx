import { videos } from '../../data/home'
import VideoCard from './videoCard'

const MainPage = () => {
  return (
    <div className="flex-grow-1 grid grid-cols-[auto,1fr] overflow-auto">
      <div>Sidebar</div>
      <div className="overflow-x-hidden px-8 pb-4">
        <div className="sticky top-0 z-10 bg-white pb-4">pill</div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
          {videos.map(video => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainPage
