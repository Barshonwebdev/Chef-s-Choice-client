import React from 'react';
import Header from '../pages/shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import { Container } from 'react-bootstrap';

const Main = () => {
    return (
      <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </>
    );
};

export default Main;