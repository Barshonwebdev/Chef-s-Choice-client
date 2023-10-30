import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
      <div className="d-flex mt-5 text-md-start text-center align-items-center">
        <div className="me-5">
          <h2 className="fw-bolder">Chef`s Choice</h2>
          <small className="title-text text-uppercase">
            Ultimate cookbook of chefs
          </small>
        </div>
        <div className="ms-5  ">
          <NavLink to='/' className="me-5 navs text-decoration-none">Home</NavLink>
          <NavLink to='/about' className="me-5 navs text-decoration-none">About us</NavLink>
          <NavLink to='/categories' className="me-5 navs text-decoration-none">Categories</NavLink>
          <NavLink to='/blogs' className="me-5 navs text-decoration-none">Blogs</NavLink>
        </div>
        
      </div>
    );
};

export default Header;