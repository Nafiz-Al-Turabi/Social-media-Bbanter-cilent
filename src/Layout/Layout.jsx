import React, { useState, useEffect } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [showLeftSidebar, setShowLeftSidebar] = useState(false);
    const [showRightSidebar, setShowRightSidebar] = useState(false);

    const toggleLeftSidebar = () => {
        setShowLeftSidebar(!showLeftSidebar);
    };

    const toggleRightSidebar = () => {
        setShowRightSidebar(!showRightSidebar);
    };

   

    useEffect(() => {
        const handleResize = () => {
            // For small devices, always hide the sidebars initially
            if (window.innerWidth <= 1024) {
                setShowLeftSidebar(false);
                setShowRightSidebar(false);
            } else {
                // For larger devices, always show the sidebars initially
                setShowLeftSidebar(true);
                setShowRightSidebar(true);
            }
        };

        // Call handleResize once to set initial state
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="mt-12">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Layout;
