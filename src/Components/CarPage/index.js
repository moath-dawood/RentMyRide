import { Grid } from '@mui/material'
import React from 'react'
import CarDetail from './CarDetail'
import ReviewsContainer from './ReviewsContainer'
import CarPics from './CarPics'

const CarPage = () => {
  return (
    <Grid justifyContent={"space-between"} mt={"10px"} container xs={12}>
      <Grid container justifyContent={"center"} sm={12} md={5.5}>
        <CarPics />
      </Grid>
      <Grid container justifyContent={"center"} p={"20px"} sm={12} md={5.5}>
        <CarDetail name='Nissan' />
      </Grid>
      <Grid xs={12} p={"20px"}>
        <ReviewsContainer />
      </Grid>

    </Grid>
  )
}

export default CarPage