import React from 'react';
import './Recipe.css'
import { Button, Card, CardFooter, Col } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
const Recipe = ({recipe}) => {
    const {recipe_name,ingredients,cooking_method,rating}= recipe;
    return (
      <div>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="headline fs-3 fw-bolder mb-4 text-color text-center scale">
                {recipe_name}
              </Card.Title>
              <Card.Text>
                <small>
                  <p className="my-2 text-center fw-bolder">Ingredients</p>
                </small>
                {ingredients.map((ingredient) => (
                  <small className="my-2 d-block">-{ingredient}</small>
                ))}
                <small className="d-block text-center fw-bolder">Method</small>
                <small>{cooking_method}</small>
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <div>
                    <p className="d-flex align-items-center text-color scale">
                      {rating} <FaStar className='ms-1 fs-6 text-color'></FaStar>
                    </p>
                  </div>
                  <div>
                    <Button className='favorite fw-bolder' >Favourite!</Button>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default Recipe;