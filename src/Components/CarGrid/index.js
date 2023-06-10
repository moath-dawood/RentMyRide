import { Grid, Typography, Button } from '@mui/material'
import CarCard from '../CarCard'
import React from 'react'

const CarGrid =  ({ name, button, cars }) => {
        return  (
            <Grid container width={"90%"} margin={"auto"} mt={"20px"} justifyContent={"space-between"} sx={{ justifyContent: { xs: "center", sm: "space-between" } }}>
                {button ?
                    <Grid container xs={12} justifyContent={"space-between"}>
                        <Grid container xs={12} alignContent={"center"} justifyContent={"space-between"}>
                            <Typography padding={"20px"} alignItems={"center"} variant='secondary'>{name}</Typography>
                            <Button sx={{ textTransform: "capitalize", fontweight: 700, fontSize: "15px" }} > View All </Button>
                        </Grid>
                        <Grid container xs={12} flexWrap={"nowrap"} sx={{ justifyContent: "space-between", overflowX: "auto" }}>
                            {cars.map(item => (
                                <Grid container justifyContent={"center"} xs={12} sm={6} md={4} lg={3} mr={"20px"}>
                                    <CarCard id={item.id} name={item.name} type={item.type} image={item.image} capacity={item.capacity} gear={item.gear} passengers={item.passengers} price={item.price} discountedPrice={item.discountedPrice} liked={item.liked} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    :
                    <Grid>
                        <Grid container xs={12} alignContent={"center"} justifyContent={"space-between"}>
                            <Typography padding={"20px"} alignItems={"center"} variant='secondary'>{name}</Typography>
                        </Grid>
                        <Grid container xs={12} sx={{ justifyContent: { xs: "center", sm: "space-between" } }}>
                            {cars.map(item => (
                                <Grid container justifyContent={"center"} xs={12} sm={6} md={4} lg={3}>
                                    <CarCard id={item.id} name={item.name} type={item.type} image={item.image} capacity={item.capacity} gear={item.gear} passengers={item.passengers} price={item.price} discountedPrice={item.discountedPrice} liked={item.liked} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                }
            </Grid>
        )
}

export default CarGrid