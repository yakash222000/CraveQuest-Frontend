import React from 'react'
import { Modal,Box } from '@mui/material'
import { useLocation,useNavigate } from 'react-router-dom';
import { style } from '../Cart/Cart';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const Auth = () => {
    const location=useLocation();
    const naviagte=useNavigate();
    const handleClose=()=>{naviagte('/')};


  return (
    <>

    <Modal onClose={handleClose} open={
        location.pathname === "/account/register"
        || location.pathname === "/account/login"
    }>
        <Box sx={style}>
            {
                location.pathname==='/account/register'?<RegisterForm/>:<LoginForm/>
            }

        </Box>

    </Modal>
      
    </>
  )
}

export default Auth
