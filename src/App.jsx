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
import CirclesandComm from './screens/OtherScreens/CirclesandComm'
import Coaches from './screens/OtherScreens/Coaches'
import Following from './screens/OtherScreens/Following'
import AllChannels from './screens/OtherScreens/AllChannels'
import CreatorStudio from './screens/CreatorScreens/CreatorStudio'
import UploadContent from './screens/CreatorScreens/UploadContent'

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
        <Route path='/circles&communities' element={<CirclesandComm/>} />
        <Route path='/coaches' element={<Coaches/>} />
        <Route path='/following' element={<Following/>} />
        <Route path='/channels' element={<AllChannels/>} />
        <Route path='/creatorstudio' element={<CreatorStudio/>} />
        <Route path='/uploadcontent/:channelId' element={<UploadContent/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
