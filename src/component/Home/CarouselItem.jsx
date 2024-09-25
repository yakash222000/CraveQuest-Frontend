import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const CarouselItem = ({image,title}) => {
  return (
    <div className="flex flex-col justify-center items-center mx-1">
        <img className='w-[10rem] h-[10rem] lg:h-[14rem] lg:w-[14rem]
        rounded-full object-cover object-center mr' src={image} alt="" />
        <span className="py-5 semibold text-xl text-gray-400">{title}</span>
      
    </div>
  )
}

export default CarouselItem
