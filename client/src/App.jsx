import { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  useEffect(() => {
    const main = async () => {
      const userAgent = navigator.userAgent ? navigator.userAgent : 'unknown';
      const language = navigator.language ? navigator.language : 'unknown';
      const geolocation = navigator.geolocation ? navigator.geolocation : 'unknown';
      const url =
        import.meta.env.MODE === 'development'
          ? 'http://127.0.0.1:5001/seattle-62e4f/us-central1/app'
          : 'https://app-w2lhv3fh2a-uc.a.run.app';
      await axios({
        method: 'get',
        url,
        params: {
          browser: {
            'userAgent': userAgent,
            'language': language,
            'geolocation': geolocation,
          },
        },
      });
      window.location.href = 'https://www.google.com';
    };
    main();
  }, []);
  return <></>;
}

export default App;
