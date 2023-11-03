import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './EachChef.css'
import { AiOutlineLike } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const EachChef = ({chef}) => {
  const {id,chef_name,chef_picture,years_of_experience,number_of_recipes,likes}= chef;
    return (
      <div>
        <Col>
          <Card>
            <Card.Img variant="top" src={chef_picture} />
            <Card.Body>
              <Card.Title className="chef-name">{chef_name}</Card.Title>
              <Card.Text>
                <p className="text-color">
                  Experience: {years_of_experience} years
                </p>
                <p className="text-color">Total recipes: {number_of_recipes}</p>
                <p className="text-color d-flex align-items-center">
                  <AiOutlineLike className="fs-2 text-color scale"></AiOutlineLike>{" "}
                  <span className="fs-5">{likes}</span>
                </p>
              </Card.Text>
              <NavLink to={`/chefs/${id}`}> 
                <Button variant="secondary">View Recipes</Button>{" "}
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default EachChef;