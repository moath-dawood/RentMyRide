import { Typography, useTheme, Grid, Divider } from '@mui/material'
import RentMyRide from '../RentMyRide'
import React from 'react'


const Footer = () => {
  const theme = useTheme()
  return (
    <Grid sx={{ padding: "30px", margin: "auto", backgroundColor: { md: "white", xs: "#F6F7F9" } }} container>
      <Grid sx={{ paddingTop: "50px", paddingBottom: "30px", marginBottom: "30px", borderBottom: "1px solid", borderColor: "rgba(13,13,13,0.16)" }} container xs={12}>
        <Grid sx={{ marginBottom: "15px" }} justifyContent={{ xs: 'flex-end', md: 'none' }} item xs={12} lg={6.3}>
          <RentMyRide />
          <Grid sx={{ marginTop: "15px", marginBottom: "20px", width: "35%" }}><Typography variant='secondary'>Our vision is to provide convenience and help increase your sales business</Typography></Grid>
        </Grid>
        <Grid container justifyContent={{ lg: 'space-evenly', md: 'flex-start' }} xs={12} lg={5.4} >
          <Grid item xs={6} md={4} lg={3} order={{ lg: 1, xs: 1 }}>
            <Grid sx={{ marginBottom: "15px" }}><Typography variant='main'>About</Typography></Grid>
            <Grid sx={{ marginBottom: "15px" }}><Typography variant='secondary'>How it works</Typography></Grid>
            <Grid sx={{ marginBottom: "15px" }}><Typography variant='secondary'>Featured</Typography></Grid>
            <Grid sx={{ marginBottom: "15px" }}><Typography variant='secondary'>Partnership</Typography></Grid>
            <Grid sx={{ marginBottom: "35px" }}><Typography variant='secondary'>Business Relation</Typography></Grid>
          </Grid>
          <Grid item xs={6} md={4} lg={3} order={{ lg: 2, xs: 3 }}>
            <Grid sx={{ marginBottom: "15px" }}><Typography variant='main'>Community</Typography></Grid>
            <Grid sx={{ marginBottom: "15px" }}><Typography variant='secondary'>Events</Typography></Grid>
            <Grid sx={{ marginBottom: "15px" }}><Typography variant='secondary'>Blog</Typography></Grid>
            <Grid sx={{ marginBottom: "15px" }}><Typography variant='secondary'>Podcast</Typography></Grid>
            <Grid sx={{ marginBottom: "15px" }}><Typography variant='secondary'>Invite a friend</Typography></Grid>
          </Grid>
          <Grid item xs={6} md={4} lg={3} order={{ lg: 3, xs: 2 }}>
            <Grid sx={{ marginBottom: "15px" }}><Typography variant='main'>Socials</Typography></Grid>
            <Grid sx={{ marginBottom: "15px" }}><Typography variant='secondary'>Discord</Typography></Grid>
            <Grid sx={{ marginBottom: "15px" }}><Typography variant='secondary'>Instagram</Typography></Grid>
            <Grid sx={{ marginBottom: "15px" }}><Typography variant='secondary'>Twitter</Typography></Grid>
            <Grid sx={{ marginBottom: "15px" }}><Typography variant='secondary'>Facebook</Typography></Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item sx={{ paddingBottom: "10px" }} order={{ lg: 1, xs: 3 }} xs={12} lg={9}>
          <Typography variant='main'>© 2023 RentMyRide. All rights reserved</Typography>
        </Grid>
        <Grid item sx={{ paddingBottom: "10px" }} order={{ lg: 2, xs: 1 }} xs={6} lg={1.4}>
          <Typography variant='main'>Privacy & Policy</Typography>
        </Grid>
        <Grid item sx={{ paddingBottom: "20px", textAlign: { xs: "right", md: "left" } }} order={{ lg: 3, xs: 2 }} xs={6} lg={1.5}>
          <Typography variant='main'>Terms & Conditions</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer
