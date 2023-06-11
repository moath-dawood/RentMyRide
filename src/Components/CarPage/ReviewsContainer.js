import React from 'react'
import Reviews from './Reviews'
import { Grid, Stack, Typography } from '@mui/material'
import WriteReview from './WriteReview';

const ReviewsContainer = ({ reviews }) => {
  return (
    <Stack sx={{ backgroundColor: "white" }} padding={"15px"} borderRadius={"10px"}>
      <Grid item mb={"25px"}>
        <Typography variant='main' fontWeight={700} fontSize={"18px"}>Reviews</Typography>
        <Typography variant='main' fontWeight={600} color={"white"} borderRadius={"5px"} padding={"5px"} paddingX={"15px"} fontSize={"15px"} ml={"15px"} textAlign={"center"} sx={{ backgroundColor: "#3563E9" }} mb={"25px"}>15</Typography>
      </Grid>
      <WriteReview />
      {reviews.map(item => (
        <Reviews name={item.name} rating={item.rating} comment={item.comment} date={item.date} position={item.position} />
        ))}
    </Stack>
  )
}

export default ReviewsContainer