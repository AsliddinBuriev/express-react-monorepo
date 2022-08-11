import { Request, Response, NextFunction } from 'express';

export const catchAsyncError = (fn) => {
	return (req: Request, res: Response, next: NextFunction) => {
		return fn(req, res, next).catch(next);
	};
};
