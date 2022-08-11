import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import globalErrorHandler from './controllers/error.controller';
import userRoutes from './routes/users.routes';

export class App {
	app: express.Application;
	constructor() {
		this.app = express();
		this.middlewares();
		this.routes();
		this.errorHandler();
		this.settings();
	}
	middlewares() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(cors());
	}
	routes() {
		this.app.use('/api/users', userRoutes);
	}
	errorHandler() {
		this.app.use(globalErrorHandler);
	}
	settings() {}
}
