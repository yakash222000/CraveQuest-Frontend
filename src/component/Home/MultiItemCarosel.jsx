import React from 'react'
import Slider from 'react-slick';
import { topMeels } from './TopMeels';
import CarouselItem from './CarouselItem';




const MultiItemCarosel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:2000,
        arrows: false
      };
  return (
    <div>
      <Slider {...settings}>
        {topMeels.map((item)=><CarouselItem 
        image={item.image} 
        title={item.title}/>
        )}
      </Slider>
    </div>
  )
}

export default MultiItemCarosel;


