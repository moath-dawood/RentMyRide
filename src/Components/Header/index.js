import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
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
import { Grid, Link } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: "20px", border: "1px groove", borderColor: "rgb(200,200,200)",
  '&:hover': {
    backgroundColor: "rgb(230, 230, 230)",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1.5),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '50%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <Grid container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color={"inherit"} position="static" sx={{ border: "1px groove", boxShadow: 0, minHeight: "80px" }}>
          <Toolbar sx={{ paddingTop: "7px", display: "flex" }}>
            <RentMyRide />
            <Search>
              <SearchIconWrapper>
                <SearchIcon color='disabled' />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search something here"
                inputProps={{ 'aria-label': 'search' }}
                sx={{ borderRadius: { xs: '10px', md: '20px' } }}
              />
              <Link href={`/car-search`}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
                sx={{ width: "40px", height: "40px", marginRight: "10px" }}
              >
                <TuneRoundedIcon sx={{}} color='disabled' />
              </IconButton>
              </Link>
            </Search>
            <Box justifyContent={"flex-end"} sx={{ flexGrow: 1 }} />
            <Grid item sx={12}>
              <Box sx={{ display: { xs: '100%', md: 'flex' } }}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit" sx={{ border: "1px groove", width: "40px", height: "40px" }}>
                  <Badge badgeContent={19} color="error" >
                    <FavoriteIcon color={"disabled"} backgroundColor={"primary"} />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  sx={{ border: "1px groove", width: "40px", height: "40px", marginLeft: "10px" }}
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon color={"disabled"} />
                  </Badge>
                </IconButton>
                <IconButton
                  sx={{ border: "1px groove", width: "40px", height: "40px", marginLeft: "10px" }}
                  size="large"
                  aria-label="show 17 new notifications"
                >
                  <SettingsIcon color={"disabled"} />
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                  sx={{ border: "1px groove", width: "40px", height: "40px", marginLeft: "10px" }}
                >
                  <AccountCircle />
                </IconButton>
              </Box></Grid>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  );
}
