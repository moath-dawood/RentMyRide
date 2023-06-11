import React, { useState, useEffect } from 'react'
import { Button, Grid, Typography, Box } from '@mui/material'
import CarGrid from '../CarGrid';
import { FB_URL } from '../../API/Firebase';

export const CarsMain = () => {
    useEffect(() => {
        getAllCars();
        getRecommendedCars();
    }, []);
    const [numberOfCars, setNumberOfCars] = useState(8);
    const [transformedRecommendedCars, setTransformedRecommendedCars] = useState([]);
    const [transformedCars, setTransformedCars] = useState([]);
    const getAllCars = async () => {
        const PopularCars = await (await fetch(`${FB_URL}/Cars/PopularCars.json`)).json()
        const retrievedCars = []
        for (const key in PopularCars) {
            const retrievedCar = {
                ...PopularCars[key],
                id: key
            };
            retrievedCars.push(retrievedCar)
        }
        setTransformedCars(retrievedCars)
    }
    const handleShowMore = () => {
        setNumberOfCars(prevNumberOfCars => prevNumberOfCars + 4);
    };
    const getRecommendedCars = async () => {
        const RecommendedCars = await (await fetch(`${FB_URL}/Cars/RecommendedCars.json`)).json()
        const retrievedCars = []
        for (const key in RecommendedCars) {
            const retrievedCar = {
                ...RecommendedCars[key],
                id: key
            };
            retrievedCars.push(retrievedCar)
        }
        setTransformedRecommendedCars(retrievedCars)
    }
    return (
        <Box component={"section"}>
            <Grid container mb={"50px"}>
                <CarGrid name="Popular Cars" button={"View All"} lg={3} cars={transformedRecommendedCars} />
                <CarGrid name="Recommended Cars" lg={3} cars={transformedCars.slice(0, numberOfCars)} />
                <Grid container spacing={2} my={"30px"} width={"95%"} alignItems="center">
                    <Grid item xs={6.94} container justifyContent="flex-end">
                        {numberOfCars < transformedCars.length &&
                            <Button onClick={handleShowMore} variant="contained" color="primary">
                                Show more cars
                            </Button>
                        }
                    </Grid>
                    <Grid item xs={5} container justifyContent="flex-end">
                        <Typography variant="secondary">
                            16 Cars
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
export default CarsMain

