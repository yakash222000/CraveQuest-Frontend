import React,{useState} from 'react'
import ProfileNavigation from './ProfileNavigation'
import { Divider } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import UserProfile from './UserProfile'
import Events from './Events'
import Address from './Address'
import Orders from './Orders'
import Favorites from './Favorites'


const Profile = () => {
    const [openSideBar,setOpenSideBar]=useState(false)
  return (
    <div className="lg:flex justify-between">
      <div className="sticky h-[80vh] lg:w-[20%]">
        <ProfileNavigation open={true}/>
      </div>
      
      <div className='lg:w-[80%]'>
        <Routes>
            <Route path='/' element={<UserProfile/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/address' element={<Address/>}/>

            
        </Routes>

      </div>
    </div>
  )
}

export default Profile
