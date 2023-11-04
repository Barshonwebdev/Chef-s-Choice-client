import React from 'react';
import Header from '../pages/shared/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import { Container, Spinner } from 'react-bootstrap';

const Main = () => {
  const navigation= useNavigation();
    return (
      <>
        <Header></Header>
        <div className='d-flex justify-content-center'>
          {navigation.state === "loading" && <Spinner variant='danger' animation="grow" />}
        </div>
        <Outlet></Outlet>
        <Footer></Footer>
      </>
    );
};

export default Main;