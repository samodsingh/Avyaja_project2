import React from 'react';
import "./Mylayout.css";
import Mynavbar from './Navbar/Mynavbar';
import Formsection from './Formsection/Formsection';
import Aboutpage from './AboutSection/Aboutpage';
import CardSlider from './CardsliderSection/CardSlider';
import Carouselpage from './Carouselpage/Carousel';


const Mylayout = () => {
  return (
    <div>
        <Mynavbar />
        <Formsection />
        <Aboutpage />
        <CardSlider />
        <Carouselpage />
        
    </div>
  )
}

export default Mylayout