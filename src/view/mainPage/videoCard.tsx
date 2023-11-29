import { Link } from 'react-router-dom'
import { VideoType } from '../../data/home'
import { convertDate, convertNumber } from '../../utils/convert'

const VideoCard = (props: VideoType) => {
  if (props === undefined) {
    return null
  }
  return (
    <Link to={`/video/${props.id}`} className="grid gap-2 text-slate-400">
      <img
        className="rounded-lg "
        src={props.thumbnailUrl}
        alt={`thumbnail of ${props.title}`}
      />
      <div className="flex gap-2  text-sm ">
        <Link to={`/video/${props.id}`} className="flex-shrink-0">
          <img
            src={props.channel.profileUrl}
            alt={`profile image of ${props.channel.name}`}
            className="h-12 w-12 rounded-full border"></img>
        </Link>
        <div className="flex flex-col">
          <Link className="font-bold text-black" to={`/video/${props.id}`}>
            {props.title}
          </Link>
          <Link to={`/channel/${props.channel.id}`}>{props.channel.name}</Link>
          <div>
            {`${convertNumber(props.views)} ${convertDate(props.postedAt)}`}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard
