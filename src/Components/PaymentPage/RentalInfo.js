import React from 'react'
import { Grid, Typography, CardMedia } from '@mui/material';
import Title from './Title';
import Location from './Location';

const RentalInfo = () => {
  return (
    <Grid xs={12} padding={"15px"} mt={"30px"} sx={{ backgroundColor: "white" }} borderRadius={"10px"}>
      <Title Title={"Rental Info"} Info={"Please select your rental date"} Step={2} />
      <Grid container alignItems={"center"} flexDirection={"row"}>
        <CardMedia sx={{ width: "13px", height: "13px", marginRight: "10px" }} component="img" image={"../assets/Pickup.png"} />
        <Typography fontWeight={600} variant='main'>Pick - up</Typography>
      </Grid>
      <Location />
      <Grid container mt={"30px"} alignItems={"center"} flexDirection={"row"}>
        <CardMedia sx={{ width: "13px", height: "13px", marginRight: "10px" }} component="img" image={"../assets/Dropoff.png"} />
        <Typography fontWeight={600} variant='main'>Drop - off</Typography>
      </Grid>
      <Location />
    </Grid>
  )
}

export default RentalInfo