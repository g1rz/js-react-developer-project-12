import ApiError from "../exceptions/ApiError.js";

export default function(err, req, res, next) {
	console.log(err);

	if (err instanceof ApiError) {
		return res.status(err.status).json({statusCode: err.status, message: err.message, errors: err.errors});
	}

	return res.status(500).json({message: 'Произошла непредвиденная ошибка'});
}