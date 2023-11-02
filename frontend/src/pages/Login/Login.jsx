import { Layout } from '@/components/Layout/Layout';
import {
	Card,
	CardContent,
	Typography,
	TextField,
	Button,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import api from '@/api/routes';

const Login = () => {
	const schema = yup.object().shape({
		username: yup.string().required('Введите ник'),
		password: yup
			.string()
			.min(8, 'Не менее 8 символов')
			.max(32, 'Не более 32 символов')
			.required(),
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
		console.log({ data });
		reset();
		console.log(api.loginPath);
		fetch(api.loginPath(), {
			method: 'post',
			body: JSON.stringify({
				username: data.username,
				password: data.password,
			}),
		}).then((json) => console.log(json));
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
