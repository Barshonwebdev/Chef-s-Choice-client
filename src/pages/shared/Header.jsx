import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
      <div className="d-flex flex-column flex-md-row mt-5 text-md-start text-center align-items-center">
        <div className="me-md-5">
          <h2 className="fw-bolder">Chef`s Choice</h2>
          <small className="title-text text-uppercase">
            Ultimate cookbook of chefs
          </small>
        </div>
        <Navbar expand="lg ms-md-5 ">
          <Navbar.Toggle className="mx-auto" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mt-2">
              <NavLink to="/" className="me-md-5 navs text-decoration-none">
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="me-md-5 navs text-decoration-none"
              >
                About us
              </NavLink>
              <NavLink
                to="/categories"
                className="me-md-5 navs text-decoration-none"
              >
                Categories
              </NavLink>
              <NavLink
                to="/blogs"
                className="me-md-5 navs text-decoration-none"
              >
                Blogs
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
};

export default Header;