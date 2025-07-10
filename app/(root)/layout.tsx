import React from 'react'
import Sidebar from '@/app/components/shared/Siderbar';
import MobileNav from '../components/shared/MobileNav';

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="root">
      {/* Sidebar  */}
      <Sidebar />
      <MobileNav />
      {/* mobileNav */}
      <div className="root-container">
        <div className="wrapper">
            {children}
        </div>
      </div>
    </main>
  );
}

export default Layout