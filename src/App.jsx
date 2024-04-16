import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Dashboard from './screens/AdminScreens/Dashboard'
import DashboardHome from './screens/AdminScreens/DashboardHome'
import UploadPodcastModal from './components/AdminComponents/Forms/UploadPodcastModal';

export default function App() {
  return (
    <BrowserRouter>
      {/* <UserNavbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/podcasts' element={<Podcasts />} />
        <Route path='/ebooks' element={<Ebooks />} />
        <Route path='/audiobooks' element={<Audiobooks />} />
        <Route path='/events' element={<Events />} />
        <Route path='/karyashala' element={<Karyashala />} />
        <Route path='/pathshala' element={<Pathshala />} />
        <Route path='/haat' element={<Haat />} />
        <Route path='/productdetails' element={<ProductDetails />} />
        <Route path='/circles&communities' element={<CirclesandComm />} />
        <Route path='/coaches' element={<Coaches />} />
        <Route path='/following' element={<Following />} />
        <Route path='/channels' element={<AllChannels />} />
        <Route path='/creatorstudio' element={<CreatorStudio />} />
        <Route path='/uploadcontent/:channelId' element={<UploadContent />} />
        <Route path='/live' element={<Live />} /> */}
        <Route path='/dashboard' element={<Dashboard />} >
          <Route index element={<DashboardHome />} />
          <Route path='/dashboard/addpodcast' element={ <UploadPodcastModal/>} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}
