import React from 'react';
import './ActiveStyle.css'
import { NavLink } from 'react-router-dom';
const ActiveLink = ({to,children}) => {
    return (
        <NavLink
          to={to}
          className={({ isActive }) =>
            isActive ? "active" :  "not"
          }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;