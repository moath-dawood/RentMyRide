import { useEffect, useState, useContext } from 'react';
import { CarFilter } from './CarFilter'
import CarGrid from '../CarGrid';
import { Grid, Button, Typography } from '@mui/material'
import PickupCard from '../PickupCard'
import { useParams } from 'react-router-dom';
import { FB_URL } from '../../API/Firebase';
import FilterContext from '../Store/FilterContext';


const CarSearch = () => {
    const filterContext = useContext(FilterContext)
    const [numberOfCars, setNumberOfCars] = useState(9);
    const [filteredCars, setFilteredCars] = useState([]);

    const { carName } = useParams();
    
    const getAllCars = async () => {
        const allCars = await (await fetch(`${FB_URL}/Cars/PopularCars.json`)).json()
        const retrievedCars = []
        for (const key in allCars) {
            const retrievedCar = {
                ...allCars[key],
                id: key
            };
            retrievedCars.push(retrievedCar)
        }
        setFilteredCars(retrievedCars)
        if (carName == null)
            setFilteredCars(retrievedCars)
        else {
            const filteredResults = retrievedCars.filter((item) => {
                return (item.name.toLowerCase().includes(carName.toLowerCase()))
            }).filter((item) => {
                return (item.passengers.toLowerCase().includes(filterContext.filterValues.passengers))
            }).filter((item) => {
                return (item.type.toLowerCase().includes(filterContext.filterValues.type))
            });
            setFilteredCars(filteredResults)
        }
        console.log(filterContext.filterValues.type)
    }

    useEffect(() => {
        getAllCars();
    }, [carName]);

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
                    <Grid item width={"100%"} margin={"auto"} xs={12}>
                        <PickupCard />
                    </Grid>
                    <Grid item xs={12}>
                        {(filteredCars.length == 0) &&
                            <Typography textAlign={"center"}>No Cars found</Typography>
                        }
                        {(filteredCars.length == 1) &&
                            <CarGrid lg={12} cars={filteredCars.slice(0, numberOfCars)} />
                        }
                        {(filteredCars.length == 2) &&
                            <CarGrid lg={6} cars={filteredCars.slice(0, numberOfCars)} />
                        }

                        {(filteredCars.length >= 3) &&
                            <CarGrid lg={4} cars={filteredCars.slice(0, numberOfCars)} />
                        }
                    </Grid>
                    <Grid item xs={12} mb={"20px"} container justifyContent="center">
                        {numberOfCars < filteredCars.length &&
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