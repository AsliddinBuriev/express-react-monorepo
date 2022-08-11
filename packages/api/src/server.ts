import { config } from 'dotenv';
import { join } from 'path';
import dataSource from './data-source';
import { App } from './app';
config({ path: join(__dirname, '../config.env') });
const { app } = new App();
const port = process.env.PORT || 5000;
dataSource
	.initialize()
	.then(() => {
		app.listen(port, () => {
			console.log(
				`Server is running on port ${port}\nEnvironment: ${process.env.NODE_ENV}`
			);
		});
	})
	.catch((err) => console.log('Database initialization error:', err));
