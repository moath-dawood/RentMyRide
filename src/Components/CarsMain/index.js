import React, { useState } from 'react'
import { Button, Grid, Typography, Box } from '@mui/material'
import CarGrid from '../CarGrid';
import { useEffect } from 'react';
const PopularCars1 = [
    { id: 1, name: 'Konigsegg', type: 'Sport', capacity: '90', gear: 'Automatic', passengers: '2', price: '90.00', discountedPrice: "", liked: false },
    { id: 2, name: 'Nissan Gt-R', type: 'Sport', capacity: '80', gear: 'Automatic', passengers: '2', price: '80.00', discountedPrice: '100.00' },
    { id: 3, name: 'Rolls-Royce', type: 'Sedan', capacity: '70', gear: 'Manual', passengers: '4', price: '96.00', discountedPrice: "", liked: false },
    { id: 4, name: 'All New Rush', type: 'SUV', capacity: '70', gear: 'Manual', passengers: '6', price: '72.00', discountedPrice: '80.00', liked: false },
    { id: 5, name: 'CV-R', type: 'SUV', capacity: '70', gear: 'Manual', passengers: '6', price: '82.00', discountedPrice: '', liked: false },
    { id: 6, name: 'All New Terios', type: 'SUV', capacity: '70', gear: 'Manual', passengers: '6', price: '80.00', discountedPrice: '', liked: false },
    { id: 7, name: 'MG ZX Exclusive', type: 'SUV', capacity: '70', gear: 'Manual', passengers: '6', price: '70.00', discountedPrice: '', liked: false },
    { id: 8, name: 'New MG ZX', type: 'SUV', capacity: '72', gear: 'Manual', passengers: '6', price: '80.00', discountedPrice: '', liked: false },
    { id: 9, name: 'New MG ZS', type: 'SUV', capacity: '70', gear: 'Manual', passengers: '6', price: '85.00', discountedPrice: '90.00', liked: false },
    { id: 10, name: 'MG ZX Excite', type: 'SUV', capacity: '70', gear: 'Manual', passengers: '6', price: '85.00', discountedPrice: '98.00', liked: false },
    { id: 11, name: 'Dodge Challenger', type: 'Sport', capacity: '76', gear: 'Manual', passengers: '4', price: '90.00', discountedPrice: '100.00', liked: false },
    { id: 12, name: 'BMW X5', type: 'SUV', capacity: '70', gear: 'Manual', passengers: '6', price: '80.00', discountedPrice: '95.00', liked: false },
    { id: 13, name: 'Mclaren p1', type: 'Sport', capacity: '80', gear: 'Automatic', passengers: '2', price: '150.00', discountedPrice: '170.00', liked: false },
    { id: 14, name: 'Ferrari 488', type: 'Sport', capacity: '70', gear: 'Automatic', passengers: '2', price: '120.00', discountedPrice: '150.00', liked: false },
    { id: 15, name: 'BMW M5', type: 'Sport', capacity: '90', gear: 'Automatic', passengers: '4', price: '95.00', discountedPrice: '100.00', liked: false },
    { id: 16, name: 'Mercedes G-Class', type: 'SUV', capacity: '100', gear: 'Manual', passengers: '6', price: '150.00', discountedPrice: '', liked: false },
];
const firebaseDomain = "https://rentmyride-0-default-rtdb.europe-west1.firebasedatabase.app"






export const CarsMain = () => {
    useEffect(() => {
        getAllCars();
        getRecommendedCars();
    }, []);
    const [numberOfCars, setNumberOfCars] = useState(8);
    const [transformedRecommendedCars, setTransformedRecommendedCars] = useState([]);
    const [transformedCars, setTransformedCars] = useState([]);
    const getAllCars = async () => {
        const PopularCars = await (await fetch(`${firebaseDomain}/Cars/PopularCars.json`)).json()
        setTransformedCars(PopularCars)
    }
    const handleShowMore = () => {
        setNumberOfCars(prevNumberOfCars => prevNumberOfCars + 4);
    };
    const getRecommendedCars = async () => {
        const RecommendedCars = await (await fetch(`${firebaseDomain}/Cars/RecommendedCars.json`)).json()
        setTransformedRecommendedCars(RecommendedCars)
    }
    return (
        <Box component={"section"}>
            <Grid container mb={"50px"}>
            <CarGrid name="Recommended Cars" button={"View All"} cars={transformedRecommendedCars} />
                <CarGrid name="Popular Cars" cars={transformedCars.slice(0, numberOfCars)} />
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

