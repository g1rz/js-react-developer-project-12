import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '@/index.scss';
import { Login, Home, Page404 } from '@/pages';
import { ThemeProvider } from '@mui/material';

import theme from './theme';

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

console.log(theme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);
