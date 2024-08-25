import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '@/modules/pages/ErrorPage';
import PageNotFound from '@/modules/pages/PageNotFound';
import Layout from '@/modules/core/components/organisms/Layout';
import RouterGuardian from '@/modules/core/components/organisms/RouterGuardian';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RouterGuardian />,
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
      }
    ]
  },
  { path: '*', element: <PageNotFound /> }
]);
