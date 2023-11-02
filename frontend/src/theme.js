import { createTheme } from '@mui/material';

const theme = createTheme({
	typography: {
		h1: {
			fontSize: '3rem',
			marginBottom: 20,
		},
	},
	components: {
		Card: {
			padding: 40,
		},
	},
});

export default theme;
