import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card, Grid } from '@mui/material';

import { Layout } from '@/components/Layout/Layout';
import Channels from '@/components/Channels';

import AuthContext from '@/contexts/AuthContext';

import {
	setChannels,
	setMessages,
	setCurrentChannelId,
} from '@/slices/chatSlice.js';

import api from '@/api/routes';

const Home = () => {
	const { isAuth } = React.useContext(AuthContext);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	React.useEffect(() => {
		if (!isAuth) {
			return navigate('/login');
		}
		const token = localStorage.getItem('token');

		fetch(api.dataPath(), {
			method: 'get',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => response.json())
			.then((json) => {
				dispatch(setChannels(json.channels));
				dispatch(setMessages(json.messages));
				dispatch(setCurrentChannelId(json.currentChannelId));
			});
	}, [isAuth]);

	return (
		<Layout>
			<Card sx={{ marginTop: '50px' }}>
				<Grid container>
					<Grid item xs={3}>
						<Channels />
					</Grid>
					<Grid item xs={9}></Grid>
				</Grid>
			</Card>
		</Layout>
	);
};

export default Home;
