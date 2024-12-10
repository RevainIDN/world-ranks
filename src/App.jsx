import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './styles/App.css'
import HomePage from './pages/HomePage'
import CountryPage from './pages/CountryPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/country' element={<CountryPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}
