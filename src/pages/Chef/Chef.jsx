import React from 'react';
import './Chef.css'
import { useLoaderData } from 'react-router-dom';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { AiOutlineLike } from 'react-icons/ai';
const Chef = () => {
    const chefInfo=useLoaderData();
    const {chef_name,chef_picture,years_of_experience,number_of_recipes,likes,short_description,recipes}= chefInfo;
    return (
      <div>
        <Container fluid className="bg-black mt-5 mb-3 text-light">
          <Row>
            <Col className="my-4 d-flex flex-column justify-content-center align-items-center order-2 order-md-1">
              <p className="chef-name">{chef_name}</p>
              <p className="px-5 w-75 text-center"> {short_description}</p>
              <p className="px-5 text-center"> {number_of_recipes} recipes</p>
              <p className="px-5 text-center">
                {years_of_experience} years experience
              </p>
              <p className="text-color d-flex align-items-center">
                <AiOutlineLike className="fs-2 text-color scale"></AiOutlineLike>{" "}
                <span className="fs-5">{likes}</span>
              </p>
            </Col>
            <Col className="p-0 order-1 order-md-2" xs={12} md={6}>
              <Image src={chef_picture} fluid></Image>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Chef;