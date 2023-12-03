import { playlistType, subscriptionType } from '../../data/sidebar'
import { RootState } from '../../store'
import { ElementType, ReactNode, useState, Children, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TopbarFirstSection } from '../topbar'
import {
  ChevronUp,
  Clapperboard,
  Clock,
  Flame,
  Gamepad,
  History,
  Home,
  Library,
  ListVideo,
  Music,
  Radio,
  ShoppingBag,
  Video
} from 'lucide-react'

type LargeSidebarProps = {
  subscribe: subscriptionType[]
  playList: playlistType[]
  sidebarState: RootState['sidebar']['sidebarState']
}

const LargeSidebar = (props: LargeSidebarProps) => {
  const { subscribe, playList } = props

  return (
    <div
      className={`absolute top-0 w-52 flex-col divide-y-2 overflow-y-auto dark:bg-slate-900 lg:sticky ${
        props.sidebarState === 'largeOpen' ? 'lg:flex' : 'lg:hidden'
      } ${
        props.sidebarState === 'smallOpen'
          ? 'z-[999] flex max-h-screen bg-white'
          : 'hidden'
      }`}>
      <div className="sticky top-0 z-10 bg-white px-4 py-2 dark:bg-slate-900 lg:hidden">
        <TopbarFirstSection />
      </div>
      <div>
        <LargeSidebarItem Icon={Home} to="/" name="home" />
        <LargeSidebarItem
          Icon={Clapperboard}
          to="/subscribe"
          name="subscribe"
        />
      </div>
      <LargeSidebarSection expandNumber={5}>
        <LargeSidebarItem Icon={Library} to="/library" name="library" />
        <LargeSidebarItem Icon={History} to="/history" name="history" />
        <LargeSidebarItem Icon={Video} to="/your-video" name="your video" />
        <LargeSidebarItem Icon={Clock} to="/watch-later" name="watch later" />
        {playList.map(playlist => (
          <LargeSidebarItem
            key={playlist?.id}
            Icon={ListVideo}
            to={`/playlist/${playlist.id}`}
            name={playlist.name}
          />
        ))}
      </LargeSidebarSection>
      <LargeSidebarSection tilte="subscribe">
        {subscribe.map(subscription => (
          <LargeSidebarItem
            key={subscription.id}
            Icon={subscription.imgUrl}
            to={`/channel/${subscription.id}`}
            name={subscription.channelName}
          />
        ))}
      </LargeSidebarSection>
      <LargeSidebarSection tilte="explorer">
        <LargeSidebarItem Icon={Flame} to="/trend" name="trending" />
        <LargeSidebarItem Icon={ShoppingBag} to="/shopping" name="shopping" />
        <LargeSidebarItem Icon={Music} to="/music" name="music" />
        <LargeSidebarItem Icon={Radio} to="/live" name="live" />
        <LargeSidebarItem Icon={Gamepad} to="/game" name="game" />
      </LargeSidebarSection>
    </div>
  )
}

interface LargeSidebarItemProps {
  name: string
  Icon: ElementType | string
  to: string
}

const LargeSidebarItem = (props: LargeSidebarItemProps) => {
  return (
    <Link
      className="mx-1 flex items-center gap-4 rounded-lg px-4 py-3 hover:bg-gray-100 dark:hover:bg-slate-700"
      to={props.to}>
      {typeof props.Icon === 'string' ? (
        <img
          src={props.Icon}
          alt={props.name}
          className="h-6 w-6 rounded-full"
        />
      ) : (
        <props.Icon className="h-6 w-6" />
      )}
      <div className="overflow-hidden text-ellipsis whitespace-nowrap capitalize">
        {props.name}
      </div>
    </Link>
  )
}

interface LargeSidebarSectionProps {
  tilte?: string
  children: ReactNode
  expandNumber?: number
}

const LargeSidebarSection = ({
  children,
  tilte,
  expandNumber = Number.POSITIVE_INFINITY
}: LargeSidebarSectionProps) => {
  const [showMore, setShowMore] = useState(false)
  const [showExpand, setShowExpand] = useState(false)
  const childrenLength = Children.count(children)
  const childrenArray = Children.toArray(children)
  const childrenToShow = showMore
    ? childrenArray
    : childrenArray.slice(0, expandNumber)

  useEffect(() => {
    if (childrenLength > expandNumber) {
      setShowExpand(true)
    }
  }, [childrenLength, expandNumber])

  return (
    <div className="px-1 py-2">
      {tilte && (
        <div className="px-4 py-2 text-sm font-bold capitalize">{tilte}</div>
      )}
      {childrenToShow}
      {showExpand && (
        <button
          className="mx-1 flex items-center gap-4 rounded-lg px-4 py-3 capitalize hover:bg-gray-100 dark:hover:bg-slate-700"
          onClick={() => setShowMore(!showMore)}>
          <ChevronUp
            className={`h-6 w-6 ${
              showMore ? '' : 'rotate-180'
            } transition duration-300`}
          />
          <div className="overflow-hidden text-ellipsis whitespace-nowrap capitalize">
            {showMore ? 'show less' : 'show more'}
          </div>
        </button>
      )}
    </div>
  )
}

export default LargeSidebar
