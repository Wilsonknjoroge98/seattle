import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../src/NotFound';
import App from '../src/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <NotFound />,
  },
]);

export default router;
