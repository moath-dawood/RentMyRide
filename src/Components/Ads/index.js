import React from 'react'
import { Typography, Grid, Box, Button } from '@mui/material';

const index = () => {
    return (
        <Grid width={"95%"} margin={"auto"} marginY={"30px"} justifyContent={"space-between"} container sx={12}>
            <Grid item xs={12} md={5.5}>
                <Box sx={{ height: "300px", backgroundColor: "#54A6FF", borderRadius: "15px" }}>
                    <Grid paddingTop={"15px"} width={"30%"} marginLeft={"30px"} item xs={12}>
                        <Typography variant='main' sx={{ fontSize: { xs: "30px", md: "20px", xl: "30px" } }} color={"white"}>The Best Platform for Car Rental</Typography>
                    </Grid>
                    <Grid item marginTop={"15px"} width={"42%"} marginBottom={"15px"} marginLeft={"30px"} xs={12}>
                        <Typography variant='secondary' fontSize={"17px"} color={"white"}>Ease of doing a car rental safely and reliably. Of course at a low price.</Typography>
                    </Grid>
                    <Grid item xs={12} marginLeft={"30px"} >
                        <Button variant="contained">Rental Car</Button>
                    </Grid>
                    <Grid container xs={12} justifyContent={"center"}>
                        <img width={"280px"} src='assets/image 1.png' />
                    </Grid>
                </Box>
            </Grid>
            <Grid item md={5.5} sx={{ display: { xs: "none", md: "unset" } }}>
                <Box sx={{ height: "300px", backgroundColor: "#3563E9", borderRadius: "15px" }}>
                    <Grid paddingTop={"15px"} width={"32%"} marginLeft={"30px"} item xs={12}>
                        <Typography variant='main' sx={{ fontSize: { xs: "30px", md: "20px", xl: "30px" } }} fontSize={"30px"} color={"white"}>Easy way to rent a car at a low price</Typography>
                    </Grid>
                    <Grid item marginTop={"15px"} width={"36%"} marginBottom={"15px"} marginLeft={"30px"} xs={12}>
                        <Typography variant='secondary' fontSize={"17px"} color={"white"}>Providing cheap car rental services and safe and comfortable facilities.</Typography>
                    </Grid>
                    <Grid item xs={12} marginLeft={"30px"} >
                        <Button variant="contained" sx={{ backgroundColor: "#658DF1" }}>Rental Car</Button>
                    </Grid>
                    <Grid container xs={12} justifyContent={"center"}>
                        <img width={"250px"} src='assets/image 2.png' />
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}



export default index