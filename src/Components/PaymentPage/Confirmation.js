import React from 'react'
import { Grid, FormGroup, FormControlLabel, Button, CardMedia } from '@mui/material'
import Title from './Title'
import Checkbox from '@mui/material/Checkbox';

const Confirmation = () => {
  return (
    <Grid xs={12} padding={"15px"} mt={"30px"} sx={{ backgroundColor: "white" }} borderRadius={"10px"}>
      <Title Title={"Confirmation"} Info={"We are getting to the end. Just few clicks and your rental is ready!"} Step={4} />
      <Grid alignItems={"center"} mt={"25px"} height={"55px"} padding={"35px"} paddingY={"7px"} sx={{ backgroundColor: "#F6F7F9" }} borderRadius={"10px"}>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="I agree with sending an Marketing and newsletter emails. No spam, promised!" />
        </FormGroup>
      </Grid>
      <Grid alignItems={"center"} mt={"25px"} height={"55px"} padding={"35px"} paddingY={"7px"} sx={{ backgroundColor: "#F6F7F9" }} borderRadius={"10px"}>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="I agree with our terms and conditions and privacy policy." />
        </FormGroup>
      </Grid>
      <Button sx={{mt:"20px", paddingX:"30px", paddingY:"10px", borderRadius:"8px", textTransform:"capitalize"}} variant='contained'>Rent Now</Button>
      <CardMedia sx={{ width: "32px", height: "32px", marginY: "30px" }} component="img" image={"../assets/secure.png"} />
      <Title Title={"All your data are safe"} Info={"We are using the most advanced security to provide you the best experience ever."}/>
    </Grid>
  )
}

export default Confirmation