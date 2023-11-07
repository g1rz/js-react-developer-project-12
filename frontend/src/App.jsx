import React from 'react';
import { ThemeProvider } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import theme from './theme';
import AuthContext from './contexts/AuthContext';

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
	const isAuth = localStorage.getItem('token') ? true : false;

	const [auth, setAuth] = React.useState({ isAuth });

	return (
		<ThemeProvider theme={theme}>
			<AuthContext.Provider value={{ auth, setAuth }}>
				<RouterProvider router={router} />
			</AuthContext.Provider>
		</ThemeProvider>
	);
};

export default App;
