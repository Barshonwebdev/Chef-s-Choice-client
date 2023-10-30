import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ActiveLink from '../../ActiveLink/ActiveLink';
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
              <nav className="me-md-5 navs">
                <ActiveLink to="/">Home</ActiveLink>
              </nav>
              <nav className="me-md-5 navs">
                <ActiveLink to="/about">About us</ActiveLink>
              </nav>
              <nav className="me-md-5 navs">
                <ActiveLink to="/categories">Categories</ActiveLink>
              </nav>
              <nav className="me-md-5 navs">
                <ActiveLink to="/blogs">Blogs</ActiveLink>
              </nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
};

export default Header;