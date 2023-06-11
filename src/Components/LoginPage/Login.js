import React, { useEffect, useState } from 'react'
import { Stack, TextField, Box, Button, Typography, FormGroup } from '@mui/material'
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FB_URL } from '../../API/Firebase';

export const Login = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [allUsers, setAllUsers] = useState([])

    const getUsers = async () => {
        const getAllUsers = await (await fetch(`${FB_URL}/Users.json`)).json()
        setAllUsers(getAllUsers)
    }
    useEffect(() => {
        getUsers();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email == userEmail && allUsers[i].password == userPassword) {
                
                window.location.href = "/"
            }
            
        }
        toast.error("Enter Valid Login informations", { position: toast.POSITION.TOP_CENTER })
    }
    return (
        <Stack mt={"20px"} width={"100%"}>
            <ToastContainer />
            <form onSubmit={handleLogin}>
                <Box mt={"30px"} width={"100%"} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <EmailTwoToneIcon fontSize='large' sx={{ color: 'action.active', mr: 1, my: 1.5 }} />
                    <TextField value={userEmail} onChange={(e => setUserEmail(e.target.value))} fullWidth id="input-with-sx" label="Enter your E-mail" />
                </Box>
                <Box mt={"20px"} width={"100%"} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <LockTwoToneIcon fontSize='large' sx={{ color: 'action.active', mr: 1, my: 2 }} />
                    <TextField value={userPassword} onChange={(e => setUserPassword(e.target.value))} fullWidth type='password' id="input-with-sx" label="Enter your password" />
                </Box>
                <Button sx={{ mt: "50px", paddingX: "30px", paddingY: "10px", borderRadius: "10px", textTransform: "capitalize", fontSize: "20px", fontFamily: "inherit", backgroundColor: "#3563e9" }} fullWidth type='submit' variant='contained'>Login Now</Button>
            </form>

        </Stack>
    )
}
