import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Grid, TextField, IconButton, Badge, Link } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import RentMyRide from '../RentMyRide'

const Header = () => {
  const [tfValue, setTfValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const route = `/car-search/${tfValue.trim()}`;
    if (route !== '') {
      navigate(route);
    }
  };

  const handleKeyDown = (ev) => {
    if (ev.key === 'Enter') {
      handleSearch();
    }
  };


  return (
    <Grid container xs={12} py={"20px"} height="fit-content" alignItems={"center"} justifyContent={{ md: "space-between", xs: "center" }} sx={{ backgroundColor: "white" }}>
      <Grid alignItems={"center"} order={{ md: 1, xs: 2 }} justifyContent={"space-around"} container xs={12} md={6}>
        <Grid item xs={11} my={{ xs: "10px", md: "0px" }} mr={{ xs: "10px", md: "0px" }} md={3}>
          <RentMyRide />
        </Grid>
        <Grid container justifyContent={"space-between"} alignContent={"center"} xs={11} md={8}>
          <Grid container px={"10px"} alignItems={"center"} sx={{ border: "1px solid #f3f3f3" }} borderRadius={"20px"} xs={10}>
            <Grid item xs={1}>
              <SearchIcon color={"disabled"} backgroundColor={"primary"} />
            </Grid>
            <Grid container alignItems={"center"} item xs={10}>
              <TextField
                value={tfValue}
                onChange={(e) => setTfValue(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={handleSearch}
                hiddenLabel
                placeholder='Search something here'
                fullWidth
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
            <Grid item display={{ xs: "none", md: "unset" }} xs={1}>
              <Link href={`/car-search`}>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                  sx={{ width: "100%", height: "100%" }}
                >
                  <TuneRoundedIcon color={"disabled"} backgroundColor={"primary"} />
                </IconButton>
              </Link>
            </Grid>
          </Grid>
          <Grid container alignContent={"center"} justifyContent={"center"} sx={{ display: { xs: "unset", md: "none" } }} xs={1}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ border: "1px solid #f3f3f3", borderRadius: "5px", width: "100%", height: "100%" }}
            >
              <TuneRoundedIcon color={"disabled"} backgroundColor={"primary"} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid container order={{ md: 2, xs: 1 }} mr={{ md: "20px", xs: "0px" }} justifyContent={"space-between"} xs={11} md={3} lg={2} xl={1.5}>
        <Grid container justifyContent={"center"} sx={{ display: { xs: "unset", md: "none" } }} xs={3}>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            sx={{ border: "0px", width: "40px", height: "40px" }}
          >
            <MenuIcon color={"disabled"} backgroundColor={"primary"} />
          </IconButton>
        </Grid>
        <Grid container justifyContent={"center"} sx={{ display: { xs: "none", md: "unset" } }} xs={3}>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            sx={{ border: "1px groove", width: "40px", height: "40px", marginLeft: "10px" }}
          >
            <Badge badgeContent={19} color="error" >
              <FavoriteIcon color={"disabled"} backgroundColor={"primary"} />
            </Badge>
          </IconButton>
        </Grid>
        <Grid container justifyContent={"center"} sx={{ display: { xs: "none", md: "unset" } }} xs={3}>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            sx={{ border: "1px groove", width: "40px", height: "40px", marginLeft: "10px" }}
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon color={"disabled"} />
            </Badge>
          </IconButton>
        </Grid>
        <Grid container justifyContent={"center"} sx={{ display: { xs: "none", md: "unset" } }} xs={3}>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            sx={{ border: "1px groove", width: "40px", height: "40px", marginLeft: "10px" }}
          >
            <SettingsIcon color={"disabled"} />
          </IconButton>
        </Grid>
        <Grid container justifyContent={{ md: "flex-start", xs: "flex-end" }} ml={"0px"} xs={3}>
          <Link href={"/login"}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ border: "1px groove", width: "40px", height: "40px", marginLeft: "10px" }}
            >
              <LoginIcon />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
    </Grid >
  )
}
export default Header