import React from 'react'
import { Grid } from '@mui/material';
import CarAd from './CarAd';

const Ads = () => {
    return (
        <Grid width={"90%"} margin={"auto"} marginY={"30px"} justifyContent={"space-between"} container sx={12}>
            <Grid item xs={12} md={5.5}>
                <CarAd title={"The Best Platform for Car Rental"} info={"Ease of doing a car rental safely and reliably. Of course at a low price."} image={"image 1"} backColor={"#54A6FF"} buttonColor={"#3563E9"}/>
            </Grid>
            <Grid item md={5.5} sx={{ display: { xs: "none", md: "unset" } }}>
                <CarAd title={"Easy way to rent a car at a low price"} info={"Providing cheap car rental services and safe and comfortable facilities."} image={"image 2"} backColor={"#3563E9"} buttonColor={"#54A6FF"}/>
            </Grid>
        </Grid>
    )
}



export default Ads