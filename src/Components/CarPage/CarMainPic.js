import React from 'react'
import { Grid, Box, Typography, CardMedia } from '@mui/material'

const CarMainPic = ({ title, info, image, mainPic }) => {
    return (
        <Grid container xs={12}>
            {mainPic ?
                <Box sx={{ width: "100%", height: "200px", backgroundColor: "#3563E9", borderRadius: "15px" }}>
                    <Grid>
                        <Grid paddingTop={"15px"} width={"33%"} marginLeft={"30px"} item xs={12}>
                            <Typography variant='main' sx={{ fontSize: { xs: "30px", md: "20px", xl: "30px" } }} color={"white"}>{title}</Typography>
                        </Grid>
                        <Grid item marginTop={"15px"} width={"42%"} marginBottom={"15px"} marginLeft={"30px"} xs={12}>
                            <Typography variant='secondary' fontSize={"17px"} color={"white"}>{info}</Typography>
                        </Grid>
                        <Grid container xs={12} justifyContent={"center"}>
                            <CardMedia sx={{ width: "100%", height: { xs: "50px", sm: "70px" }, objectFit: "contain" }} component="img" image={`../assets/${image}.png`} />
                        </Grid>
                    </Grid>
                </Box>
                :
                <Grid container xs={12} height= {"200px"} alignItems={"center"} justifyContent={"center"}>
                    <CardMedia sx={{ width: "100%", height: "100%", objectFit: "contain" }} component="img" image={`../assets/${image}.png`} />
                </Grid>
            }
        </Grid>
    )
}

export default CarMainPic