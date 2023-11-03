import React from 'react';
import './Recipe.css'
import { Card, Col } from 'react-bootstrap';
const Recipe = ({recipe}) => {
    const {recipe_name,ingredients,cooking_method,rating}= recipe;
    return (
      <div>
        <Col>
          <Card>
            
            <Card.Body>
              <Card.Title className="headline fw-bolder text-color text-center">{recipe_name}</Card.Title>
              <Card.Text>
                
              </Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default Recipe;