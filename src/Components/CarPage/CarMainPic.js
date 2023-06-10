import React from 'react'
import { Grid, Box, Typography, CardMedia } from '@mui/material'

const CarMainPic = ({ title, info, image, mainPic }) => {
    console.log(image)
    return (
        <Grid container xs={12}>
            {mainPic ?
                <Box sx={{ width: "100%", height: "fit-content", backgroundColor: "#3563E9", borderRadius: "15px" }}>
                    <Grid container width={"100%"}>
                        <Grid paddingTop={"15px"} xs={12} item marginLeft={"30px"}>
                            <Typography variant='main' sx={{ fontSize: { xs: "17px", md: "20px", xl: "30px" } }} color={"white"}>{title}</Typography>
                        </Grid>
                        <Grid marginTop={"15px"} xs={12} marginBottom={"15px"} marginLeft={"30px"}>
                            <Typography variant='secondary' sx={{ fontSize: { xs: "15px", md: "17px", xl: "25px" } }} color={"white"}>{info}</Typography>
                        </Grid>
                        <Grid container xs={12} justifyContent={"center"}>
                            <CardMedia sx={{ width: "fit-content", height: "150px", objectFit: "contain" }} component="img" image={image} />
                        </Grid>
                    </Grid>
                </Box>
                :
                <Grid container xs={12} height={"fit-content"} alignItems={"center"} justifyContent={"center"}>
                    <CardMedia sx={{ objectFit: "contain", borderRadius: "15px" }} component="img" image={image} />
                </Grid>
            }
        </Grid>
    )
}

export default CarMainPic