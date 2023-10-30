import './Layout.scss';

export const Layout = ({ children }) => {
	return (
		<div className="app">
			<header className="header">
				<div className="container">MyChat</div>
			</header>

			<main className="main-content">
				<div className="container h-100">{children}</div>
			</main>

			<footer className="footer"></footer>
		</div>
	);
};
