import React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Typography, CardMedia, Grid } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

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

const dates = [
    "Today",
    "Tommorrow",
    "Next week",
    "Next month"
];

const times = [
    "Morning",
    "Noon",
    "Afternoon",
    "Dusk",
    "Evening"
];

function getStyles(name, selectedValue, theme) {
    return {
        fontWeight:
            selectedValue === name
                ? theme.typography.fontWeightMedium
                : theme.typography.fontWeightRegular,
    };
}

export default function Pickup() {
    const theme = useTheme();

    // Separate states for each select
    const [location, setLocation] = React.useState('');
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');

    return (
        <Grid
            item
            margin="auto"
            padding="20px"
            borderRadius="12px"
            sx={{ backgroundColor: "white", width: "100%", height: "fit-content" }}
        >
            <Grid container alignItems="center" xs={12}>
                <CardMedia
                    sx={{ width: "13px", height: "13px", mr: "10px" }}
                    component="img"
                    image={`${process.env.PUBLIC_URL}/assets/pickup.png`}
                />
                <Typography>Pick - up</Typography>
            </Grid>

            <Grid container justifyContent="space-around" xs={12}>
                {/* Location Select */}
                <Grid item xs={12} sm={4}>
                    <FormControl
                        sx={{
                            ".MuiOutlinedInput-notchedOutline": {
                                border: "none",
                                borderRadius: "0px",
                                borderRight: "1px solid #c0c0c0",
                            },
                            ".Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderRight: "1px solid",
                                borderColor: "black"
                            },
                            m: 1,
                            width: "100%",
                            mt: 3
                        }}
                    >
                        <Typography>Location</Typography>
                        <Select
                            displayEmpty
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (!selected) {
                                    return <Typography variant='secondary'>Select your city</Typography>;
                                }
                                return selected;
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>Select a city</em>
                            </MenuItem>
                            {cities.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, location, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                {/* Date Select */}
                <Grid item xs={12} sm={4}>
                    <FormControl
                        sx={{
                            ".MuiOutlinedInput-notchedOutline": {
                                border: "none",
                                borderRadius: "0px",
                                borderRight: "1px solid #c0c0c0",
                            },
                            ".Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderRight: "1px solid",
                                borderColor: "black"
                            },
                            m: 1,
                            width: "100%",
                            mt: 3
                        }}
                    >
                        <Typography>Date</Typography>
                        <Select
                            displayEmpty
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (!selected) {
                                    return <Typography variant='secondary'>Select your date</Typography>;
                                }
                                return selected;
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>Select a date</em>
                            </MenuItem>
                            {dates.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, date, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                {/* Time Select */}
                <Grid item xs={12} sm={4}>
                    <FormControl
                        sx={{
                            ".MuiOutlinedInput-notchedOutline": {
                                border: "none",
                                borderRadius: "0px",
                                borderRight: "1px solid #c0c0c0",
                            },
                            ".Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderRight: "1px solid",
                                borderColor: "black"
                            },
                            m: 1,
                            width: "100%",
                            mt: 3
                        }}
                    >
                        <Typography>Time</Typography>
                        <Select
                            displayEmpty
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (!selected) {
                                    return <Typography variant='secondary'>Select your time</Typography>;
                                }
                                return selected;
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>Select a time</em>
                            </MenuItem>
                            {times.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, time, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
    );
}
