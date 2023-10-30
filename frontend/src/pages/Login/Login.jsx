import React from 'react';
import { Layout } from '@/components/Layout/Layout';
import Card from '@/components/Card/Card';

const Login = () => {
	return (
		<Layout>
			<div className="center">
				<Card className="login" title="Войти"></Card>
			</div>
		</Layout>
	);
};

export default Login;
