import React, { useState } from 'react';
import Post from '../Post/Post';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

const Home = () => {
  const [isSidebar1Open, setIsSidebar1Open] = useState(false);
  const [isSidebar2Open, setIsSidebar2Open] = useState(false);

  const toggleSidebar1 = () => {
    setIsSidebar1Open(!isSidebar1Open);
  };

  const toggleSidebar2 = () => {
    setIsSidebar2Open(!isSidebar2Open);
  };

  return (
    <div className="relative flex h-screen">
      {/* Toggle button for Sidebar 1 (Top Left) */}
      <button
        className="absolute top-96 z-50 left-0 m-4 md:hidden"
        onClick={toggleSidebar1}
      >
        Toggle Sidebar 1
      </button>

      {/* Sidebar 1 */}
      <div className={`w-1/2 lg:w-1/4 p-4 fixed h-full ${isSidebar1Open ? 'block' : 'hidden'} md:block`}>
        <LeftBar/>
      </div>

      {/* Main content area */}
      <div className={`w-full lg:w-2/5 p-4 mx-auto`}>
        <Post />
      </div>

      {/* Toggle button for Sidebar 2 (Top Right) */}
      <button
        className="absolute top-96 z-50 right-0 m-4 md:hidden"
        onClick={toggleSidebar2}
      >
        Toggle Sidebar 2
      </button>

      {/* Sidebar 2 */}
      <div className={` w-1/2 lg:w-1/4 p-4 fixed h-full right-0 ${isSidebar2Open ? 'block' : 'hidden'} md:block`}>
        <RightBar/>
      </div>
    </div>
  );
};

export default Home;
