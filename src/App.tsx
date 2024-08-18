import './assets/css/reset.css';
import './assets/css/App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/modules/core/routes/index';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
