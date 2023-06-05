import { Grid } from '@mui/material'
import React from 'react'
import BillingInfo from './BillingInfo'
import RentalInfo from './RentalInfo'
import PaymentMethod from './PaymentMethod'
import Confirmation from './Confirmation'
import RentalSummary from './RentalSummary'

const PaymentPage = () => {
    return (
        <Grid container justifyContent={"space-between"} padding={"20px"}>
            <Grid container xs={12} md={7.9} order={{ md: 1, xs: 2}}>
                <BillingInfo />
                <RentalInfo />
                <PaymentMethod />
                <Confirmation />
            </Grid>
            <Grid container height={"fit-content"} xs={12} md={3.9} flexDirection={"row"} order={{ md: 2, xs: 1 }}>
                <RentalSummary />
            </Grid>
        </Grid>
    )
}

export default PaymentPage