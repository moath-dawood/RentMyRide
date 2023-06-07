import React from 'react'
import { Grid, Typography, Rating, Link, Button } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { height } from '@mui/system';


const CarDetail = ({ car }) => {
    return (

        <Grid container xs={12} borderRadius={"10px"} sx={{ backgroundColor: "white", height: { xs: "400px", sm: "350px" } }}>
            <Grid margin={"20px"} container alignItems={"center"} height={"fit-content"} justifyContent={"space-between"} xs={12}>
                <Typography variant='main' fontSize={"25px"} pb={"5px"} children fontWeight={"600"}>{car.name}</Typography>
                {car.liked ? <IconButton>
                    <FavoriteIcon sx={{ color: "red" }} />
                </IconButton>
                    :
                    <IconButton>
                        <FavoriteBorderIcon />
                    </IconButton>
                }
                <Grid container alignItems={"center"} height={"fit-content"} xs={12}>
                    <Rating defaultValue={car.rating} precision={0.5} readOnly sx={{ mr: "5px" }} />
                    <Typography variant='secondary' children fontWeight={"600"}>{car.reviews}+ Reviewer</Typography>
                </Grid>
            </Grid>
            <Grid margin={"20px"} container xs={12}>
                <Typography variant='secondary' fontSize={"15px"} children fontWeight={"600"}>{car.info}</Typography>
            </Grid>
            <Grid margin={"20px"} container xs={12}>
                <Grid container xs={6}>
                    <Typography variant='secondary' fontSize={"15px"} children fontWeight={"600"} sx={{ mr: { xs: "20px", md: "40px" } }}>Type Car</Typography>
                    <Typography variant='main' fontSize={"15px"} children fontWeight={"600"}>{car.type}</Typography>
                </Grid>
                <Grid container xs={6}>
                    <Typography variant='secondary' fontSize={"15px"} children fontWeight={"600"} sx={{ mr: { xs: "20px", md: "40px" } }}>Capacity</Typography>
                    <Typography variant='main' fontSize={"15px"} children fontWeight={"600"}>{car.capacity} Person</Typography>
                </Grid>
                <Grid container xs={6}>
                    <Typography variant='secondary' fontSize={"15px"} children fontWeight={"600"} sx={{ mr: { xs: "20px", md: "40px" } }}>Steering</Typography>
                    <Typography variant='main' fontSize={"15px"} children fontWeight={"600"}>{car.steering}</Typography>
                </Grid>
                <Grid container xs={6}>
                    <Typography variant='secondary' fontSize={"15px"} children fontWeight={"600"} sx={{ mr: { xs: "20px", md: "40px" } }}>Gasoline</Typography>
                    <Typography variant='main' fontSize={"15px"} children fontWeight={"600"}>{car.gasoline}L</Typography>
                </Grid>
            </Grid>
            <Grid justifyContent={"space-between"} alignItems={"center"} pb={"20px"} container xs={12}>
                {car.discountedPrice ? <Grid container flexDirection={"column"} xs={5} pl={"20px"} pt={"15px"}>
                    <Typography variant='main' fontSize={"23px"} mr={"10px"} fontWeight={"600"}>${car.price}/
                        <Typography variant='secondary' fontSize={"14px"} ml={"5px"} mr={"10px"} pt={"7px"} sx={{ color: "#90a3bf" }} fontWeight={"600"}>days</Typography>
                    </Typography>
                    <Typography variant='secondary' fontSize={"14px"} pb={"10px"} sx={{ color: "#90a3bf", textDecoration: "line-through" }} fontWeight={"500"}>${car.discountedPrice}</Typography>
                </Grid> : <Grid container pl={"20px"} xs={6.5}>
                    <Typography variant='main' fontSize={"20px"} mr={"10px"} fontWeight={"600"}>${car.price}/
                        <Typography variant='secondary' fontSize={"14px"} ml={"5px"} mr={"10px"} pt={"7px"} sx={{ color: "#90a3bf" }} fontWeight={"600"}>days</Typography>
                    </Typography>
                </Grid>
                }
                <Grid container justifyContent={"center"} xs={4}>
                    <Link href={`/payment-page/:${car.id}`}> <Button sx={{ boxShadow: "0", padding: "10px", paddingX: "20px", textTransform: "capitalize" }} variant='contained'>Rent Now</Button> </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CarDetail