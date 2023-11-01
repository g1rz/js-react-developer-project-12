import { Layout } from '@/components/Layout/Layout';
import { Card, CardContent, Typography } from '@mui/material';

const Login = () => {
	return (
		<Layout>
			<div className="center">
				<Card sx={{ maxWidth: 600, width: '100%' }}>
					<CardContent>
						<Typography variant="h1">Войти</Typography>
						<form action="post">
							<input
								type="text"
								name="name"
								placeholder="Введите имя"
							/>
							<input type="password" name="password" />
							<button>Отправить</button>
						</form>
					</CardContent>
				</Card>
			</div>
		</Layout>
	);
};

export default Login;
