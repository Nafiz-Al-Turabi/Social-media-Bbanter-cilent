import React, { useState } from 'react';
import { LiaSearchSolid } from "react-icons/lia";
import { AiOutlineBell, AiOutlineMessage, AiOutlineShop } from "react-icons/ai";
import { GoHomeFill } from "react-icons/go";
import { PiVideoFill } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { HiOutlineLogout } from "react-icons/hi";
import { FaMoon, FaQuestionCircle } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi";
import ActiveLink from '../../Components/ActiveLink/ActiveLink';
import { useTheme } from '../../Provider/ThemeContext';
import './Navbar.css'




const Navbar = () => {
    const [showUserProfile, setShowUserProfile] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showMessages, setShowMessages] = useState(false);
    const { isDarkMode, toggleDarkMode } = useTheme();

    const toggleUserProfile = () => {
        setShowUserProfile(!showUserProfile);
    };

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    };
    const toggleMessages = () => {
        setShowMessages(!showMessages);
    };
    return (
        <div className={isDarkMode ? "bg-custom2 py-1 fixed top-0 w-full z-10 shadow-lg" : "nav-bg py-1 fixed top-0 w-full z-10"}>
            <div className=" mx-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-12 mr-4" />
                    {/* <p className='text-5xl'>B</p> */}
                    {/* Search */}
                    <div className=" items-center hidden md:block">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-gray-200 px-5 py-1 rounded-full focus:outline-none"
                        />
                    </div>

                </div>

                {/* Items */}
                <div className="flex items-center ">
                    <ActiveLink to="/" ><GoHomeFill /></ActiveLink>
                    <ActiveLink to="/friedns" ><FaUserGroup /></ActiveLink>
                    <ActiveLink to="/videos" ><PiVideoFill /></ActiveLink>
                    <ActiveLink to="/marketplace" ><AiOutlineShop /></ActiveLink>
                    <ActiveLink to="/group" ><HiOutlineUserGroup /></ActiveLink>

                </div>

                <div className='flex space-x-5 items-center'>
                    <div className="relative"> {/* Add margin to separate from user profile */}
                        <button onClick={toggleMessages} className="focus:outline-none">
                            <AiOutlineMessage className="text-white text-2xl" />
                            {/* Show message badge when there are messages */}
                            {showMessages && <span className="bg-blue-500 text-white rounded-full h-4 w-4 absolute -top-1 -right-1">2</span>}
                        </button>
                        {/* Show message dropdown when clicked */}
                        {showMessages && (
                            <div className="absolute top-full right-0 bg-white mt-2 rounded-md shadow-lg">
                                <div className="py-2 px-4">
                                    <p className="text-gray-800">Message 1</p>
                                    <p className="text-gray-800">Message 2</p>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Notifications */}
                    <div className="relative"> {/* Add margin to separate from user profile */}
                        <button onClick={toggleNotifications} className="focus:outline-none">
                            <AiOutlineBell className="text-white text-2xl" />
                            {/* Show notification badge when there are notifications */}
                            {showNotifications && <span className="bg-red-500 text-white rounded-full h-4 w-4 absolute -top-1 -right-1">3</span>}
                        </button>
                        {/* Show notifications dropdown when clicked */}
                        {showNotifications && (
                            <div className="absolute top-full right-0 w-64 bg-white mt-2 rounded-md shadow-lg">
                                <div className="py-2 px-4">
                                    <p className="text-gray-800">Notification 1</p>
                                    <p className="text-gray-800">Notification 2</p>
                                    <p className="text-gray-800">Notification 3</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* User Profile */}
                    <div className="relative">
                        <button onClick={toggleUserProfile} className="focus:outline-none flex items-center">
                            <img
                                src="/profile.jpg"
                                alt="User Profile"
                                className="h-8 w-8 rounded-full border"
                            />
                            <span className='font-bold ml-2'>Nafiz Al Turabi</span>
                        </button>
                        {showUserProfile && (
                            <div className={isDarkMode ? "absolute w-64 top-full right-2 bg-custom mt-2 rounded-md shadow-lg" : "absolute w-64 top-full right-2 bg-white mt-2 rounded-md shadow-lg"}>
                                <div className="py-2 px-4">
                                    <button className={isDarkMode ? ' w-full rounded-lg px-2 py-3 hover:bg-[#606060] duration-300' : ' w-full rounded-lg px-2 py-3 hover:bg-gray-100 duration-300'}>
                                        <Link to='/userProfile' className='flex items-center space-x-3'>
                                            <img
                                                src="/profile.jpg"
                                                alt="User Profile"
                                                className="h-12 w-12 rounded-full border"
                                            />
                                            <p className="font-bold text-center">Nafiz Al Turabi</p>
                                        </Link>
                                    </button>
                                    <Link to='/' className={isDarkMode ? 'flex items-center text-lg px-2 py-3 mt-2 hover:bg-[#606060] duration-300 rounded-md' : 'flex items-center text-lg px-2 py-3 mt-2 hover:bg-gray-100 duration-300 rounded-md'}> <FaQuestionCircle className='mr-2' /> Help & Support</Link>
                                    <Link to='/' className={isDarkMode ? 'flex items-center text-lg px-2 py-3 mt-2 hover:bg-[#606060] duration-300 rounded-md' : 'flex items-center text-lg px-2 py-3 mt-2 hover:bg-gray-100 duration-300 rounded-md'}> <IoSettingsSharp className='mr-2' /> Settings</Link>
                                    <p to='/' className={isDarkMode ? 'flex items-center text-lg px-2 py-3 mt-2 hover:bg-[#606060] duration-300 rounded-md' : 'flex items-center text-lg px-2 py-3 mt-2 hover:bg-gray-100 duration-300 rounded-md'}> <FaMoon className='mr-2 ' /> Display
                                        <label className="switch ml-20">
                                            <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                                            <span className="slider"></span>
                                        </label>
                                    </p>
                                    <button className="text-red-500 text-lg p-1 flex items-center mt-2"><HiOutlineLogout className='mr-2' />Logout</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
