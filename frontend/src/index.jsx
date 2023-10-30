import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '@/index.scss';
import { Login, Home, Page404 } from '@/pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <Page404 />,
	},
	{
		path: '/login',
		element: <Login />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
