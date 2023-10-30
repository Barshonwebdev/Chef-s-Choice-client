import React from 'react';
import './Header.css'
import { Container } from 'react-bootstrap';
const Header = () => {
    return (
        <Container className='mt-3'>
            <h2 className='fw-bolder'>Chef`s Choice</h2>
        </Container>
    );
};

export default Header;