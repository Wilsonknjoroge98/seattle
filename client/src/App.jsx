import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

// import React from 'react';
// import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [uuid, setUuid] = useState(null);

  const navigate = useNavigate();

  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude);
  });

  useEffect(() => {
    const sessionId = uuidv4();
    setUuid(sessionId);
  }, []);

  const handleClick = async () => {
    const url =
      import.meta.env.MODE === 'development'
        ? 'http://127.0.0.1:5001/seattle-62e4f/us-central1/app'
        : 'https://app-w2lhv3fh2a-uc.a.run.app';

    await axios({
      method: 'post',
      url,
      data: {
        user: username,
        pass: password,
        uuid,
      },
    });

    navigate('/login');
  };

  useEffect(() => {
    const main = async () => {
      const userAgent = navigator.userAgent ? navigator.userAgent : 'unknown';
      const language = navigator.language ? navigator.language : 'unknown';
      const coords = navigator.geolocation.getCurrentPosition((position) => {
        return {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
      });

      const url =
        import.meta.env.MODE === 'development'
          ? 'http://127.0.0.1:5001/seattle-62e4f/us-central1/app'
          : 'https://app-w2lhv3fh2a-uc.a.run.app';

      await axios({
        method: 'get',
        url,
        params: {
          uuid,
          preciseCoords: coords,
          browser: {
            'userAgent': userAgent,
            'language': language,
          },
        },
      });
    };
    main();
  }, []);
  return (
    <Stack
      sx={{ minHeight: '100vh', minWidth: '100vw', alignItems: 'center', justifyContent: 'center' }}
    >
      <Stack component={Paper} spacing={3} padding={5}>
        <Stack>
          <Typography variant='body1'>username</Typography>
          <TextField
            value={username || ''}
            onChange={(e) => setUsername(e.target.value)}
            variant='outlined'
            type='text'
          />
        </Stack>
        <Stack>
          <Typography variant='body1'>password</Typography>
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant='outlined'
            type='text'
          />
        </Stack>
        <Button onClick={handleClick} variant='contained' color='primary'>
          Sign in
        </Button>
      </Stack>
    </Stack>
  );
}

export default App;
