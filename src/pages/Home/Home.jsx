import React from 'react';
import CarouselComponent from './Carousel/CarouselComponent';
import Featured from './Featured/Featured';
import Chefs from './Chefs/Chefs';
import FAQ from './FAQ/FAQ';


const Home = () => {
    return (
      <div>
        <div className='mb-5 mt-5'>
          <CarouselComponent></CarouselComponent>
          <Featured></Featured>
          <Chefs></Chefs>
          <FAQ></FAQ>
        </div>
      </div>
    );
};

export default Home;