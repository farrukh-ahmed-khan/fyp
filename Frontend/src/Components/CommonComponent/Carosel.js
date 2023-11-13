import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../Assets/css/carosel.css';
import sliderimg from "../../Assets/images/slider.png"

const Carosel = () => {
  return (
    <Carousel className='carsel'>
      <Carousel.Item interval={1000} className='image'>
        <img
          className="d-block w-100"
          src={sliderimg}
          alt="First slide"
          height={"800px"}
        />
      </Carousel.Item>
      <Carousel.Item interval={500 } className='image'>
        <img
          className="d-block w-100"
          src={sliderimg}
          alt="Second slide"
          height={"800px"}

        />
      </Carousel.Item>
      <Carousel.Item className='image'>
        <img
          className="d-block w-100"
          src={sliderimg}
          alt="Third slide"
          height={"800px"}
          
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carosel;
