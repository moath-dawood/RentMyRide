import React from 'react'
import PopularCar from '../CarGrid'
import { Button, Grid, Typography } from '@mui/material'
export const CarsMain = () => {
    const PopularCars = [
        { name: 'Konigsegg', type: 'Sport', image: 'konigsegg', capacity: '90', gear: 'Automatic', passengers: '2', price: '90.00', liked: true },
        { name: 'NissanGt-R', type: 'Sport', image: 'Nissan', capacity: '80', gear: 'Automatic', passengers: '2', price: '80.00', discountedPrice: '100.00' },
        { name: 'Rolls-Royce', type: 'Sedan', image: 'rolls', capacity: '70', gear: 'Manual', passengers: '4', price: '96.00', },
        { name: 'All New Rush', type: 'SUV', image: 'rush', capacity: '70', gear: 'Manual', passengers: '6', price: '80.00', discountedPrice: '100.00', liked: true },
    ];
    const RecommendedCars = [
        { name: 'Konigsegg', type: 'Sport', image: 'konigsegg', capacity: '90', gear: 'Automatic', passengers: '2', price: '90.00', liked: true },
        { name: 'NissanGt-R', type: 'Sport', image: 'Nissan', capacity: '80', gear: 'Automatic', passengers: '2', price: '80.00', discountedPrice: '100.00' },
        { name: 'Rolls-Royce', type: 'Sedan', image: 'rolls', capacity: '70', gear: 'Manual', passengers: '4', price: '96.00', },
        { name: 'All New Rush', type: 'SUV', image: 'rush', capacity: '70', gear: 'Manual', passengers: '6', price: '80.00', discountedPrice: '100.00', liked: true },
        { name: 'Konigsegg', type: 'Sport', image: 'konigsegg', capacity: '90', gear: 'Automatic', passengers: '2', price: '90.00', liked: true },
        { name: 'NissanGt-R', type: 'Sport', image: 'Nissan', capacity: '80', gear: 'Automatic', passengers: '2', price: '80.00', discountedPrice: '100.00' },
        { name: 'Rolls-Royce', type: 'Sedan', image: 'rolls', capacity: '70', gear: 'Manual', passengers: '4', price: '96.00', },
        { name: 'All New Rush', type: 'SUV', image: 'rush', capacity: '70', gear: 'Manual', passengers: '6', price: '80.00', discountedPrice: '100.00', liked: true },
    ];
    return (
        <Grid container mb={"50px"}>
            <PopularCar name="Popular Cars" button="View All" cars={PopularCars} />
            <PopularCar name="Recommended Cars" cars={RecommendedCars} />
            <Grid container spacing={2} my={"30px"} width={"95%"} alignItems="center">
                <Grid item xs={6.94} container justifyContent="flex-end">
                    <Button variant="contained" color="primary">
                        Show more cars
                    </Button>
                </Grid>
                <Grid item xs={5} container justifyContent="flex-end">
                    <Typography variant="secondary">
                        120 Cars
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default CarsMain

