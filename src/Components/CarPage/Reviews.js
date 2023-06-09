import React from 'react'
import { Grid, Typography, Rating, Avatar, Stack } from '@mui/material'

const Reviews = ({ image, name, position, date, rating, comment }) => {
  return (
    <Grid mb={"20px"} container sx={{ backgroundColor: "white", height: "fit-content" }}>
      <Grid container xs={0.4} mb={"5px"} mr={"10px"} justifyContent={"center"}>
        <Avatar src={image} />
      </Grid>
      <Grid container xs={11.5}>
        <Grid container xs={12} mb={"10px"} flexDirection={"row"}>
          <Grid container xs={6} flexDirection={"column"}>
            <Typography mb={"5px"} variant='main' fontWeight={700}>{name}</Typography>
            <Typography fontWeight={500} variant='secondary'>{position}</Typography>
          </Grid>
          <Grid container flexDirection={"row"} xs={6} justifyContent={"flex-end"}>
            <Stack>
              <Typography textAlign={"right"} mb={"5px"} fontWeight={500} variant='secondary'>{date}</Typography>
              <Rating defaultValue={rating} precision={0.5} readOnly />
            </Stack>
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Typography variant='secondary' fontWeight={500}>{comment}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Reviews