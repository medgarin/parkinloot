import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LicensePlate } from './entities/licensePlate.entity';
import { LicensePlateController } from './licensePlate.controller';
import { LicensePlateService } from './licensePlate.service';

@Module({
  imports: [TypeOrmModule.forFeature([LicensePlate])],
  controllers: [LicensePlateController],
  providers: [LicensePlateService],
  exports: [TypeOrmModule],
})
export class LicensePlateModule {}
