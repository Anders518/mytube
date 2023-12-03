import { useEffect } from 'react'
import { categories, videos } from '../../data/home'
import Pills from './pill'
import VideoCard from './videoCard'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryPill } from '../../reducers/categoryPillReducer'
import { RootState } from '../../store'

const MainPage = () => {
  const dispatch = useDispatch()
  const { categoryPill } = useSelector((state: RootState) => state.categoryPill)
  const visibleVideos =
    categoryPill === 'All'
      ? videos
      : videos.filter(video => video.videoUrl === categoryPill) //video not have a category property, use videoUrl instead

  useEffect(() => {
    dispatch(setCategoryPill(categories[0]))
  }, [dispatch])

  return (
    <div className="overflow-x-hidden px-8 pb-4">
      <Pills categories={categories} />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {visibleVideos.map(video => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </div>
  )
}

export default MainPage
