import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../Provider/ThemeContext';
import friend from '../../assets/Sidebar/friends.png'
import group from '../../assets/Sidebar/group.png'
import market from '../../assets/Sidebar/market.png'
import page from '../../assets/Sidebar/page.png'
import saved from '../../assets/Sidebar/saved.png'
import video from '../../assets/Sidebar/video.png'

const LeftBar = () => {
    const {isDarkMode, setDarkMode}=useTheme();
    return (
        <div className=''>
            <Link to='/' className={isDarkMode ? 'flex font-bold items-center hover:bg-[#606060] duration-300 p-2 space-x-2 rounded-md' : 'flex font-bold items-center hover:bg-gray-100 duration-300 p-2 space-x-2 rounded-md'}>
                <img src="/photo.jpg" alt="photo" className='w-10 h-10 rounded-full border ' />
                <h2>Nafiz Al Turabi</h2>
            </Link >
            <Link to='/' className={isDarkMode ? 'flex font-bold items-center hover:bg-[#606060] duration-300 p-2 space-x-2 rounded-md' : 'flex font-bold items-center hover:bg-gray-100 duration-300 p-2 space-x-2 rounded-md'}>
                <img src={friend} alt="photo" className='w-8 h-8  ' />
                <h2>Friends</h2>
            </Link >
            <Link to='/' className={isDarkMode ? 'flex font-bold items-center hover:bg-[#606060] duration-300 p-2 space-x-2 rounded-md' : 'flex font-bold items-center hover:bg-gray-100 duration-300 p-2 space-x-2 rounded-md'}>
                <img src={group} alt="photo" className='w-8 h-8  ' />
                <h2>Groups</h2>
            </Link >
            <Link to='/' className={isDarkMode ? 'flex font-bold items-center hover:bg-[#606060] duration-300 p-2 space-x-2 rounded-md' : 'flex font-bold items-center hover:bg-gray-100 duration-300 p-2 space-x-2 rounded-md'}>
                <img src={saved} alt="photo" className='w-8 h-8  ' />
                <h2>Saved</h2>
            </Link >
            <Link to='/' className={isDarkMode ? 'flex font-bold items-center hover:bg-[#606060] duration-300 p-2 space-x-2 rounded-md' : 'flex font-bold items-center hover:bg-gray-100 duration-300 p-2 space-x-2 rounded-md'}>
                <img src={video} alt="photo" className='w-8 h-8  ' />
                <h2>Videos</h2>
            </Link >
            <Link to='/' className={isDarkMode ? 'flex font-bold items-center hover:bg-[#606060] duration-300 p-2 space-x-2 rounded-md' : 'flex font-bold items-center hover:bg-gray-100 duration-300 p-2 space-x-2 rounded-md'}>
                <img src={market} alt="photo" className='w-8 h-8  ' />
                <h2>Marketplace</h2>
            </Link >
            <Link to='/' className={isDarkMode ? 'flex font-bold items-center hover:bg-[#606060] duration-300 p-2 space-x-2 rounded-md' : 'flex font-bold items-center hover:bg-gray-100 duration-300 p-2 space-x-2 rounded-md'}>
                <img src={page} alt="photo" className='w-8 h-8  ' />
                <h2>Page</h2>
            </Link >
           
        </div>
    );
};

export default LeftBar;