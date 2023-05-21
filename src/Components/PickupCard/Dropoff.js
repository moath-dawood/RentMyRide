import * as React from 'react';
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

const names = [
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


function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function Dropoff() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <Grid margin={"auto"} marginY={"50px"} padding={"20px"} borderRadius={"12px"} sx={{ backgroundColor: "white", width: "fit-content", height:{xs:"300px", sm:"fit-content"} }}>
            <Grid container alignItems={"center"} justifyContent={"space-around"} xs={4} sm={2.5} md={2} lg={1.8}>
                <CardMedia
                    sx={{ width: "13px", height: "13px" }}
                    component="img"
                    image={"assets/Dropoff.png"}
                />
                <Typography>Drop - Off</Typography>
            </Grid>
           
            <FormControl sx={{ m: 1, width:{xs:100, sm:150, md:200}, mt: 3 }}>
            <Typography>Locations</Typography>
                <Select
                    displayEmpty
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <Typography variant='secondary'>Select your city</Typography>
                                ;
                        }

                        return selected.join(', ');
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>Select a city</em>
                    </MenuItem>
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width:{xs:100, sm:150, md:200}, mt: 3 }}>
            <Typography>Date</Typography>
                <Select
                    displayEmpty
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <Typography variant='secondary'>Select your date</Typography>
                                ;
                        }

                        return selected.join(', ');
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>Select a date</em>
                    </MenuItem>
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width:{xs:100, sm:150, md:200}, mt: 3 }}>
            <Typography>Time</Typography>
                <Select
                    displayEmpty
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <Typography variant='secondary'>Select your time</Typography>
                                ;
                        }

                        return selected.join(', ');
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>Select a time</em>
                    </MenuItem>
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    );
}