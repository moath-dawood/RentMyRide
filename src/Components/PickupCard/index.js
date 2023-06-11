import { Grid, Box } from '@mui/material'
import React from 'react'
import Pickup from './Pickup'
import Switcher from './Switcher'
import Dropoff from './Dropoff'

const PickupCard = () => {
  return (
    <Box component="section">
      <Grid container width={"90%"} xs={12} margin={"auto"} my={"50px"} justifyContent={"space-around"} alignItems={"center"} flexGrow={1}>
        <Grid item md={5} xs={12} >
          <Pickup />
        </Grid>
        <Grid container xs={12} md={2} justifyContent={"center"} sx={{ zIndex:2,m:{xs:"-20px", md:"0px"}}}>
          <Switcher />
        </Grid>
        <Grid item md={5} xs={12}>
          <Dropoff />
        </Grid>
      </Grid>
    </Box>
  )
}
//fix this card
export default PickupCard
