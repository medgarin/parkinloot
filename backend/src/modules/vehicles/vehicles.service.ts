import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';
import { LicensePlate } from './entities/licensePlate.entity';
import { ParkingHistory } from './entities/parking-history.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
    @InjectRepository(LicensePlate)
    private licensePlateRepository: Repository<LicensePlate>,
    @InjectRepository(ParkingHistory)
    private parkingHistoryRepository: Repository<ParkingHistory>,
  ) {}

  async create(createVehicleDto: CreateVehicleDto) {
    try {
      const licensePlate = await this.licensePlateRepository.findOne({
        where: { id: createVehicleDto.licensePlateId },
      });

      if (!licensePlate) {
        throw new NotFoundException('Placa no encontrada');
      }

      let vehicle = await this.vehicleRepository.findOne({
        where: {
          vehicle_identification_number:
            createVehicleDto.vehicle_identification_number,
        },
        relations: ['licensePlate'],
      });

      if (vehicle) {
        const existingParking = await this.parkingHistoryRepository.findOne({
          where: {
            vehicle: { id: vehicle.id },
            exit_time: IsNull(),
          },
          relations: ['vehicle'],
        });

        if (existingParking) {
          throw new ConflictException('el vehiculo ya esta estacionado');
        }
      }

      if (!vehicle) {
        vehicle = this.vehicleRepository.create({
          vehicle_identification_number:
            createVehicleDto.vehicle_identification_number,
          licensePlate,
        });

        vehicle = await this.vehicleRepository.save(vehicle);
      }

      const parkingHistory = this.parkingHistoryRepository.create({
        vehicle: vehicle,
        entry_time: new Date(),
      });

      return await this.parkingHistoryRepository.save(parkingHistory);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async chargeParking(vin: string) {
    try {
      const vehicle = await this.vehicleRepository.findOne({
        where: { vehicle_identification_number: vin },
        relations: ['licensePlate'],
      });

      if (!vehicle) {
        throw new NotFoundException('no existe el vehiculo');
      }
      const licensePlate = await this.licensePlateRepository.findOne({
        where: { id: vehicle.licensePlate.id },
      });

      if (!licensePlate) {
        throw new NotFoundException('no existe la matricula');
      }

      const parkingHistory = await this.parkingHistoryRepository.findOne({
        where: {
          vehicle: { id: vehicle?.id },
          exit_time: IsNull(),
        },
      });

      if (!parkingHistory) {
        throw new NotFoundException('no existe en el historial');
      }

      const nowDate = new Date();
      parkingHistory.exit_time = nowDate;
      const entryDate = parkingHistory.entry_time;
      const diferenceMinutes = Math.floor(
        (nowDate.getTime() - entryDate.getTime()) / 1000 / 60,
      );

      parkingHistory.amount_pay =
        diferenceMinutes * licensePlate.rate_per_minute;

      await this.parkingHistoryRepository.save(parkingHistory);

      return parkingHistory.amount_pay;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async generateReportPFD(day: number, hour: number) {
    try {
    } catch (error) {}
  }
}
