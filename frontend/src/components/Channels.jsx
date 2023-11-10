import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

const Channels = () => {
	const channels = useSelector((state) => state.chat.channels);
	return (
		<div>
			{channels.length &&
				channels.forEach((channel) => <div>{channel.name}</div>)}
		</div>
	);
};

export default Channels;
