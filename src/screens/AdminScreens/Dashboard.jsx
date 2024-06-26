import React from 'react';
import Sidebar from '../../components/_layout/Sidebar';
import DashInfo from '../../components/AdminComponents/DashInfo';
import RequestContainer from '../../components/AdminComponents/RequestContainer';
import TopCreators from '../../components/AdminComponents/Requests/TopCreators';
import AdminNavbar from '../../components/_layout/AdminNavbar';
import { Outlet } from 'react-router';
import Footer from '../../components/_layout/Footer';
import { useSelector } from 'react-redux';
import { checkAdminLogin } from '../../utils/checkAdminLogin';

export default function Dashboard() {
  const admin=useSelector((state)=>state.admin);
  console.log(admin);
  checkAdminLogin();
  return (
    <div className='min-h-screen flex'>
      <Sidebar />
      <div className='w-full'>
        <AdminNavbar />
        <div className=' min-h-screen bg-gray-100'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
