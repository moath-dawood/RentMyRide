import React from 'react'
import Reviews from './Reviews'
import { Grid, Stack, Typography } from '@mui/material'

const ReviewsContainer = () => {
    const review = {name: 'Alice', position: "Ceo", date: '10 June 2003', rating:4.5, comment:"excellent"};
  return (
    <Stack sx={{backgroundColor:"white"}} padding={"15px"} borderRadius={"10px"}>
        <Grid  mb={"25px"}>
        <Typography variant='main' fontWeight={700} fontSize={"18px"}>Reviews</Typography>
        <Typography variant='main' fontWeight={600} color={"white"} borderRadius={"5px"} padding={"5px"} paddingX={"15px"} fontSize={"15px"} ml={"15px"} textAlign={"center"} sx={{backgroundColor:"#3563E9"}} mb={"25px"}>15</Typography>
        </Grid>
       <Reviews review={review}/>
       <Reviews review={review}/>
       <Reviews review={review}/>
       <Reviews review={review}/>
    </Stack>
  )
}

export default ReviewsContainer