import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import RentMyRide from '../RentMyRide';
import { Grid } from '@mui/material';

const index2 = () => {
  return (
    <Grid>
        <RentMyRide />
        <div className='NavbarSearch'> 
        <img className='Navbar-img' src='assets/Icon-Menu.png'/>
        <div className='Search'>
            <img src='assets/Shape.png' alt='test'/>
            <input placeholder='Search'></input>
            </div>
    </div>
    </Grid>
  )
}

export default index2