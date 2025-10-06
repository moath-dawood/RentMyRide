import { useEffect, useState, useContext } from 'react';
import { CarFilter } from './CarFilter';
import CarGrid from '../CarGrid';
import { Grid, Button, Typography } from '@mui/material';
import PickupCard from '../PickupCard';
import { useParams } from 'react-router-dom';
import { FB_URL } from '../../API/Firebase';
import FilterContext from '../Store/FilterContext';

const CarSearch = () => {
    const filterContext = useContext(FilterContext);
    const [numberOfCars, setNumberOfCars] = useState(9);
    const [filteredCars, setFilteredCars] = useState([]);

    const { carName } = useParams();

    const getAllCars = async () => {
        const allCars = await (await fetch(`${FB_URL}/Cars/PopularCars.json`)).json();
        const retrievedCars = [];
        for (const key in allCars) {
            retrievedCars.push({ ...allCars[key], id: key });
        }

        let results = [...retrievedCars];
        if (carName) {
            results = results.filter(item =>
                item.name.toLowerCase().includes(carName.toLowerCase())
            );
        }
        if (filterContext.filterValues.type.length > 0) {
            results = results.filter(item =>
                filterContext.filterValues.type.includes(item.type)
            );
        }
        if (filterContext.filterValues.passengers.length > 0) {
            results = results.filter(item =>
                filterContext.filterValues.passengers.includes(item.passengers)
            );
        }
        results = results.filter(item =>
            item.price <= filterContext.filterValues.price
        );

        setFilteredCars(results);
    };
    useEffect(() => {
        getAllCars();
    }, [carName, filterContext.filterValues]);

    const handleShowMore = () => {
        setNumberOfCars(prev => prev + 4);
    };

    return (
        <Grid container justifyContent={"space-between"} xs={12}>
            <Grid container xs={12} lg={2}>
                <CarFilter />
            </Grid>
            <Grid container justifyContent={"center"} xs={12} lg={10}>
                <Grid container justifyContent={"space-around"} xs={12}>
                    <Grid item width={"100%"} margin={"auto"} xs={12}>
                        <PickupCard />
                    </Grid>
                    <Grid item xs={12}>
                        {filteredCars.length === 0 && (
                            <Typography textAlign={"center"}>No Cars found</Typography>
                        )}
                        {filteredCars.length === 1 && (
                            <CarGrid lg={12} cars={filteredCars.slice(0, numberOfCars)} />
                        )}
                        {filteredCars.length === 2 && (
                            <CarGrid lg={6} cars={filteredCars.slice(0, numberOfCars)} />
                        )}
                        {filteredCars.length >= 3 && (
                            <CarGrid lg={3} cars={filteredCars.slice(0, numberOfCars)} />
                        )}
                    </Grid>
                    <Grid item xs={12} mb={"20px"} container justifyContent="center">
                        {numberOfCars < filteredCars.length && (
                            <Button onClick={handleShowMore} variant="contained" color="primary">
                                Show more cars
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CarSearch;
