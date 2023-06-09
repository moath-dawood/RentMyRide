import React, { useState } from 'react'
import { Box, Grid, Typography, Button, Link } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import GroupIcon from '@mui/icons-material/Group';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';


const CarCard = ({ id, name, type, image, capacity, gear, passengers, price, discountedPrice, liked }) => {
  const [Liked, setLiked] = useState(false);
  const handleLiked = () => {
      setLiked(!Liked)
  }
  return (
    <Box sx={{ backgroundColor: "white", borderRadius: "10px", width: { xs: "350px", sm: "250px" }, height: "310px", padding: "15px", marginBottom: "20px" }}>
      <Grid container>
        <Grid container alignItems={"center"} justifyContent={"space-between"} xs={12}>
          <Typography variant='main' fontSize={"20px"} children fontWeight={"600"}>{name}</Typography>
          {Liked ? <IconButton onClick={handleLiked}>
            <FavoriteIcon sx={{ color: "red" }} />
          </IconButton>
            :
            <IconButton>
              <FavoriteBorderIcon onClick={handleLiked} />
            </IconButton>
          }
        </Grid>
        <Grid xs={12}> <Typography variant='secondary' fontWeight={"600"}>{type}</Typography></Grid>
        <Grid container xs={8} sm={12} >
          <Box
            sx={{
              margin: "auto",
              marginTop: "40px",
              marginBottom: "20px",
              width: "100%",
              height: "90px",
              backgroundImage: `url('${image}')`,
              backgroundSize: "70% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Grid>
        <Grid container xs={4} sm={12} justifyContent={"space-between"} alignItems={"center"}>
          <Grid container xs={8} sm={3} justifyContent={"space-evenly"} alignItems={"center"}>
            <LocalGasStationIcon sx={{ color: "#90a3bf" }} />
            <Typography variant='secondary' sx={{ color: "#90a3bf", backgroundSize: "" }} fontWeight={"500"}>{capacity}L</Typography>
          </Grid>
          <Grid container xs={12} sm={5} justifyContent={"space-evenly"} alignItems={"center"}>
            <DonutLargeIcon sx={{ color: "#90a3bf", rotate: "90deg" }} />
            <Typography variant='secondary' sx={{ color: "#90a3bf" }} fontWeight={"500"}>{gear}</Typography>
          </Grid>
          <Grid container xs={12} sm={4} justifyContent={"space-evenly"} alignItems={"center"}>
            <GroupIcon sx={{ color: "#90a3bf" }} />
            <Typography variant='secondary' sx={{ color: "#90a3bf" }} fontWeight={"500"}>{passengers} People</Typography>
          </Grid>
        </Grid>
        <Grid mt={"30px"} justifyContent={"space-between"} alignItems={"center"} container xs={12}>
          {discountedPrice ? <Grid container flexDirection={"row"} xs={5}>
            <Typography variant='main' fontSize={"20px"} mr={"10px"} fontWeight={"600"}>${price}.00/
              <Typography variant='secondary' fontSize={"14px"} ml={"5px"} mr={"10px"} pt={"7px"} sx={{ color: "#90a3bf" }} fontWeight={"600"}>day</Typography>
            </Typography>
            <Typography variant='secondary' fontSize={"14px"} pb={"10px"} sx={{ color: "#90a3bf", textDecoration: "line-through" }} fontWeight={"500"}>${discountedPrice}.00</Typography>
          </Grid> : <Grid container flexDirection={"row"} xs={6.5}>
            <Typography variant='main' fontSize={"20px"} mr={"10px"} fontWeight={"600"}>${price}.00/
              <Typography variant='secondary' fontSize={"14px"} ml={"5px"} mr={"10px"} pt={"7px"} sx={{ color: "#90a3bf" }} fontWeight={"600"}>day</Typography>
            </Typography>
          </Grid>
          }
          <Grid xs={4} sm={5.5}>
            <Link href={`/car-page/:${id}`}> <Button sx={{ boxShadow: "0" }} variant='contained'>Rent Now</Button> </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CarCard