import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import ProfileNavigation from './ProfileNavigation';
import zIndex from '@mui/material/styles/zIndex';

export const UserProfile = () => {
  const handleLogout = () => {}
  return (
    
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
      <div className="flex flex-col items-center justify-center">
        <AccountCircleIcon sx={{fontSize:"9rem"}}/>
        <h1 className="font-semibold py-5 text-2xl">Guest User</h1>
        <p>Email : guest123@gamil.com</p>
        <Button  variant="contained" onClick={handleLogout} sx={{margin:"2rem 0rem"}}>Logout</Button>

      </div>
      
    </div>
  );
};

export default UserProfile
