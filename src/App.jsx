import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Dashboard from './screens/AdminScreens/Dashboard'
import DashboardHome from './screens/AdminScreens/DashboardHome'
import UploadPodcastModal from './components/AdminComponents/Forms/UploadPodcastModal';
import UploadEbookModal from './components/AdminComponents/Forms/UploadEbookModal';
import UploadAudiobookModal from './components/AdminComponents/Forms/UploadAudiobookModal';
import AddProduct from './components/AdminComponents/Forms/AddProduct'
import AddKaryashalaModal from './components/AdminComponents/Forms/AddKaryashalaModal'
import AddPathshalaModal from './components/AdminComponents/Forms/AddPathshalaModal'
import AddCircleModal from './components/AdminComponents/Forms/AddCircleModal'
import AddCommunityModal from './components/AdminComponents/Forms/AddCommunityModal'
import AddInterestModal from './components/AdminComponents/Forms/AddInterestModal';
import AddCategoryModal from './components/AdminComponents/Forms/AddCategoryModal';
import PostEventModal from './components/AdminComponents/Forms/PostEventModal';
import PodcastContainer from './components/PodcastComponents/PodcastContainer'
import EbooksContainer from './components/EbooksComponents/EbooksContainer'
import AudioBooksContainer from './components/HomeComponents/AudioBooksContainer'

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
          <Route path='/dashboard/addebook' element={ <UploadEbookModal/>} />
          <Route path='/dashboard/addaudiobook' element={ <UploadAudiobookModal/>} />
          <Route path='/dashboard/addproduct' element={ <AddProduct/>} />
          <Route path='/dashboard/addkaryashala' element={ <AddKaryashalaModal/>} />
          <Route path='/dashboard/addpathshala' element={ <AddPathshalaModal/>} />
          <Route path='/dashboard/addcommunity' element={ <AddCommunityModal/>} />
          <Route path='/dashboard/addcircle' element={ <AddCircleModal/>} />
          <Route path='/dashboard/addinterest' element={ <AddInterestModal/>} />
          <Route path='/dashboard/addcategory' element={ <AddCategoryModal/>} />
          <Route path='/dashboard/addevents' element={ <PostEventModal/>} />
          <Route path='/dashboard/podcasts' element={ <PodcastContainer/>} />
          <Route path='/dashboard/ebooks' element={ <EbooksContainer/>} />
          <Route path='/dashboard/audiobooks' element={ <AudioBooksContainer/>} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}
