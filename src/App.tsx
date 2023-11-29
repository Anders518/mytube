import { Route, Routes } from 'react-router-dom'
import Topbar from './components/topbar'
import MainPage from './view/mainPage'

function App() {
  return (
    <div className="flex max-h-screen flex-col">
      <Topbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  )
}

export default App
