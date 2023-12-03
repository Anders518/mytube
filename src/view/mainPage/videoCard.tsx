import { Link } from 'react-router-dom'
import { VideoType } from '../../data/home'
import { convertDate, convertNumber } from '../../utils/convert'
import { useEffect, useRef, useState } from 'react'

const VideoCard = (props: VideoType) => {
  const [videoPlaying, setVideoPlaying] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current === null) return
    if (videoPlaying) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }, [videoPlaying])
  if (props === undefined) {
    return null
  }
  return (
    <div
      className="relative grid gap-2 text-neutral-400 dark:text-neutral-200"
      onMouseEnter={() => setVideoPlaying(true)}
      onMouseLeave={() => setVideoPlaying(false)}>
      <Link to={`/video/${props.id}`} className="relative">
        <img
          src={props.thumbnailUrl}
          alt={props.title}
          className="rounded-lg transition-[border-radius] duration-300 hover:rounded-none"
        />
        <div className="absolute bottom-0 right-0 rounded-lg bg-black opacity-70 dark:bg-neutral-300">
          {`${props.duration}`}
        </div>
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity delay-100 duration-300 hover:opacity-100"
          ref={videoRef}
          src={props.videoUrl}
          playsInline
          muted
        />
      </Link>
      <div className="flex flex-shrink-0 gap-2 text-sm">
        <Link to={`/channel/${props.channel.id}`} className="">
          <img
            src={props.channel.profileUrl}
            alt={`profile image of ${props.channel.name}`}
            className="h-12 w-12 rounded-full border"></img>
        </Link>
        <div className="flex flex-col">
          <div className="text-lg font-bold text-black dark:text-white">
            {props.title}
          </div>
          <Link to={`/channel/${props.channel.id}`}>{props.channel.name}</Link>
          <div>
            {`${convertNumber(props.views)} ${convertDate(props.postedAt)}`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
