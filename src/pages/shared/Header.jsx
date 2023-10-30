import React from 'react';
import './Header.css'
import { Container } from 'react-bootstrap';
const Header = () => {
    return (
        <Container className='mt-5'>
            <h2 className='fw-bolder'>Chef`s Choice</h2>
            <small className='title-text text-uppercase'>Ultimate cookbook of chefs</small>
        </Container>
    );
};

export default Header;