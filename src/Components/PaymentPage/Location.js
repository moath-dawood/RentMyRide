import React from 'react'
import { Grid, Typography, Select, InputLabel, MenuItem, FormControl } from '@mui/material'


const Location = () => {
    const cities = [
        'Jerusalem',
        'Ramallah',
        'Qalqilyah',
        'Nablus',
        'Tulkarm',
        'Jenin',
        'Salfit',
        'Tubas',
        'Gaza',
        'Bethlehem',
        'Hebron'
    ];
    return (
        <Grid container mt={"10px"} xs={12} justifyContent={"space-between"}>
            <Grid mb={"10px"} container xs={12} md={5.8}>
                <Typography fontWeight={600} mb={"15px"} variant='main'>Locations</Typography>
                <FormControl sx={{ backgroundColor: "#F6F7F9", border: "none" }} fullWidth>
                    <InputLabel id="demo-simple-select-label">Select your city</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select your city"
                    >
                        {cities.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid mb={"10px"} container xs={12} md={5.8}>
                <Typography fontWeight={600} mb={"15px"} variant='main'>Date</Typography>
                <FormControl sx={{ backgroundColor: "#F6F7F9", border: "none" }} fullWidth>
                    <InputLabel id="demo-simple-select-label">Select your date</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select your date"
                    >
                        <MenuItem value="Today">Today</MenuItem>
                        <MenuItem value="Tommorrow">Tommorrow</MenuItem>
                        <MenuItem value="Next week">Next week</MenuItem>
                        <MenuItem value="Next month">Next month</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid mt={"15px"} container xs={12} md={5.8}>
                <Typography fontWeight={600} mb={"15px"} variant='main'>Time</Typography>
                <FormControl sx={{ backgroundColor: "#F6F7F9", border: "none" }} fullWidth>
                    <InputLabel id="demo-simple-select-label">Select your time</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select your time"
                    >
                        <MenuItem value="Morning">Morning</MenuItem>
                        <MenuItem value="Noon">Noon</MenuItem>
                        <MenuItem value="Afternoon">Afternoon</MenuItem>
                        <MenuItem value="Dusk">Dusk</MenuItem>
                        <MenuItem value="Evening">Evening</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default Location