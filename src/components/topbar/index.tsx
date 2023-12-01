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
import React, { useState } from 'react'
import { ChevronLeft } from 'lucide-react'

const Topbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false)
  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar)
  }

  return (
    <div className="sticky mx-4 flex max-h-16 items-center justify-between gap-10 py-2 lg:gap-20">
      <TopbarFirstSection />
      <SearchBar
        showSearchBar={showSearchBar}
        setShowSearchBar={setShowSearchBar}
      />
      <div className="flex-nowrap items-center">
        <Button onClick={toggleSearchBar} className="md:hidden">
          <SearchIcon className="h-6 w-6" />
        </Button>
        <Button className="md:hidden">
          <VoiceIcon className="h-6 w-6" />
        </Button>
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
    <div className="relative flex flex-shrink-0 items-center gap-4">
      <Button onClick={toggle}>
        <MenuIcon className="h-6 w-6" />
      </Button>
      <Link to="/">
        <img src="/vite.svg" alt="vite logo" />
      </Link>
    </div>
  )
}

interface SearchBarProps {
  showSearchBar: boolean
  setShowSearchBar: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchBar = (props: SearchBarProps) => {
  return (
    <form
      className={`${
        props.showSearchBar ? 'absolute inset-0 flex bg-white' : 'hidden'
      } flex-grow justify-center gap-4 py-2 md:flex`}>
      {props.showSearchBar && (
        <Button onClick={() => props.setShowSearchBar(false)}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
      )}
      <div className="flex max-w-4xl flex-grow justify-center gap-4">
        <div className="flex flex-grow">
          <input
            type="text"
            placeholder="Search"
            className=" flex-grow rounded-l-full rounded-r-none border border-r-0  border-neutral-300 p-2 shadow-inner outline-none"
          />
          <button
            type="submit"
            className="flex-shrink-0 rounded-r-full border px-4 py-2 ">
            <SearchIcon className="h-6 w-6" />
          </button>
        </div>
        <Button>
          <VoiceIcon className="h-6 w-6" />
        </Button>
      </div>
    </form>
  )
}

export default Topbar
