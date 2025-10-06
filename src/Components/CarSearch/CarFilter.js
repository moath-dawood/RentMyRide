import React, { useContext } from 'react';
import { Typography, FormControlLabel, FormGroup, Checkbox, Slider, Grid } from '@mui/material';
import FilterContext from '../Store/FilterContext';

export const CarFilter = () => {
    const filterContext = useContext(FilterContext);

    const handleTypeCheckboxChange = (event) => {
        const { name, checked } = event.target;
        filterContext.handleType(name, checked);
    };

    const handlePassengersCheckboxChange = (event) => {
        const { name, checked } = event.target;
        filterContext.handlePassengers(name, checked)
    };


    const handlePriceChange = (event, value) => {
        filterContext.handlePrice(value);
    };

    return (
        <Grid item padding={"20px"} sx={{ backgroundColor: "white" }} width={"100%"}>
            <FormGroup>
                <Typography variant='secondary'> TYPE </Typography>
                {['Sports', 'Sedan', 'SUV', 'Pickup Truck', 'Wagon', 'Hatchback'].map((type) => (
                    <Grid container alignItems={"center"} key={type} flexDirection="row">
                        <FormControlLabel
                            control={<Checkbox name={type} onChange={handleTypeCheckboxChange} />}
                            sx={{ mr: "5px" }}
                            label={type}
                        />
                    </Grid>
                ))}
            </FormGroup>
            <FormGroup sx={{ my: "50px" }}>
                <Typography variant='secondary'> CAPACITY </Typography>
                <FormControlLabel
                    control={<Checkbox name='Two People' onChange={handlePassengersCheckboxChange} />}
                    sx={{ mr: "5px" }}
                    label="Two Person"
                />
                <FormControlLabel
                    control={<Checkbox name='Four People' onChange={handlePassengersCheckboxChange} />}
                    sx={{ mr: "5px" }}
                    label="Four Person"
                />
                <FormControlLabel
                    control={<Checkbox name='Six People' onChange={handlePassengersCheckboxChange} />}
                    sx={{ mr: "5px" }}
                    label="Six Person"
                />
                <FormControlLabel
                    control={<Checkbox name='Eight or More' onChange={handlePassengersCheckboxChange} />}
                    sx={{ mr: "5px" }}
                    label="Eight or More"
                />

            </FormGroup>
            <Typography mb={"10px"} variant='secondary'> PRICE </Typography>
            <Slider
                size="small"
                defaultValue={150}
                valueLabelDisplay="auto"
                max={150}
                onChange={handlePriceChange}
                sx={{
                    color: "#3563e9",
                    '& .MuiSlider-rail': { color: "#606060", height: "7px" },
                    '& .MuiSlider-track': { height: "7px" },
                    '& .MuiSlider-thumb': { height: "14px", width: "14px", border: "2px solid", borderColor: "white" },
                    '& .MuiSlider-thumb:hover': { padding: "6px" }
                }}
            />
            <Typography mb={"10px"} fontWeight={700} fontSize={14} color={"#596780"}>
                Max . ${filterContext.filterValues.price}
            </Typography>
        </Grid>
    );
};
