import { Clapperboard, Home, Library, Repeat } from 'lucide-react'
import { RootState } from '../../store'
import { ElementType } from 'react'
import { Link } from 'react-router-dom'
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
export default SmallSidebar
