import React, { useEffect } from 'react';
import './Chef.css'
import { useLoaderData, useLocation } from 'react-router-dom';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { AiOutlineLike } from 'react-icons/ai';
import Recipe from './Recipe/Recipe';

const Chef = () => {
    const chefInfo=useLoaderData();
    console.log(chefInfo);
    const {chef_name,chef_picture,years_of_experience,number_of_recipes,likes,short_description,recipes}= chefInfo;
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    
    return (
      <div>
        <Container fluid className="bg-black mt-5 mb-3 text-light">
          <Row>
            <Col className="my-4 d-flex flex-column justify-content-center align-items-center order-2 order-md-1">
              <p className="chef-name">{chef_name}</p>
              <p className=" w-75 text-center"> {short_description}</p>
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

        <Container className="my-5">
          <div>
            <h4 className="headline text-center fw-bolder mb-5">Chef`s Recipes</h4>
            <Row xs={1} md={3} className="g-4">
              {recipes.map(recipe=><Recipe recipe={recipe} key={recipe.id}></Recipe>)
              }
            </Row>
          </div>
        </Container>
      </div>
    );
};

export default Chef;