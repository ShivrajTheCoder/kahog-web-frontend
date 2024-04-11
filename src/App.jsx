import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import UserNavbar from './components/_layout/UserNavbar'
import Footer from './components/_layout/Footer'
import Podcasts from './screens/Podcasts'
import Ebooks from './screens/Ebooks'
import Audiobooks from './screens/Audiobooks'
import Events from './screens/OriginalsScreen.jsx/Events'
import Karyashala from './screens/OriginalsScreen.jsx/Karyashala'
import Pathshala from './screens/OriginalsScreen.jsx/Pathshala'
import Haat from './screens/EcommerceScreens/Haat'
import ProductDetails from './screens/EcommerceScreens/ProductDetails'

export default function App() {
  return (
    <BrowserRouter>
      <UserNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/podcasts' element={<Podcasts />} />
        <Route path='/ebooks' element={<Ebooks />} />
        <Route path='/audiobooks' element={<Audiobooks />} />
        <Route path='/events' element={<Events />} />
        <Route path='/karyashala' element={<Karyashala />} />
        <Route path='/pathshala' element={<Pathshala />} />
        <Route path='/haat' element={<Haat />} />
        <Route path='/productdetails' element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
