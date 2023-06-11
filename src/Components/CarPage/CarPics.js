import React, { useState } from 'react'
import { Grid, CardMedia } from '@mui/material'
import CarMainPic from './CarMainPic'

const CarPics = ({ car }) => {
    const [selected, setSelected] = useState(car.image)
    const [mainPic, setMainPic] = useState(true)

    return (
        <Grid container xs={12} height="100%" sx={{ mb: { xs: "15px", md: "0px" } }} p={"15px"}>
            <Grid item xs={12} sx={{ mb: { xs: "15px", md: "20px" } }}>
                <CarMainPic title={car.title} info={car.info} image={selected} mainPic={mainPic} car={car} />
            </Grid>
            <Grid container mt={"10px"} justifyContent={"space-between"} xs={12}>
                <Grid item xs={3}>
                    <Grid container xs={12} alignItems={"center"} justifyContent={"center"} sx={{ width: "100%", height: "100%", backgroundColor: "#3563E9", borderRadius: "15px" }}>
                        <CardMedia onClick={() => { setSelected(car.image); setMainPic(true) }} sx={{ objectFit: "contain" }} component="img" image={car.image} />
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <CardMedia onClick={() => { setSelected(car.image2); setMainPic(false) }} sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "15px" }} component="img" image={car.image2} />
                </Grid>
                <Grid item xs={3}>
                    <CardMedia onClick={() => { setSelected(car.image3); setMainPic(false) }} sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "15px" }} component="img" image={car.image3} />
                </Grid>
            </Grid>
        </Grid>
    )
}
export default CarPics