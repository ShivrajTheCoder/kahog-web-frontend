import React from 'react';
import Sidebar from '../../components/_layout/Sidebar';
import DashInfo from '../../components/AdminComponents/DashInfo';

export default function Dashboard() {
  return (
    <div className='min-h-screen flex'>
      <Sidebar height="full" /> 
      <section className='mx-10 my-8'>
        <h1 className='text-xl font-bold mb-5 ' >Dashboard</h1>
        <div>
            <DashInfo/>
        </div>
      </section>
    </div>
  );
}
