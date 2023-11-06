import React, { useContext } from 'react';
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import ActiveLink from '../../ActiveLink/ActiveLink';
import { AuthContext } from '../../providers/AuthProvider';
const Header = () => {
  const {logout,user}=useContext(AuthContext);
  
    return (
      <Container>
        <div className="d-flex justify-content-evenly flex-column flex-md-row mt-5 text-md-start text-center align-items-center">
          <div className="">
            <h2 className="fw-bolder title">Chef`s Choice</h2>
            <small className="title-text text-uppercase">
              Ultimate Japanese cookbook of chefs
            </small>
          </div>
          <Navbar expand="lg  ">
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
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className=" ms-md-5 navs">
            {user ? (
              <div className="d-block  mt-2 mb-2">
                <div>
                  <small>
                    Welcome,
                    <span className="text-color">{user.displayName}</span>
                  </small>
                </div>
                <div className="d-flex justify-content-center">
                  <img
                    className="rounded zoom "
                    width={50}
                    height={50}
                    src={user.photoURL}
                  />
                </div>
              </div>
            ) : (
              <div className="mb-1 ms-md-1 d-inline">
                <Button variant="outline-dark">
                  <Link className="text-decoration-none text-color" to="/login">
                    Login
                  </Link>
                </Button>
              </div>
            )}
            {user ? (
              <div className="d-flex justify-content-center ">
                <Button onClick={logout} variant="secondary" className=" ">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="d-inline ms-2 ">
                <Button onClick={logout} variant="secondary" className=" ">
                  Logout
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    );
};

export default Header;