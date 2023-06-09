import React from 'react'
import { styled } from '@mui/system';
import { Grid, Typography } from '@mui/material'
import Tabs from '@mui/base/Tabs';
import TabsList from '@mui/base/TabsList';
import TabPanel from '@mui/base/TabPanel';
import Tab from '@mui/base/Tab';
import { tabClasses } from '@mui/base/Tab';
import RentMyRide from '../RentMyRide'
import { Login } from './Login';
import { Register } from './Register';

const LoginPage = () => {
    const StyledTab = styled(Tab)`
    padding: 10px;
    margin-right: 10px;
    border: none;
    border-radius: 10px;
    background-color: #F6F7F9;
    color: rgba(77,118,236,1);
    &:hover {
        color: #fff;
        background-color: #658df1;
      }
    
      &:focus {
        color: #fff;
        background-color: #3563e9;
      }
    
      &.${tabClasses.selected} {
        color: #fff;
        background-color: #3563e9;
      }
  `;

    const StyledTabs = styled(Tabs)`
    width:100%;
  `;

    return (
        <Grid container height={"100vh"} xs={12} sx={{ background: "#F6F7F9" }}>
            <Grid container p={"15px"} m={"auto"} xs={9} sm={6} md={4} borderRadius={"10px"} sx={{ backgroundColor: "white" }} >
                <Grid container mb={"20px"} xs={12} justifyContent={"center"}>
                    <RentMyRide />
                </Grid>
                <StyledTabs defaultValue={1}>
                    <TabsList>
                        <StyledTab value={1}><Typography variant='main' fontWeight={600} fontSize={"23px"} >Login</Typography></StyledTab>
                        <StyledTab value={2}><Typography variant='main' fontWeight={600} fontSize={"23px"} >Register</Typography></StyledTab>
                    </TabsList>
                    <TabPanel value={1}>
                        <Login />
                    </TabPanel>
                    <TabPanel value={2}>
                        <Register />
                    </TabPanel>
                </StyledTabs>
            </Grid>
        </Grid>
    )
}

export default LoginPage


