import React from 'react'
import { Grid, Typography, Rating, Link, Button } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';


const CarDetail = ({ name = "car", type = "Sport", capacity = 2, steering = "Manual", gasoline = 70, price = 100, discountedPrice, info = "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the 'race track'.", reviews = 100, rating = 5, liked = true }) => {
    return (

        <Grid container width={"400px"} height={"350px"} borderRadius={"10px"} sx={{ backgroundColor: "white" }}>
            <Grid margin={"20px"} container alignItems={"center"} height={"fit-content"} justifyContent={"space-between"} xs={12}>
                <Typography variant='main' fontSize={"25px"} pb={"5px"} children fontWeight={"600"}>{name}</Typography>
                {liked ? <IconButton>
                    <FavoriteIcon sx={{ color: "red" }} />
                </IconButton>
                    :
                    <IconButton>
                        <FavoriteBorderIcon />
                    </IconButton>
                }
                <Grid container alignItems={"center"} height={"fit-content"} xs={12}>
                    <Rating defaultValue={rating} precision={0.5} readOnly sx={{ mr: "5px" }} />
                    <Typography variant='secondary' children fontWeight={"600"}>{reviews}+ Reviewer</Typography>
                </Grid>
            </Grid>
            <Grid margin={"20px"} container height={"fit-content"} justifyContent={"space-between"} xs={12}>
                <Typography variant='secondary' fontSize={"15px"} children fontWeight={"600"}>{info}</Typography>
            </Grid>
            <Grid margin={"20px"} container xs={12}>
                <Grid container xs={6}>
                    <Typography variant='secondary' fontSize={"15px"} children fontWeight={"600"} sx={{ mr: "40px" }}>Type Car</Typography>
                    <Typography variant='main' fontSize={"15px"} children fontWeight={"600"}>{type}</Typography>
                </Grid>
                <Grid container xs={6}>
                    <Typography variant='secondary' fontSize={"15px"} children fontWeight={"600"} sx={{ mr: "40px" }}>Capacity</Typography>
                    <Typography variant='main' fontSize={"15px"} children fontWeight={"600"}>{capacity} Person</Typography>
                </Grid>
                <Grid container xs={6}>
                    <Typography variant='secondary' fontSize={"15px"} children fontWeight={"600"} sx={{ mr: "40px" }}>Steering</Typography>
                    <Typography variant='main' fontSize={"15px"} children fontWeight={"600"}>{steering}</Typography>
                </Grid>
                <Grid container xs={6}>
                    <Typography variant='secondary' fontSize={"15px"} children fontWeight={"600"} sx={{ mr: "40px" }}>Gasoline</Typography>
                    <Typography variant='main' fontSize={"15px"} children fontWeight={"600"}>{gasoline}L</Typography>
                </Grid>
            </Grid>
            <Grid justifyContent={"space-between"} alignItems={"center"} pb={"20px"} container xs={12}>
                {discountedPrice ? <Grid container flexDirection={"column"} xs={5} pl={"20px"} pt={"15px"}>
                    <Typography variant='main' fontSize={"23px"} mr={"10px"} fontWeight={"600"}>${price}/
                        <Typography variant='secondary' fontSize={"14px"} ml={"5px"} mr={"10px"} pt={"7px"} sx={{ color: "#90a3bf" }} fontWeight={"600"}>day</Typography>
                    </Typography>
                    <Typography variant='secondary' fontSize={"14px"} pb={"10px"} sx={{ color: "#90a3bf", textDecoration: "line-through" }} fontWeight={"500"}>${discountedPrice}</Typography>
                </Grid> : <Grid container pl={"20px"} xs={6.5}>
                    <Typography variant='main' fontSize={"20px"} mr={"10px"} fontWeight={"600"}>${price}/
                        <Typography variant='secondary' fontSize={"14px"} ml={"5px"} mr={"10px"} pt={"7px"} sx={{ color: "#90a3bf" }} fontWeight={"600"}>day</Typography>
                    </Typography>
                </Grid>
                }
                <Grid xs={4}>
                    <Link href={`/productPage/${name}`}> <Button sx={{ boxShadow: "0", padding:"10px", paddingX:"20px", textTransform:"capitalize", marginRight:"20px" }}  variant='contained'>Rent Now</Button> </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CarDetail