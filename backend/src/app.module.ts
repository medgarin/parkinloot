import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { LicensePlate } from './modules/licence-plate/entities/licensePlate.entity';
import { LicensePlateModule } from './modules/licence-plate/licensePlate.module';
import { VehiclesModule } from './modules/vehicles/vehicles.module';
import { Vehicle } from './modules/vehicles/entities/vehicle.entity';
import { ParkingHistory } from './modules/vehicles/entities/parking-history.entity';
import { SeederModule } from './seeder/seeder.module';
import { FileReportModule } from './modules/file-report/file-report.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: `${process.env.DB_HOST}`,
      port: 5432,
      username: `${process.env.DB_USER}`,
      password: `${process.env.DB_PASSWORD}`,
      database: `${process.env.DB_NAME}`,
      entities: [LicensePlate, Vehicle, ParkingHistory],
      autoLoadEntities: true,
      synchronize: true,
    }),
    LicensePlateModule,
    VehiclesModule,
    SeederModule,
    FileReportModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
