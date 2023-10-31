import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ActiveLink from '../../ActiveLink/ActiveLink';
const Header = () => {
    return (
      <Container>
        <div className="d-flex flex-column flex-md-row mt-5 text-md-start text-center align-items-center">
          <div className="me-md-5">
            <h2 className="fw-bolder title">Chef`s Choice</h2>
            <small className="title-text text-uppercase">
              Ultimate Japanese cookbook of chefs
            </small>
          </div>
          <Navbar expand="lg ms-md-5 ">
            <Navbar.Toggle
              className="mx-auto"
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mt-2">
                <nav className="me-md-5 navs">
                  <ActiveLink to="/">HOME</ActiveLink>
                </nav>
                <nav className="me-md-5 navs">
                  <ActiveLink to="/about">ABOUT US</ActiveLink>
                </nav>
                <nav className="me-md-5 navs">
                  <ActiveLink to="/categories">CATEGORIES</ActiveLink>
                </nav>
                <nav className="me-md-5 navs">
                  <ActiveLink to="/blogs">BLOGS</ActiveLink>
                </nav>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Container>
    );
};

export default Header;