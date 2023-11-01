import React from 'react';
import './Featured.css'
import { Container } from 'react-bootstrap';
import { LuClock } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";
const Featured = () => {
    return (
      <div>
        <Container>
          <div className="mt-5 ">
            <h4 className="headline mb-5 ">Featured Recipes</h4>
            <div className="d-flex flex-column flex-md-row mx-2 mx-md-5 ">
              <div className="mb-5">
                <img
                  className="w-75 mb-2 mb-md-3 zoom-featured"
                  src="../../../../featured3.jpg"
                  alt=""
                />
                <p className="type">APPETIZER</p>
                <h2>Chicken Katsu</h2>
                <p className="text-secondary w-75">
                  This beloved dish combines a golden, crunchy exterior with
                  tender, juicy chicken, making it a flavorful and satisfying
                  meal option.
                </p>
                <div className="w-75">
                  <hr />
                  <div className="d-flex align-items-center text-secondary">
                    <LuClock></LuClock>
                    <p className="my-0 ms-1 me-4">12 mins</p>
                    <AiOutlineHeart></AiOutlineHeart>
                    <p className="my-0 ms-1">Easy</p>
                  </div>
                </div>
              </div>
              <div>
                <img
                  className="w-75 mb-2 mb-md-3 zoom-featured"
                  src="../../../../featured4.jpg"
                  alt=""
                />
                <p className="type">MAINS</p>
                <h2>Udon Bowl</h2>
                <p className="text-secondary w-75">
                  Accompanied by a variety of toppings such as sliced scallions,
                  tempura, and fish cakes, udon bowls offer a comforting and
                  hearty dining experience.
                </p>
                <div className="w-75">
                  <hr />
                  <div className="d-flex align-items-center text-secondary">
                    <LuClock></LuClock>
                    <p className="my-0 ms-1 me-4">27 mins</p>
                    <AiOutlineHeart></AiOutlineHeart>
                    <p className="my-0 ms-1">Medium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default Featured;