import { Module } from '@nestjs/common';
import { FileReportService } from './file-report.service';
import { FileReportController } from './file-report.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { ParkingHistory } from './entities/parking-history.entity';
import { LicensePlate } from './entities/licensePlate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle, ParkingHistory, LicensePlate])],
  controllers: [FileReportController],
  providers: [FileReportService],
  exports: [TypeOrmModule],
})
export class FileReportModule {}
