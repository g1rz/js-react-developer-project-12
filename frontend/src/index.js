import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Page404 from './pages/Page404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Page404/>
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
