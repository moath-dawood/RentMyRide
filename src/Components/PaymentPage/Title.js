import { Grid, Typography } from '@mui/material'
import React from 'react'

const Title = ({Title, Info, Step}) => {
    return (
        <Grid container xs={12}>
            <Grid container xs={12}>
                <Typography mb={"5px"} fontWeight={600} variant='main'>{Title}</Typography>
            </Grid>
            <Grid mb={"20px"} container justifyContent={"space-between"} xs={12} >
                <Typography fontWeight={500} variant='secondary'>{Info}</Typography>
                {Step && <Typography fontWeight={500} variant='secondary'>Step {Step} of 4</Typography>
                }
            </Grid>
        </Grid>
    )
}

export default Title