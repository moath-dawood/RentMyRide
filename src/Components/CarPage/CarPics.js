import React from 'react'
import { Grid, CardMedia, Box } from '@mui/material'
import CarMainPic from './CarMainPic'
import { useState } from 'react'
const CarPics = ({car}) => {

    const [selected, setSelected] = useState(car.carImage1)
    const [mainPic, setMainPic] = useState(true)

    return (
        <Grid container xs={12} height={{ xs: "400px", md: "inherit" }} sx={{ mb: { xs: "15px", md: "0px" } }} p={"15px"}>
            <Grid item xs={12} sx={{ mb: { xs: "15px", md: "0px" } }}>
                <CarMainPic title={car.title} info={car.info} image={selected} mainPic={mainPic} />
            </Grid>
            <Grid container justifyContent={"space-between"} xs={12}>
                <Grid item xs={3}>
                    <Grid container xs={12} alignItems={"center"} justifyContent={"center"} sx={{ width: "100%", height: "100%", backgroundColor: "#3563E9", borderRadius: "15px" }}>
                        <CardMedia onClick={() => { setSelected(car.carImage1); setMainPic(true) }} sx={{ width: "90%", height: "50%", objectFit: "contain" }} component="img" image={`../assets/${car.carImage1}.png`} />
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <CardMedia onClick={() => { setSelected(car.carImage2); setMainPic(false) }} sx={{ height: "100%", objectFit: "contain", borderRadius: "15px" }} component="img" src={`../assets/${car.carImage2}.png`} />
                </Grid>
                <Grid item xs={3}>
                    <CardMedia onClick={() => { setSelected(car.carImage3); setMainPic(false) }} sx={{ height: "100%", objectFit: "contain", borderRadius: "15px" }} component="img" src={`../assets/${car.carImage3}.png`} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CarPics