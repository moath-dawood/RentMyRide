import React from "react";
import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles';

const Title = styled('div')(({}) => ({
  display: { xs: "block", sm: "block" },
  width: { xs: "100%", sm: "fit-content" },
  color: "#3563E9",
  marginRight: "30px"
}));

const RentMyRide = () => {
  return (
    <Title>   
       <Typography
      variant="h5"
      noWrap
      component="div"
      sx={{fontWeight:"600", overflow:"unset"}}
    >
      RentMyRide
    </Typography>
    </Title>

  );
};

export default RentMyRide;
