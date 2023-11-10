import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout/Layout';
import AuthContext from '@/contexts/AuthContext';

const Home = () => {
	const { isAuth } = React.useContext(AuthContext);
	const navigate = useNavigate();

	React.useEffect(() => {
		if (!isAuth) {
			return navigate('/login');
		}
	});

	return (
		<Layout>
			<div>Home</div>
		</Layout>
	);
};

export default Home;
