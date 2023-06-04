import { Grid } from '@mui/material'
import React from 'react'
import CarDetail from './CarDetail'
import ReviewsContainer from './ReviewsContainer'

const CarPage = () => {
  return (
    <Grid>
        <CarDetail name='Nissan'/>
        <ReviewsContainer />
    </Grid>
  )
}

export default CarPage