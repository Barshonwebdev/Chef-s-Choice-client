import React from 'react';
import './About.css'
const About = () => {
    return (
      <div>
        <div className="mt-5">
          <div className="d-flex justify-content-center bg-dark">
            <img
              className="rounded rounded-xl w-50  "
              src="../../../about-compressed.jpg"
              alt=""
            />
          </div>
          <p className='fs-5 w-75 mx-auto mt-5 px-md-5 food-category-font text-color fw-bolder  text-center'>
            Our site represents perfectly what it means to be a cookbook for the
            aspiring chefs practicing Japanese Cuisines. We provide authentic
            recipes from renowned chefs. For further info, visit our recipes section!
          </p>
        </div>
      </div>
    );
};

export default About;