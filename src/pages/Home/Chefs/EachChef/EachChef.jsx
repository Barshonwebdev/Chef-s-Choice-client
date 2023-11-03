import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './EachChef.css'
import { AiOutlineLike } from "react-icons/ai";

const EachChef = ({chef}) => {
  const {chef_name,chef_picture,years_of_experience,number_of_recipes,likes}= chef;
    return (
      <div>
        <Col>
          <Card>
            <Card.Img variant="top" src={chef_picture} />
            <Card.Body>
              <Card.Title className='chef-name'>{chef_name}</Card.Title>
              <Card.Text>
                <p className='text-color'>Experience: {years_of_experience} years</p>
                <p className='text-color'>Total recipes: {number_of_recipes}</p>
                <p className='text-color'><AiOutlineLike className='fs-2 text-color'></AiOutlineLike> {likes}</p>
              </Card.Text>
              <Button variant='secondary'>View Recipes</Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default EachChef;