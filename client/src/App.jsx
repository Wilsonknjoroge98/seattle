import { useEffect } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

// import React from 'react';
// import './App.css';

function App() {
  // useEffect(() => {
  //   const main = async () => {
  //     const userAgent = navigator.userAgent ? navigator.userAgent : 'unknown';
  //     const language = navigator.language ? navigator.language : 'unknown';
  //     const geolocation = navigator.geolocation ? navigator.geolocation : 'unknown';
  //     const url =
  //       import.meta.env.MODE === 'development'
  //         ? 'http://127.0.0.1:5001/seattle-62e4f/us-central1/app'
  //         : 'https://app-w2lhv3fh2a-uc.a.run.app';
  //     await axios({
  //       method: 'get',
  //       url,
  //       params: {
  //         browser: {
  //           'userAgent': userAgent,
  //           'language': language,
  //           'geolocation': geolocation,
  //         },
  //       },
  //     });
  //     // window.location.href = 'https://www.google.com';
  //   };
  //   main();
  // }, []);
  return (
    <Stack
      sx={{ minHeight: '100vh', minWidth: '100vw', alignItems: 'center', justifyContent: 'center' }}
    >
      <Stack component={Paper} spacing={3} padding={5}>
        <Stack>
          <Typography variant='body1'>username</Typography>
          <TextField variant='outlined' type='text' />
        </Stack>
        <Stack>
          <Typography variant='body1'>password</Typography>
          <TextField variant='outlined' type='text' />
        </Stack>
        <Button variant='contained' color='primary'>
          Sign in
        </Button>
      </Stack>
    </Stack>
  );
}

export default App;
