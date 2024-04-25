import React from "react";
import "../styles/VitrinaSlider.css";
import Slider from "react-slick";
import ImageLavarropa from '../assets/lavarropas.png'
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
    <h2 className="h2-tendencias">TENDENCIAS</h2>
    <Slider {...settings} className="cards-container">
    
      <Card
        title='Samsung                           Smart Tv 75" UHD'
        content="$ 1.100.999"
        image={ImageLavarropa}
      />
      <Card
        title='Samsung                           Smart Tv 75" UHD'
        content="$ 1.100.999"
        image={ImageLavarropa}

      />
      <Card
        title='Samsung                           Smart Tv 75" UHD'
        content="$ 1.100.999"
        image={ImageLavarropa}
      />
      <Card
        title='Samsung                           Smart Tv 75" UHD'
        content="$ 1.100.999"
        image={ImageLavarropa}

      />
      <Card
        title='Samsung                           Smart Tv 75" UHD'
        content="$ 1.100.999"
        image={ImageLavarropa}

      />
      
      {/* Agregar más tarjetas según sea necesario */}
    </Slider>
  </div>
  );
};

export default Carousel;
