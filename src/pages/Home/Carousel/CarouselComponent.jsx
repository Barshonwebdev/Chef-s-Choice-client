import React, { useState } from 'react';
import './carousel.css'

import { Carousel } from 'react-bootstrap';
const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel className="car-bg" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="d-flex justify-content-center carImage">
          <img className="w-50 rounded-lg rounded" src="../../../../rice.jpg" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center carImage">
          <img
            className="w-50 rounded-lg rounded"
            src="../../../../katsu.jpg"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center carImage">
          <img
            className="w-50 rounded-lg rounded"
            src="../../../../sushi-all.jpg"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center carImage">
          <img className="w-50 rounded-lg rounded" src="../../../../noodle.jpg" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center carImage">
          <img
            className="w-50 rounded-lg rounded"
            src="../../../../momo-all.jpg"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center carImage">
          <img
            className="w-50 rounded-lg rounded"
            src="../../../../gyoza.jpg"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center carImage">
          <img
            className="w-50 rounded-lg rounded"
            src="../../../../sushi.jpg"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;


