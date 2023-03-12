import React from 'react';
import { Navbar, Sidebar } from '../components';

const Home = () => {
  return (
    <div className='max-h-screen overflow-hidden'>
      <div>
        <Navbar />
      </div>
      <div
        className='flex'
        style={{ height: '92.5vh' }}>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
