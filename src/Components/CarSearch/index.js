import React from 'react'
import { CarFilter } from './CarFilter'
import CarGrid from '../CarGrid';
import { useEffect, useState } from 'react';
import { Typography, FormControlLabel, FormGroup, Checkbox, Slider, Grid, Button } from '@mui/material'
import PickupCard from '../PickupCard'

const firebaseDomain = "https://rentmyride-0-default-rtdb.europe-west1.firebasedatabase.app"

const CarSearch = () => {
    useEffect(() => {
        getAllCars();
    }, []);
    const [numberOfCars, setNumberOfCars] = useState(9);
    const [transformedCars, setTransformedCars] = useState([]);
    const getAllCars = async () => {
        const PopularCars = await (await fetch(`${firebaseDomain}/Cars/PopularCars.json`)).json()
        setTransformedCars(PopularCars)
    }
    const handleShowMore = () => {
        setNumberOfCars(prevNumberOfCars => prevNumberOfCars + 4);
    };
    return (
        <Grid container justifyContent={"space-between"} xs={12}>
            <Grid container xs={12} lg={2}>
                <CarFilter />
            </Grid>
            <Grid container justifyContent={"center"} xs={12} lg={10}>
                <Grid container justifyContent={"space-around"} xs={11}>
                    <Grid width={"100%"} margin={"auto"} xs={12}>
                        <PickupCard />
                    </Grid>
                    <CarGrid lg={4} cars={transformedCars.slice(0, numberOfCars)} />
                    <Grid item xs={12} mb={"20px"} container justifyContent="center">
                        {numberOfCars < transformedCars.length &&
                            <Button onClick={handleShowMore} variant="contained" color="primary">
                                Show more cars
                            </Button>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CarSearch