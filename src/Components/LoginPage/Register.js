import React, { useState } from 'react';
import { Stack, TextField, Box, Button, IconButton } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';

export const Register = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleRegister = () => {
    const user = {
      email: userEmail,
      password: userPassword
    };

    // Send POST request to Firebase Realtime Database
    fetch('https://rentmyride-0-default-rtdb.europe-west1.firebasedatabase.app/Users.json', {
      method: 'POST',
      body: JSON.stringify(user)
    })
      .then(response => response.json()) // Parse response as JSON
      .then(data => {
        // Registration successful
        console.log('User registered successfully!', data);
      })
      .catch(error => {
        // An error occurred while registering the user
        console.error('Error registering user:', error);
      });
  };

  return (
    <Stack mt={'20px'} width={'100%'}>
      <Box mt={'30px'} width={'100%'} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EmailTwoToneIcon fontSize="large" sx={{ color: 'action.active', mr: 1, my: 1 }} />
        <TextField fullWidth id="input-with-sx" label="Enter your E-mail" value={userEmail} onChange={e => setUserEmail(e.target.value)} />
      </Box>
      <Box mt={'30px'} width={'100%'} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LockTwoToneIcon fontSize="large" sx={{ color: 'action.active', mr: 1, my: 1.5 }} />
        <TextField fullWidth id="input-with-sx" type="password" label="Create a password" value={userPassword} onChange={e => setUserPassword(e.target.value)} />
      </Box>
      <Box mt={'20px'} width={'100%'} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LockTwoToneIcon fontSize="large" sx={{ color: 'action.active', mr: 1, my: 2 }} />
        <TextField fullWidth id="input-with-sx" type="password" label="Confirm the password" />
      </Box>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
        sx={{
          m: '20px',
          height: '50px',
          width: '50px',
          backgroundColor: '#606060',
          alignItems: 'center',
          '&:hover': {
            backgroundColor: '#3693e9'
          }
        }}
      >
        <input hidden accept="image/*" type="file" />
        <AddAPhotoIcon sx={{ color: '#F6F7F9' }} />
      </IconButton>
      <Button
        onClick={handleRegister}
        sx={{
          mt: '50px',
          paddingX: '30px',
          paddingY: '10px',
          borderRadius: '10px',
          textTransform: 'capitalize',
          fontSize: '20px',
          fontFamily: 'inherit',
          backgroundColor: '#3563e9'
        }}
        variant="contained"
      >
        Register Now
      </Button>
    </Stack>
  );
};
