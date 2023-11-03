import React from 'react';
import './Chef.css'
import { useLoaderData } from 'react-router-dom';
import { Col, Container, Image, Row } from 'react-bootstrap';
const Chef = () => {
    const chefInfo=useLoaderData();
    const {chef_name,chef_picture,years_of_experience,number_of_recipes,likes,short_description,recipes}= chefInfo;
    return (
      <div>
        <Container fluid className="bg-dark mt-5 mb-3 text-light">
          <Row>
            <Col>
            
            </Col>
            <Col className='p-0' xs={12} md={6}>
              <Image src={chef_picture} fluid></Image>
            </Col>
           
          </Row>
        </Container>
      </div>
    );
};

export default Chef;