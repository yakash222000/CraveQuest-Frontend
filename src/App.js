import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import {Home} from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import CustomerRoutes from './Routers/CustomerRoutes';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authentication/Action';



function App() {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const {auth} =useSelector((store) => store)
  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt))
  },[auth.jwt, jwt, dispatch]);
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
    <CustomerRoutes/>
    </ThemeProvider>
  );
}

export default App;
