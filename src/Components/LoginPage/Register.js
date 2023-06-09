import React from 'react'
import { Stack, TextField, Box, Button } from '@mui/material'
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';

export const Register = () => {
    return (
        <Stack mt={"20px"} width={"100%"}>
            <Box mt={"30px"} width={"100%"} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <PersonTwoToneIcon fontSize='large' sx={{ color: 'action.active', mr: 1, my: 1 }} />
                <TextField fullWidth id="input-with-sx" label="Enter your name" />
            </Box>
            <Box mt={"30px"} width={"100%"} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <EmailTwoToneIcon fontSize='large' sx={{ color: 'action.active', mr: 1, my:1 }} />
                <TextField fullWidth id="input-with-sx" label="Enter your E-mail" />
            </Box>
            <Box mt={"30px"} width={"100%"} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <LockTwoToneIcon fontSize='large' sx={{ color: 'action.active', mr: 1, my: 1.5 }} />
                <TextField fullWidth id="input-with-sx" type="password" label="Create a password" />
            </Box>
            <Box mt={"20px"} width={"100%"} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <LockTwoToneIcon fontSize='large' sx={{ color: 'action.active', mr: 1, my: 2 }} />
                <TextField fullWidth id="input-with-sx" type="password" label="Confirm the password" />
            </Box>
            <Button sx={{ mt: "50px", paddingX: "30px", paddingY: "10px", borderRadius: "10px", textTransform: "capitalize", fontSize: "20px", fontFamily: "inherit", backgroundColor: "#3563e9" }} variant='contained'>Register Now</Button>
        </Stack>
    )
}
