import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "secondary-text  text-2xl px-8 py-2 mr-6 border-b-4 secondary-border duration-300"  : "text-white text-2xl px-8 py-2 mr-6 hover:bg-[#70ded9]/30 rounded-md "
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;