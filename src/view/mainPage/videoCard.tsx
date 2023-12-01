import { Link } from 'react-router-dom'
import { VideoType } from '../../data/home'
import { convertDate, convertNumber } from '../../utils/convert'

const VideoCard = (props: VideoType) => {
  if (props === undefined) {
    return null
  }
  return (
    <div className="relative grid gap-2 text-slate-400">
      <Link to={`/video/${props.id}`} className="absolute inset-0 -z-10"></Link>
      <img
        className="rounded-lg "
        src={props.thumbnailUrl}
        alt={`thumbnail of ${props.title}`}
      />
      <div className="flex flex-shrink-0 gap-2 text-sm">
        <Link to={`/channel/${props.channel.id}`} className="">
          <img
            src={props.channel.profileUrl}
            alt={`profile image of ${props.channel.name}`}
            className="h-12 w-12 rounded-full border"></img>
        </Link>
        <div className="flex flex-col">
          <div className="font-bold text-black">{props.title}</div>
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
