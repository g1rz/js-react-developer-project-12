import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Layout } from '@/components/Layout/Layout';
import AuthContext from '@/contexts/AuthContext';

import {
	setChannels,
	setMessages,
	setCurrentChannelId,
} from '@/slices/chatSlice.js';

import api from '@/api/routes';
import Channels from '../components/Channels';

const Home = () => {
	const { isAuth } = React.useContext(AuthContext);
	const navigate = useNavigate();

	const massages = useSelector((state) => state.chat.messages);
	const currentChannelId = useSelector(
		(state) => state.chat.currentChannelId
	);

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
				console.log(json.channels);
				dispatch(setChannels(json.channels));
				dispatch(setMessages(json.messages));
				dispatch(setCurrentChannelId(json.currentChannelId));
			});
	}, []);

	return (
		<Layout>
			<div>Home</div>
			<Channels />
			{currentChannelId}
		</Layout>
	);
};

export default Home;
