const apiPath = '/api';

export default {
	loginPath: () => [apiPath, 'login'].join('/'),
	dataPath: () => [apiPath, 'data'].join('/'),
};
