import React from 'react'
import { Typography, Grid, Box, Button } from '@mui/material';

const CarAd = ({title, info, image, backColor, buttonColor=null}) => {
    return (
                <Box sx={{ height: {sm:"380px", md:"350px" ,lg:"300px"}, backgroundColor: backColor, borderRadius: "15px" }}>
                    <Grid paddingTop={"15px"} width={"33%"} marginLeft={"30px"} item xs={12}>
                        <Typography variant='main' sx={{ fontSize: { xs: "30px", md: "20px", xl: "30px" } }} color={"white"}>{title}</Typography>
                    </Grid>
                    <Grid item marginTop={"15px"} width={"42%"} marginBottom={"15px"} marginLeft={"30px"} xs={12}>
                        <Typography variant='secondary' fontSize={"17px"} color={"white"}>{info}</Typography>
                    </Grid>
                    {buttonColor && <Grid item xs={12} marginLeft={"30px"} >
                        <Button variant="contained" sx={{backgroundColor:buttonColor}}>Rental Car</Button>
                    </Grid> }  
                    <Grid container xs={12} justifyContent={"center"}>
                        <img width={"250px"} src={`assets/${image}.png`} />
                    </Grid>
                </Box>
    )
}



export default CarAd