import React from 'react'
import { Grid, Typography, CardMedia, TextField, Stack } from '@mui/material'
import Title from './Title'


const PaymentMethod = () => {
  return (
    <Grid item xs={12} mt={"30px"} padding={"15px"} pb={"20px"} sx={{ backgroundColor: "white" }} borderRadius={"10px"}>
      <Title Title={"Payment Method"} Info={"Please enter your payment method"} Step={3} />
      <Grid container padding={"35px"} sx={{ backgroundColor: "#F6F7F9" }} borderRadius={"10px"}>
        <Grid container mb={"25px"} justifyContent={"space-between"}>
          <Grid container xs={6} mt={"0px"} alignItems={"center"} flexDirection={"row"}>
            <CardMedia sx={{ width: "15px", height: "15px", marginRight: "10px" }} component="img" image={"../assets/Pickup.png"} />
            <Typography variant='main' fontWeight={600}>Credit Card</Typography>
          </Grid>
          <Grid container xs={6} justifyContent={"flex-end"}>
            <CardMedia sx={{ width: "92px", height: "20px", marginRight: "10px" }} component="img" image={"../assets/Visa.png"} />
          </Grid>
        </Grid>
        <Grid container justifyContent={"space-between"} sx={12}>
          <Grid mt={"10px"} xs={12} md={5.8} >
            <Stack>
              <Typography mb={"10px"} fontWeight={600} variant='main'>Card Number</Typography>
              <TextField sx={{ backgroundColor: "white" }} placeholder='Card Number' variant="outlined" />
            </Stack>
          </Grid>
          <Grid item mt={"10px"} xs={12} md={5.8} >
            <Stack>
              <Typography mb={"10px"} fontWeight={600} variant='main'>Expiration Date</Typography>
              <TextField sx={{ backgroundColor: "white" }} placeholder='DD/MM/YY' variant="outlined" />
            </Stack>
          </Grid>
          <Grid item mt={"10px"} xs={12} md={5.8} >
            <Stack>
              <Typography mb={"10px"} fontWeight={600} variant='main'>Card Holder</Typography>
              <TextField sx={{ backgroundColor: "white" }} placeholder='Card Holder' variant="outlined" />
            </Stack>
          </Grid>
          <Grid item mt={"10px"} xs={12} md={5.8} >
            <Stack>
              <Typography mb={"10px"} fontWeight={600} variant='main'>CVC</Typography>
              <TextField sx={{ backgroundColor: "white" }} placeholder='CVC' variant="outlined" />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid items mt={"25px"} height={"50px"} padding={"35px"} paddingY={"15px"} sx={{ backgroundColor: "#F6F7F9" }} borderRadius={"10px"}>
        <Grid container mb={"25px"} justifyContent={"space-between"}>
          <Grid container xs={6} mt={"0px"} alignItems={"center"} flexDirection={"row"}>
            <CardMedia sx={{ width: "20px", height: "20px", marginRight: "10px" }} component="img" image={"../assets/circle.png"} />
            <Typography variant='main' fontWeight={600}>PayPal</Typography>
          </Grid>
          <Grid container xs={6} justifyContent={"flex-end"}>
            <CardMedia sx={{ width: "100px", height: "24px", marginRight: "10px" }} component="img" image={"../assets/PayPal.png"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item mt={"25px"} height={"50px"} padding={"35px"} paddingY={"15px"} sx={{ backgroundColor: "#F6F7F9" }} borderRadius={"10px"}>
        <Grid container mb={"25px"} justifyContent={"space-between"}>
          <Grid container xs={6} mt={"0px"} alignItems={"center"} flexDirection={"row"}>
            <CardMedia sx={{ width: "20px", height: "20px", marginRight: "10px" }} component="img" image={"../assets/circle.png"} />
            <Typography variant='main' fontWeight={600}>Bitcoin</Typography>
          </Grid>
          <Grid container xs={6} justifyContent={"flex-end"}>
            <CardMedia sx={{ width: "94px", height: "20px", marginRight: "10px" }} component="img" image={"../assets/Bitcoin.png"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PaymentMethod