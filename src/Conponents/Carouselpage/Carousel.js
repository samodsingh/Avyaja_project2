import { Carousel, Col, Row } from 'antd';
import React from 'react';
import "./Carousel.css";
const contentStyle = {
  height: '260px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'left',
  background: '#364d79',

};
const Carouselpage = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className='carousel-container'>
      <Carousel afterChange={onChange}>
        <div className='carousel1-bg'>
          <h1>Our Testimonials</h1>
          <p>
            We are using Ez Texting with our church safety team to broadcast safety-related messages including missing children, weather alerts, and other life-safety communications.</p>
        </div>
        <div className='carousel1-bg'>
          <h1>Our Testimonials</h1>
        </div>
        <div className='carousel1-bg'>
          <h1>Our Testimonials</h1>
        </div>
      </Carousel>
    </div>
  );
};
export default Carouselpage;