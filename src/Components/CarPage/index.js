import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import CarDetail from './CarDetail'
import ReviewsContainer from './ReviewsContainer'
import CarPics from './CarPics'
import { Grid } from '@mui/material'


const firebaseDomain = "https://rentmyride-0-default-rtdb.europe-west1.firebasedatabase.app"

const CarPage = () => {
  useEffect(() => {
    getCars();
  });
  const [retrievedCar, setTransformedCars] = useState([]);
  const { carId } = useParams()
  const getCars = async () => {
    const Car = await (await fetch(`${firebaseDomain}/Cars/PopularCars/${carId.slice(1)}.json`)).json()
    setTransformedCars(Car)
  }

  return (
    <Grid justifyContent={"space-between"} mt={"10px"} container xs={12}>
      <Grid container justifyContent={"center"} sm={12} md={5.5}>
        <CarPics car={retrievedCar} />
      </Grid>
      <Grid container justifyContent={"center"} p={"20px"} sm={12} md={5.5}>
        <CarDetail car={retrievedCar} />
      </Grid>
      <Grid xs={12} p={"20px"}>
        <ReviewsContainer />
      </Grid>
    </Grid>
  )
}

export default CarPage