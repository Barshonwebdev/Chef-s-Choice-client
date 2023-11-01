import React from 'react';
import CarouselComponent from './Carousel/CarouselComponent';
import Featured from './Featured/Featured';


const Home = () => {
    return (
      <div>
        <div className='mb-5 mt-5'>
          <CarouselComponent></CarouselComponent>
          <Featured></Featured>
        </div>
      </div>
    );
};

export default Home;