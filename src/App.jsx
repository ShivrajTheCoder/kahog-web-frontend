import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import UserNavbar from './components/_layout/UserNavbar'
import Footer from './components/_layout/Footer'
import Podcasts from './screens/Podcasts'
import Ebooks from './screens/Ebooks'

export default function App() {
  return (
    <BrowserRouter>
      <UserNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/podcasts' element={<Podcasts />} />
        <Route path='/ebooks' element={<Ebooks />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
