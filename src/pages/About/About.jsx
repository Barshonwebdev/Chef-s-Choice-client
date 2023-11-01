import React from 'react';
import './About.css'
const About = () => {
    return (
      <div>
        <div className="mt-5">
          <div className="d-flex justify-content-center">
            <img
              className="rounded rounded-xl img-fluid "
              src="../../../about.jpg"
              alt=""
            />
          </div>
          <p className='fs-3 mt-5 w-md-50 mx-4 title fw-bold text-secondary'>
            Our site represents perfectly what it means to be a cookbook for the
            aspiring chefs practicing Japanese Cuisines. We provide authentic
            recipes from renowned chefs and make sure that the learning curve do
            not become steep. For further info, visit our recipes!
          </p>
        </div>
      </div>
    );
};

export default About;