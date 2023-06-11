import React from 'react'
import { Grid, Rating, FormControl, Input, InputLabel, InputAdornment } from '@mui/material'


const WriteReview = () => {
    return (
        <Grid container mb={"20px"} xs={12}>
            <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="input-with-icon-adornment">
                    Write a review
                </InputLabel>
                <Input
                    endAdornment={
                        <InputAdornment position="end">
                            <Rating precision={0.5}
                            />
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Grid>
    )
}

export default WriteReview