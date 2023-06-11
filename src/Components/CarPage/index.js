import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import CarDetail from './CarDetail'
import ReviewsContainer from './ReviewsContainer'
import CarPics from './CarPics'
import { Grid } from '@mui/material'
import { FB_URL } from '../../API/Firebase';
import useHttp from '../../hooks/useHttp';

const CarPage = () => {
  const [retrievedCars, setRetrievedCars] = useState([]);
  const [retrievedReviews, setRetrievedReviews] = useState([]);
  const { carId } = useParams()

  //const { isLoading, error, sendRequest, data } = useHttp();

  //const handleData = (data) => {
    //return data;
  //}
  useEffect(() => {
    //const getData = () => {
      //const response = sendRequest({
        //url: `${FB_URL}/Cars/PopularCars/${carId.slice(1)}`
      //}, handleData);
      //setTransformedCars(response)
    //}
    const getCars = async () => {
      const response = await fetch(`${FB_URL}/Cars/PopularCars/${carId.slice(1)}.json`)
      const car = await response.json()
      setRetrievedCars(car)
      }
    const getReviews = async () => {
    const response = await fetch(`${FB_URL}/Cars/Reviews/${carId.slice(1)}/Reviews.json`)
    const car = await response.json()
    setRetrievedReviews(car)
    }
    getReviews();
    getCars()
  }, []);
  return (
    <Grid justifyContent={"space-between"} mt={"10px"} container xs={12}>
      <Grid container justifyContent={"center"} sm={12} md={5.5}>
        <CarPics car={retrievedCars} />
      </Grid>
      <Grid container justifyContent={"center"} p={"20px"} sm={12} md={5.5}>
        <CarDetail car={retrievedCars} rating={retrievedCars.rating} />
      </Grid>
      <Grid item xs={12} p={"20px"}>
        <ReviewsContainer reviews={retrievedReviews} />
      </Grid>
    </Grid>
  )
}

export default CarPage