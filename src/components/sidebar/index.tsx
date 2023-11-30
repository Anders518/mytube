import { Link } from 'react-router-dom'
import { Clapperboard, Home, Library, Repeat } from 'lucide-react'
import { ElementType } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { TopbarFirstSection } from '../topbar'
import { closeSidebar } from '../../reducers/sidebarReducer'
import { playlistType, subscriptionType } from '../../data/sidebar'

interface Props {
  subscribe: subscriptionType
  playList: playlistType
}

const Sidebar = ({ subscribe, playList }: Props) => {
  const dispatch = useDispatch()

  const { sidebarState } = useSelector((state: RootState) => state.sidebar)

  const close = () => {
    dispatch(closeSidebar())
  }
  return (
    <div>
      <SmallSidebar sidebarState={sidebarState} />
      {sidebarState === 'smallOpen' && (
        <div
          className="fixed inset-0 z-[999] bg-neutral-400 opacity-50 lg:hidden"
          onClick={close}
        />
      )}
      <LargeSidebar sidebarState={sidebarState}  />
    </div>
  )
}

interface SidebarProps {
  sidebarState: RootState['sidebar']['sidebarState']
}

const SmallSidebar = (props: SidebarProps) => {
  return (
    <div
      className={`mx-1 flex flex-col overflow-y-auto ${
        props.sidebarState === 'largeOpen' ? 'flex lg:hidden' : 'lg:flex'
      }`}>
      <SidebarItem Icon={Home} to="/" name="home" />
      <SidebarItem Icon={Repeat} to="/shorts" name="shorts" />
      <SidebarItem Icon={Clapperboard} to="/subscribe" name="subscribe" />
      <SidebarItem Icon={Library} to="/library" name="library" />
    </div>
  )
}

type LargeSidebarProps = SidebarProps & {
  sidebarState: RootState['sidebar']['sidebarState']
}

const LargeSidebar = (props: LargeSidebarProps) => {
  return (
    <div
      className={`absolute top-0 w-56 flex-col divide-y-2 overflow-y-auto bg-white lg:sticky ${
        props.sidebarState === 'largeOpen' ? 'lg:flex' : 'lg:hidden'
      } ${
        props.sidebarState === 'smallOpen'
          ? 'z-[999] flex max-h-screen bg-white'
          : 'hidden'
      }`}>
      <div className="sticky top-0 pl-4  lg:hidden">
        <TopbarFirstSection />
      </div>
      <div>
        <LargeSidebarItem Icon={Home} to="/" name="home" />
        <LargeSidebarItem Icon={Home} to="/" name="home" />
      </div>
    </div>
  )
}

interface SidebarItemProps {
  name: string
  Icon: ElementType
  to: string
}

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <Link
      className="flex flex-col items-center gap-1 rounded-lg px-1 py-4 hover:bg-gray-100"
      to={props.to}>
      <props.Icon className="h-6 w-6" />
      <div className="capitalize">{props.name}</div>
    </Link>
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
      className="flex w-full items-center gap-4 rounded-lg p-3 hover:bg-gray-100"
      to={props.to}>
      {typeof props.Icon === 'string' ? (
        <img src={props.Icon} alt={props.name} className="h-6 w-6" />
      ) : (
        <props.Icon className="h-6 w-6" />
      )}
      <div className="overflow-hidden whitespace-nowrap capitalize">
        {props.name}
      </div>
    </Link>
  )
}

export default Sidebar
