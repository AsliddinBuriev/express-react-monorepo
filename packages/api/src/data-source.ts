import { DataSource, EntityTarget, ObjectLiteral } from 'typeorm';

class AppDataSource {
	private dataSource: DataSource;
	constructor() {
		this.dataSource = new DataSource({
			type: 'sqlite',
			database: '../db.sqlite',
			entities: [__dirname + '/**/*.entity{.ts,.js}'],
			synchronize: true,
		});
	}
	initialize(): Promise<DataSource> {
		return this.dataSource.initialize();
	}
	getReository(entity: EntityTarget<ObjectLiteral>): any {
		return this.dataSource.getRepository(entity);
	}
}

export default new AppDataSource();
