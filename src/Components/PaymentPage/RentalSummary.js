import React from 'react'
import Title from './Title'
import { Grid } from '@mui/material'
import CarInfo from './CarInfo'


const RentalSummary = ({car}) => {
  return (
    <Grid xs={12} mb={"15px"} padding={"15px"} mt={"15px"} sx={{ backgroundColor: "white" }} borderRadius={"10px"}>
      <Grid pt={"5px"} sx={{ width: { xs: "100%", md: "90%" } }}>
        <Title Title={"Rental summary"} Info={"Prices may change depending on the length of the rental and the price of your rental car."} />
      </Grid>
      <CarInfo car={car} />
    </Grid>
  )
}

export default RentalSummary