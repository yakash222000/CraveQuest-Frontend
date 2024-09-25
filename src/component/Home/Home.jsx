import React from 'react'
import './Home.css';
import MultiItemCarosel from './MultiItemCarosel';
import { Restaurant } from '@mui/icons-material';
import RestaurantCard from '../Restaurant/RestaurantCard';


const restaurant=[1,1,1,1,1,1,1,1,1,1]

export const Home = () => {
  return (
    <div className="pb-10">
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
            <p className="text-2xl lg:text-6xl font-bold z-10 py-5">Crave Quest</p>
            <p className="text-gray-300 z-10 text-xl lg:text-4xl">Your Favorite Meals, Just a Click Away.</p>
        </div>
        <div className="cover absolute top-0 left-0 right-0">

        </div>
        <div className="fadout">

        </div>
      </section>
      <section className="p-10 lg:py-10 lg:px-5">
        <p className="text-gray-400 font-semibold py-3 pb-10 text-2xl">Top Meels</p>
        <MultiItemCarosel/> 
      </section>
      <section className='px-5 lg:px-5 pt-5'>
        <h1 className="text-2xl font-semibold text-gray-400 pb-5">Order From Our Handpicked Favorites</h1>
        <div className="flex flex-wrap items-center justify-around gap-5">
            {
                restaurant.map((item)=><RestaurantCard/>)
            }
        </div>
      </section>
    </div>
  )
}

export default Home
