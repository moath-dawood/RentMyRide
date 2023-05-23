import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import { Box } from '@mui/material'
import {  createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  box:{
    backgroundColor:"#F6F7F9"
  },
  typography: {
  fontFamily: "'Open Sans', sans-serif", 
  main: {
    fontSize:"16px",
    color: "black",
  },
  secondary:{
    fontSize:"14px",
    color:"rgba(13,13,13,0.6)"
  }

 },
 palette:{
  primary:{
    main:"#3563E9",
  },
  secondary:{
    main:"#000000"
  }
 }
});

function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{backgroundColor:"#F6F7F9"}}>
        <Header />
        <Outlet />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default Layout
