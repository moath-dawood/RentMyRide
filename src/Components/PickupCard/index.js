import { Grid } from '@mui/material'
import React from 'react'
import Pickup from './Pickup'
import Switcher from './Switcher'
import Dropoff from './Dropoff'

const PickupCard = () => {
  return (
    <Grid container width={"98%"} xs={12} margin={"auto"} justifyContent={"space-around"} alignItems={"center"} flexGrow={1}>
      <Grid item xl={5.5} xs={12} >
        <Pickup />
      </Grid>
      <Grid justifyContent={"center"} margin={"auto"}>
        <Switcher />
      </Grid>
      <Grid item  xl={5.5} xs={12}>
        <Dropoff />
      </Grid>


    </Grid>
  )
}

export default PickupCard
