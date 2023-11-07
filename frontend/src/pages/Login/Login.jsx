import { Layout } from '@/components/Layout/Layout';
import {
	Card,
	CardContent,
	Typography,
	TextField,
	Button,
	Alert,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import api from '@/api/routes';
import React from 'react';
import AuthContext from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [isInvalid, setIsInvalid] = React.useState(false);
	const { auth, setAuth } = React.useContext(AuthContext);
	const navigate = useNavigate();

	const schema = yup.object().shape({
		username: yup.string().required('Введите ник'),
		password: yup
			.string()
			.min(5, 'Не менее 5 символов')
			.max(32, 'Не более 32 символов')
			.required('Введите пароль'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmitHandler = (data) => {
		reset();
		const sendData = {
			username: data.username,
			password: data.password,
		};
		fetch(api.loginPath(), {
			method: 'post',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify(sendData),
		})
			.then((response) => response.json())
			.then((json) => {
				if (json.statusCode && json.statusCode === 401) {
					setIsInvalid(true);
				} else {
					setIsInvalid(false);
					console.log(json);
					localStorage.setItem('token', json.token);
					setAuth({
						isAuth: true,
					});
					return navigate('/');
				}
				console.log(auth);
			});
	};

	return (
		<Layout>
			<div className="center">
				<Card sx={{ maxWidth: 400, width: '100%' }}>
					<CardContent>
						<Typography variant="h1" className="title">
							Войти
						</Typography>
						<form onSubmit={handleSubmit(onSubmitHandler)}>
							<TextField
								{...register('username')}
								label="Ваш ник"
								variant="outlined"
								size="small"
								fullWidth
								margin="normal"
								error={Boolean(errors.username)}
								helperText={errors.username?.message}
							/>
							<TextField
								{...register('password')}
								type="password"
								label="Пароль"
								variant="outlined"
								size="small"
								fullWidth
								margin="normal"
								error={Boolean(errors.password)}
								helperText={errors.password?.message}
							/>

							<Button type="submit" variant="contained">
								Отправить
							</Button>
							{isInvalid && (
								<Alert
									severity="error"
									sx={{ marginTop: '20px' }}
								>
									Логин или пароль неверные
								</Alert>
							)}
						</form>
					</CardContent>
					<CardContent>
						<Typography>
							Нет аккаунта? <Link to="/registr">Регистрация</Link>
						</Typography>
					</CardContent>
				</Card>
			</div>
		</Layout>
	);
};

export default Login;
