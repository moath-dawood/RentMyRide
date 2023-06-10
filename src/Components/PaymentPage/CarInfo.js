import React from 'react'
import { CardMedia, Grid, Typography, Rating, Button, InputAdornment, Box, FormControl, InputLabel, OutlinedInput } from '@mui/material'


const CarInfo = ({ car }) => {
    return (
        <Grid container justifyContent={"space-around"}>
            <Grid container xs={12} pb={"30px"} sx={{ borderBottom: "1px solid", borderColor: "rgba(13,13,13,0.16)" }}>
                <Grid xs={4} mr={"10px"} container borderRadius={"10px"} justifyContent={"center"} alignItems={"center"} sx={{ backgroundColor: "#3563E9" }}>
                    <CardMedia sx={{ objectFit: "cover" }} component="img" image={car.image} />
                </Grid>
                <Grid container xs={7} flexDirection={"column"}>
                    <Typography variant='main' fontSize={"22px"} fontWeight={600}>{car.name}</Typography>
                    <Grid container sx={{ flexDirection: { xs: "column", md: "row" }, alignItems: { md: "center", xs: "flex-start" } }}>
                        <Rating name="read-only" value={car.rating} precision={0.5} readOnly sx={{ marginRight: "10px" }} />
                        <Typography variant='secondary' fontWeight={600}>{car.reviews}+ Reviewer</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container sx={12}>
                <Grid alignItems={"center"} justifyContent={"space-between"} container mt={"20px"}>
                    <Typography variant='secondary'>Subtotal</Typography>
                    <Typography fontSize={"25px"} variant='main' fontWeight={600}>${car.price}.00</Typography>
                </Grid>
                <Grid alignItems={"center"} justifyContent={"space-between"} container>
                    <Typography variant='secondary'>Tax</Typography>
                    <Typography fontSize={"25px"} variant='main' fontWeight={600}>$0</Typography>
                </Grid>
                <Grid xs={12} >
                    <Box sx={{ display: "flex", flexWrap: "wrap", mt: "10px" }}>
                        <FormControl sx={{ backgroundColor: "#F6F7F9" }} fullWidth variant="outlined">
                            <InputLabel>
                                Apply promo code
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Button sx={{ textTransform: "initial", color: "black", fontWeight: "700" }} variant='primary'>Apply now</Button>
                                    </InputAdornment>
                                }
                                label="Apply promo code"
                            />
                        </FormControl>
                    </Box>
                </Grid>
                <Grid xs={12} marginY={"30px"} container justifyContent={"space-between"} alignItems={"center"}>
                    <Grid container xs={6} flexDirection={"column"}>
                        <Typography variant='main' fontWeight={600} fontSize={"20px"}>Total rental price</Typography>
                        <Typography variant='secondary' fontSize={"14px"}> Overall price rental</Typography>
                    </Grid>
                    <Grid container justifyContent={"flex-end"} xs={6}>
                        <Typography variant='main' fontWeight={600} fontSize={"25px"}>${car.price}.00</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CarInfo