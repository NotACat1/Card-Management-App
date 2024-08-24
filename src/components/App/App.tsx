import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import RootPage from '@pages/root/RootPage';
import ListPage, { loader as listLoader } from '@pages/list/ListPage';
import CardPage, { loader as cardLoader } from '@pages/card/CardPage';
import ErrorPage from '@pages/error/ErrorPage';

const router = createHashRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        index: true,
        loader: listLoader,
        element: <ListPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/card/:id',
        loader: cardLoader,
        element: <CardPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/test',
        element: <ErrorPage />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
