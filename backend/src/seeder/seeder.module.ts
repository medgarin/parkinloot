import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { LicensePlate } from 'src/modules/vehicles/entities/licensePlate.entity';
import { ParkingHistory } from 'src/modules/vehicles/entities/parking-history.entity';
import { Vehicle } from 'src/modules/vehicles/entities/vehicle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeederController } from './seeder.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle, ParkingHistory, LicensePlate])],
  controllers: [SeederController],
  providers: [SeederService],
})
export class SeederModule {}
