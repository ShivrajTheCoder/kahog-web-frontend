import React from 'react'
import Banner from '../components/HomeComponents/Banner'
import OngoingLiveCont from "../components/HomeComponents/LiveComp/OngoingLiveCont";
import UpcomingLiveCont from '../components/HomeComponents/LiveComp/UpcomingLiveCont';
import ListenWithContainer from '../components/HomeComponents/ListenWithComponents/ListenWithContainer';
import HaatContainer from '../components/HomeComponents/HaatComponents/HaatContainer';
export default function Home() {
  const apiUrl=import.meta.env.VITE_API_URL;
  // console.log(apiUrl);
  return (
    <div>
      <Banner/>
      <OngoingLiveCont/>
      <UpcomingLiveCont/>
      <ListenWithContainer/>
      <HaatContainer/>
    </div>
  )
}
