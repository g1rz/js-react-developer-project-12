import React from 'react';
import { ThemeProvider } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import theme from '@/theme';
import AuthProvider from '@/providers/AuthProvider';

import { Login, Home, Page404 } from '@/pages';

const App = () => {
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

	return (
		<ThemeProvider theme={theme}>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</ThemeProvider>
	);
};

export default App;
