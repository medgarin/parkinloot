import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { Vehicle } from './entities/vehicle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingHistory } from './entities/parking-history.entity';
import { LicensePlate } from './entities/licensePlate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle, ParkingHistory, LicensePlate])],
  controllers: [VehiclesController],
  providers: [VehiclesService],
  exports: [TypeOrmModule],
})
export class VehiclesModule {}
