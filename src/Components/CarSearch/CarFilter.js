import React, { useContext } from 'react'
import { Typography, FormControlLabel, FormGroup, Checkbox, Slider, Grid } from '@mui/material'
import FilterContext from '../Store/FilterContext';


export const CarFilter = () => {
    const filterContext = useContext(FilterContext)
    const handleTypeCheckboxChange = (event) => {
        const { name, checked } = event.target;
        filterContext.handleType(name, checked)
    };
    const handlePassengersCheckboxChange = (event) => {
        const { name, checked } = event.target;
        filterContext.handlePassengers(name, checked)
    };
    console.log(filterContext.filterValues)
    return (

        <Grid item padding={"20px"} sx={{ backgroundColor: "white" }} width={"100%"}>
            <FormGroup>
                <Typography variant='secondary'> TYPE </Typography>
                <Grid flexDirection={"row"} alignItems={"center"} container xs={12}>
                    <FormControlLabel control={<Checkbox name='Sports' onChange={handleTypeCheckboxChange} />} sx={{ mr: "5px" }} label="Sports" />
                    <Typography variant='secondary' fontWeight="600">(3)</Typography>
                </Grid>
                <Grid flexDirection={"row"} alignItems={"center"} container xs={12}>
                    <FormControlLabel control={<Checkbox name='Sedan' onChange={handleTypeCheckboxChange} />} sx={{ mr: "5px" }} label="Sedan" />
                    <Typography variant='secondary' fontWeight="600">(6)</Typography>
                </Grid>
                <Grid flexDirection={"row"} alignItems={"center"} container xs={12}>
                    <FormControlLabel control={<Checkbox name='SUV' onChange={handleTypeCheckboxChange} />} sx={{ mr: "5px" }} label="SUV" />
                    <Typography variant='secondary' fontWeight="600">(4)</Typography>
                </Grid>
                <Grid flexDirection={"row"} alignItems={"center"} container xs={12}>
                    <FormControlLabel control={<Checkbox name='Pickup Truck' onChange={handleTypeCheckboxChange} />} sx={{ mr: "5px" }} label="Pickup Truck" />
                    <Typography variant='secondary' fontWeight="600">(1)</Typography>
                </Grid>
                <Grid flexDirection={"row"} alignItems={"center"} container xs={12}>
                    <FormControlLabel control={<Checkbox name='Wagon' onChange={handleTypeCheckboxChange} />} sx={{ mr: "5px" }} label="Wagon" />
                    <Typography variant='secondary' fontWeight="600">(1)</Typography>
                </Grid>
                <Grid flexDirection={"row"} alignItems={"center"} container xs={12}>
                    <FormControlLabel control={<Checkbox name='Hatchback' onChange={handleTypeCheckboxChange} />} sx={{ mr: "5px" }} label="Hatchback" />
                    <Typography variant='secondary' fontWeight="600">(1)</Typography>
                </Grid>
            </FormGroup>
            <FormGroup sx={{ my: "50px" }}>
                <Typography variant='secondary'> CAPACITY </Typography>
                <Grid flexDirection={"row"} alignItems={"center"} container xs={12}>
                    <FormControlLabel control={<Checkbox name='twoPerson' onChange={handlePassengersCheckboxChange} />} sx={{ mr: "5px" }} label="2 Person" />
                    <Typography variant='secondary' fontWeight="600">(2)</Typography>
                </Grid>
                <Grid flexDirection={"row"} alignItems={"center"} container xs={12}>
                    <FormControlLabel control={<Checkbox name='fourPerson' onChange={handlePassengersCheckboxChange} />} sx={{ mr: "5px" }} label="4 Person" />
                    <Typography variant='secondary' fontWeight="600">(2)</Typography>
                </Grid>
                <Grid flexDirection={"row"} alignItems={"center"} container xs={12}>
                    <FormControlLabel control={<Checkbox name='sixPerson' onChange={handlePassengersCheckboxChange} />} sx={{ mr: "5px" }} label="6 Person" />
                    <Typography variant='secondary' fontWeight="600">(10)</Typography>
                </Grid>
                <Grid flexDirection={"row"} alignItems={"center"} container xs={12}>
                    <FormControlLabel control={<Checkbox name='eightPerson' onChange={handlePassengersCheckboxChange} />} sx={{ mr: "5px" }} label="8 or More" />
                    <Typography variant='secondary' fontWeight="600">(1)</Typography>
                </Grid>
            </FormGroup>
            <Typography mb={"10px"} variant='secondary'> PRICE </Typography>
            <Slider
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
                max={150}
                sx={{
                    color: "#3563e9", '& .MuiSlider-rail': {
                        color: "#606060", height: "7px"
                    },
                    '& .MuiSlider-track': {
                        height: "7px"
                    }, '& .MuiSlider-thumb': {
                        height: "14px",
                        width: "14px",
                        border: "2px solid",
                        borderColor: "white"
                    }
                    , '& .MuiSlider-thumb:hover': {
                        padding: "6px",
                    }
                }}
            />
            <Typography mb={"10px"} fontWeight={700} fontSize={14} color={"#596780"}> Max . $150.00 </Typography>
        </Grid>
    )
}
