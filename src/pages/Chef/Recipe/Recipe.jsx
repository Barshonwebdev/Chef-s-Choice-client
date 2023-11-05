import React from 'react';
import './Recipe.css'
import { Button, Card, CardFooter, Col } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import { PiCookingPotFill } from "react-icons/pi";
import toast, { Toaster } from "react-hot-toast";


const Recipe = ({recipe}) => {
    const {recipe_name,ingredients,cooking_method,rating}= recipe;
    const notify = () => toast(` ${recipe_name} is a favourite! `, {
  style: {
    color: 'rgb(207, 82, 50)',
    fontWeight:'bolder',
    
  },
});
    return (
      <div>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="headline fs-3 fw-bolder mb-2 text-color text-center scale">
                {recipe_name}
              </Card.Title>
              <Card.Text>
                <small>
                  <p className="my-0 text-center fw-bolder">Ingredients</p>
                </small>
                {ingredients.map((ingredient) => (
                  <small className="my-2 d-block">-{ingredient}</small>
                ))}
                <small className="d-block text-center fw-bolder">Method</small>
                <small>{cooking_method}</small>
                <div className="d-flex align-items-center justify-content-between mt-1">
                  <div>
                    <p className="mt-3 d-flex align-items-center text-color scale">
                      {rating} <FaStar className='ms-1 fs-6 text-color'></FaStar>
                    </p>
                  </div>
                  <div>
                    <Button onClick={notify} className='favorite fw-bolder' >Favourite <PiCookingPotFill className='fs-4'></PiCookingPotFill> </Button>
                    <Toaster></Toaster>
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