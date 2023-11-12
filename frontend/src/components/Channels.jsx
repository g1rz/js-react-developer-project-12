import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

const Channels = () => {
	const channels = useSelector((state) => state.chat.channels);

	const channelList = channels.map(item => (
		<p key={item.id}>{item.name}</p>
	));

	return (
		<div>
			{channelList}
		</div>
	);
};

export default Channels;
