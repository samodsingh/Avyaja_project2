import { ContainerFilled } from '@ant-design/icons';
import { Carousel } from 'antd';
import React from 'react';
import "./Carousel.css";
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',

};

const Carouselpage= () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className='carousel-container'>
    <Carousel afterChange={onChange}>
      <div className='carousel1-bg'>
        <h1>samod singh village </h1>
      </div>
      <div className='carousel1-bg'>
      <h1>samod singh village </h1>
      </div>
      <div className='carousel1-bg'>
      <h1>samod singh village </h1>
      </div>    
    </Carousel>
    </div>
  );
};
export default Carouselpage;