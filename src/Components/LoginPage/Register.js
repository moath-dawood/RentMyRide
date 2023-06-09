import React from 'react'
import { Stack, TextField, Box, Button } from '@mui/material'
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';

export const Register = () => {
    return (
        <Stack mt={"20px"} width={"100%"}>
            <Box mt={"30px"} width={"100%"} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <PersonTwoToneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField fullWidth id="input-with-sx" label="Enter your name" variant="standard" />
            </Box>
            <Box mt={"30px"} width={"100%"} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <EmailTwoToneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField fullWidth id="input-with-sx" label="Enter your E-mail" variant="standard" />
            </Box>
            <Box mt={"30px"} width={"100%"} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <LockTwoToneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField fullWidth id="input-with-sx" label="Create a password" variant="standard" />
            </Box>
            <Box mt={"20px"} width={"100%"} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <LockTwoToneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField fullWidth id="input-with-sx" label="Confirm the password" variant="standard" />
            </Box>
            <Button sx={{ mt: "50px", paddingX: "30px", paddingY: "10px", borderRadius: "10px", textTransform: "capitalize", fontSize: "20px", fontFamily: "inherit", backgroundColor: "#3563e9" }} variant='contained'>Register Now</Button>
        </Stack>
    )
}
