import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import BillingInfo from './BillingInfo'
import RentalInfo from './RentalInfo'
import PaymentMethod from './PaymentMethod'
import Confirmation from './Confirmation'
import RentalSummary from './RentalSummary'
import { useParams } from 'react-router-dom'

const firebaseDomain = "https://rentmyride-0-default-rtdb.europe-west1.firebasedatabase.app"

const PaymentPage = () => {
useEffect(() => {
    getCars();
  }, []);
  const [retrievedCar, setTransformedCars] = useState([]);
  const {carId} = useParams()
  const getCars = async () => {
    const Car = await (await fetch(`${firebaseDomain}/Cars/PopularCars/${carId.slice(1)}.json`)).json()
    setTransformedCars(Car)
    console.log(carId)
  }
    return (
        <Grid container justifyContent={"space-between"} padding={"20px"}>
            <Grid container xs={12} md={7.9} order={{ md: 1, xs: 2}}>
                <BillingInfo />
                <RentalInfo />
                <PaymentMethod />
                <Confirmation />
            </Grid>
            <Grid container height={"fit-content"} xs={12} md={3.9} flexDirection={"row"} order={{ md: 2, xs: 1 }}>
                <RentalSummary car={retrievedCar}/>
            </Grid>
        </Grid>
    )
}

export default PaymentPage