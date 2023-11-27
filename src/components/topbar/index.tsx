import { Link } from 'react-router-dom'
import { MenuIcon } from './icon'

const Topbar = () => {
  return (
    <div className='flex py-2 shadow-sm gap-20'>
      <div className='rounded-full p-2 hover:bg-slate-300 hover:border-slate-400 transition duration-300'>
        <button>
          <MenuIcon className='w-6 h-5  ' />
        </button>
      </div>
      <div>
        <Link to='/'>
          <img src='/vite.svg' alt='vite logo' />
        </Link>
      </div>
      <div>search</div>
      <div>voice</div>
      <div>avtar</div>
    </div>
  )
}

export default Topbar
