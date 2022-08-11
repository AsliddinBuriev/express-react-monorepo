import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../utils/custom-erorr';
export default (
	err: CustomError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	err.statusCode = err.statusCode || 500;
	err.status = err.status || 'error';
	let error = Object.create(err);
	if (process.env.NODE_ENV === 'development') devError(res, error);
	if (process.env.NODE_ENV === 'production') prodError(res, error);
};

const devError = (res: Response, err: CustomError) => {
	res.status(err.statusCode).json({
		status: err.status,
		message: err.message,
		err,
	});
};
const prodError = (res: Response, err: CustomError) => {
	if (err.isOperational) {
		res.status(err.statusCode).json({
			status: err.status,
			message: err.message,
		});
	} else {
		res.status(500).json({
			status: 'error',
			message: 'Something went wrong',
		});
	}
};
