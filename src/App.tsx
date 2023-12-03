import { Route, Routes } from 'react-router-dom'
import Topbar from './components/topbar'
import MainPage from './view/mainPage'
import Sidebar from './components/sidebar'
import { playlists, subscriptions } from './data/sidebar'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './store'

function App() {
  const { theme } = useSelector((state: RootState) => state.pageSetting)
  useEffect(() => {
    switch (theme) {
      case 'system':
        localStorage.setItem('theme', 'system')
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
        break
      case 'dark':
        localStorage.setItem('theme', 'dark')
        document.documentElement.classList.add('dark')
        break
      case 'light':
        localStorage.setItem('theme', 'light')
        document.documentElement.classList.remove('dark')
        break
      default:
        break
    }
  }, [theme])
  return (
    <div className="flex max-h-screen flex-col dark:bg-slate-900 dark:text-white">
      <Topbar />
      <div className="grid flex-grow grid-cols-[auto,1fr] overflow-auto">
        <Sidebar subscribe={subscriptions} playList={playlists} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
