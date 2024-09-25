import React, { useState } from 'react'
import {Grid ,Divider, Typography, FormControl, RadioGroup, FormControlLabel, Radio} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { CalendarMonth } from '@mui/icons-material';
import MenuCard from './MenuCard';

const menu=[1,1,1,1,1]

const categories = [
    "Pizza",
    "Burger",
    "Biryani",
    "Chicken",
    "Cake",
]

const FoodTypes=[
    {label: "All",value: "all"},
    {label: "Vegetarian only",value: "vegetarian"},
    {label: "Non-vegetarian",value: "non_vegetarian"},
    {label: "Seasonal",value: "seasonal"},

]

export const RestaurantDetails = () => {
    const [foodType,setFoodType]=useState("all")
    const handleFilter=(e) => {
        console.log(e.target.value,e.target.name)
    }
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">Home/India/Indian fast food</h3>
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <img className="w-full h-[40vh] object-cover" src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </Grid>
                <Grid item xs={12}lg={6}>
                    <img className="w-full h-[40vh] object-cover" src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </Grid>
                <Grid item xs={12}lg={6}>
                    <img className="w-full h-[40vh] object-cover" src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </Grid>
                
            </Grid>
        </div>
        <div className='pt-3 pb-5'>
            <h1 className="text-4xl font-semibold">Indian Fast Food</h1>
            <div className='space-y-3 mt-3'>
                <p className="text-gray-500 flex items-center gap-3"></p>

            </div>
            <p className="text-gray-500 flex item-center gap-3">
                <LocationOnIcon/>
                <span>
                Mumbai,Maharastra
                </span>
            </p>
            <p className="text-gray-500 flex item-center gap-3">
                <CalendarMonth/>
                <span>
                MON-SUN : 9:00 AM - 9:00 PM(Today)
                </span>
            </p>
            
        </div>
      </section>
      <Divider/>
      <section className="pt-[2rem] lg:flex relative">

        <div className="space-y-10 lg:w-[20%] filter p-5 shadow-md">
            <div className="box space-y-5 lg:sticky top-28 " >
                <div>
                    <Typography variant="h5" sx={{paddingBottom:"1rem"}}>
                        Food Type
                    </Typography>
                    <FormControl className="py-10 space-y-5" component={"fieldset"}>
                        <RadioGroup onChange={handleFilter} name="food_type" value={FoodTypes}>
                            {FoodTypes.map((item)=>(
                            <FormControlLabel 
                            key={item.value} 
                            value={item.value} 
                            control={<Radio/>} 
                            label ={item.label}
                            />))}
                        </RadioGroup>
                    </FormControl>
                </div>
                <Divider/>
                <div>
                    <Typography variant="h5" sx={{paddingBottom:"1rem"}}>
                        Food Category
                    </Typography>
                    <FormControl className="py-10 space-y-5" component={"fieldset"}>
                        <RadioGroup onChange={handleFilter} name="food_type" value={FoodTypes}>
                            {categories.map((item)=>(
                            <FormControlLabel 
                            key={item} 
                            value={item} 
                            control={<Radio/>} 
                            label ={item}
                            />))}
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10">
            {menu.map((item)=><MenuCard/>)}
        </div>

      </section>
    </div>
  )
}

export default RestaurantDetails
