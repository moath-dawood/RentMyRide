import React from 'react'
import { Grid, Typography, Stack, TextField } from '@mui/material';
import Title from './Title';


const BillingInfo = () => {
  return (
    <Grid container xs={12} padding={"15px"} mt={"15px"} sx={{ backgroundColor: "white" }} borderRadius={"10px"}>
      <Grid container pt={"5px"} justifyContent={"space-between"} xs={12} >
        <Title Title={"Billing Info"} Info={"Please enter you billing info"} Step={1} />
        <Grid item mt={"10px"} xs={12} md={5.8} >
          <Stack mb={"20px"}>
            <Typography mb={"10px"} fontWeight={600} variant='main'>Name</Typography>
            <TextField sx={{ backgroundColor: "#F6F7F9" }} placeholder='Your name' variant="outlined" />
          </Stack>
        </Grid>
        <Grid item mt={"10px"} xs={12} md={5.8} >
          <Stack mb={"20px"}>
            <Typography mb={"10px"} fontWeight={600} variant='main'>Phone Number</Typography>
            <TextField sx={{ backgroundColor: "#F6F7F9" }} placeholder='Phone Number' variant="outlined" />
          </Stack>
        </Grid>
        <Grid item xs={12} md={5.8} >
          <Stack mb={"20px"}>
            <Typography mb={"10px"} fontWeight={600} variant='main'>Address</Typography>
            <TextField sx={{ backgroundColor: "#F6F7F9" }} placeholder='Address' variant="outlined" />
          </Stack>
        </Grid>
        <Grid item xs={12} md={5.8} >
          <Stack>
            <Typography mb={"10px"} fontWeight={600} variant='main'>Town / City</Typography>
            <TextField sx={{ backgroundColor: "#F6F7F9" }} placeholder='Town or city' variant="outlined" />
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default BillingInfo