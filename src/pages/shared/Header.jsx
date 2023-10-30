import React from 'react';
import './Header.css'
import { Container } from 'react-bootstrap';
const Header = () => {
    return (
        <div className='mt-5 text-md-start text-center'>
            <h2 className='fw-bolder'>Chef`s Choice</h2>
            <small className='title-text text-uppercase'>Ultimate cookbook of chefs</small>
        </div>
    );
};

export default Header;