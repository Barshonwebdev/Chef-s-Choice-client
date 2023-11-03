import React from 'react';
import CarouselComponent from './Carousel/CarouselComponent';
import Featured from './Featured/Featured';
import Chefs from './Chefs/Chefs';


const Home = () => {
    return (
      <div>
        <div className='mb-5 mt-5'>
          <CarouselComponent></CarouselComponent>
          <Featured></Featured>
          <Chefs></Chefs>
        </div>
      </div>
    );
};

export default Home;