import { Link } from 'react-router-dom'
import {
  AccountIcon,
  MenuIcon,
  NotificationsIcon,
  SearchIcon,
  UploadIcon,
  VoiceIcon
} from './icon'
import Button from './button'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../../reducers/sidebarReducer'

const Topbar = () => {
  return (
    <div className="mx-4 flex justify-between gap-10 py-2 lg:gap-20">
      <TopbarFirstSection />
      <form className="hidden flex-grow justify-center gap-4 md:flex">
        <div className="flex max-w-4xl flex-grow">
          <input
            type="text"
            placeholder="Search"
            className="w-full justify-center rounded-l-full rounded-r-none border border-r-0  border-slate-300 p-2 shadow-inner outline-none"
          />
          <button
            type="submit"
            className="flex-shrink-0 rounded-r-full border px-4 py-2 ">
            <SearchIcon className="h-6 w-6" />
          </button>
        </div>
        <Button variant="bg-slate-300">
          <VoiceIcon className="h-6 w-6" />
        </Button>
      </form>
      <div className="justify-self-end">
        <Button>
          <UploadIcon className="h-6 w-6" />
        </Button>
        <Button>
          <NotificationsIcon className="h-6 w-6" />
        </Button>
        <Button>
          <AccountIcon className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

export const TopbarFirstSection = () => {
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(toggleSidebar())
  }
  return (
    <div className="flex flex-shrink-0 gap-4">
      <Button onClick={toggle}>
        <MenuIcon className="h-6 w-6" />
      </Button>
      <Link to="/">
        <img src="/vite.svg" alt="vite logo" />
      </Link>
    </div>
  )
}

export default Topbar
