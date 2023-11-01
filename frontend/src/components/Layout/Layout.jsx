import Container from '@mui/material/Container';

import './Layout.scss';

export const Layout = ({ children }) => {
	return (
		<div className="app">
			<header className="header">
				<div className="container">MyChat</div>
			</header>

			<main className="main-content">
				<Container sx={{ height: '100%' }}>{children}</Container>
			</main>

			<footer className="footer"></footer>
		</div>
	);
};
