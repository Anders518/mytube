import { Route, Routes } from 'react-router-dom'
import Topbar from './components/topbar'
import MainPage from './view/mainPage'
import Sidebar from './components/sidebar'
import { playlists, subscriptions } from './data/sidebar'

function App() {
  return (
    <div className="flex max-h-screen flex-col">
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
