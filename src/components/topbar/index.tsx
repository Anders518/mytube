import { Link } from 'react-router-dom'
import { MenuIcon, SearchIcon, VoiceIcon } from './icon'
import Button from './button'

const Topbar = () => {
  return (
    <div className="y-2 mx-3 mb-6 flex items-center gap-10 py-2 shadow-sm lg:gap-20">
      <Button>
        <MenuIcon className="h-6 w-6 items-center  justify-center" />
      </Button>
      <div>
        <Link to="/">
          <img src="/vite.svg" alt="vite logo" />
        </Link>
      </div>
      <div>
        <form className="flex w-64 lg:w-96">
          <input
            type="text"
            placeholder="Search"
            className="basis-4/5 justify-center rounded-l-full rounded-r-none border border-r-0  border-slate-300 p-2 shadow-inner"
          />
          <button
            type="submit"
            className="basis-1/5  gap-0 rounded-r-full border border-slate-300 bg-slate-100 hover:bg-slate-300">
            <SearchIcon className="h-6 w-6" />
          </button>
        </form>
      </div>
      <Button className="bg-slate-200 ">
        <VoiceIcon className="h-6 w-6" />
      </Button>
      <div>avtar</div>
    </div>
  )
}

export default Topbar
