import { Navbar } from '../component/Navbar/Navbar.jsx';
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from '../component/Home/Home.jsx';
import RestaurantDetails from '../component/Restaurant/RestaurantDetails';
import Cart from '../component/Cart/Cart';
import Profile from '../component/Profile/Profile';
import Auth from '../component/Auth/Auth.jsx';



export const CustomerRoutes = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/account/:register" element={<Home/>}/>
            <Route path="/restaurant/:city/:title/:id" element={<RestaurantDetails/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/my-profile/*" element={<Profile/>}/>

        </Routes>
        <Auth/>
    </div>
  )
}

export default CustomerRoutes
