import { lazy } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import ErrorPage from '@/modules/pages/ErrorPage';
import Layout from '@/modules/core/components/organisms/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'session',
        element: <Layout />,
        children: [
          {
            path: 'home',
            async lazy() {
              const Home = lazy(() => import('@/modules/pages/Home'));
              return { element: <Home /> };
            }
          }
        ]
      },
      {
        path: 'login',
        async lazy() {
          const Login = lazy(() => import('@/modules/pages/Login'));
          return { element: <Login /> };
        }
      },
      { path: '*', element: <div>No page found</div> }
    ]
  }
]);
