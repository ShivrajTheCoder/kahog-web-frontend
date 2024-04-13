import React from 'react';
import Sidebar from '../../components/_layout/Sidebar';
import DashInfo from '../../components/AdminComponents/DashInfo';
import RequestContainer from '../../components/AdminComponents/RequestContainer';
import TopCreators from '../../components/AdminComponents/Requests/TopCreators';

export default function Dashboard() {
  return (
    <div className='min-h-screen flex'>
      <Sidebar height="full" /> 
      <section className='mx-10 my-8 w-full'>
        <h1 className='text-xl font-bold mb-5 ' >Dashboard</h1>
        <div className='w-full grid grid-cols-6 gap-3'>
            <DashInfo/>
            <TopCreators/>
        </div>
        <RequestContainer/>
      </section>
    </div>
  );
}
