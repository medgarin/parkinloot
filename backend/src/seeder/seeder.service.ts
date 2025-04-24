import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seeder } from 'nestjs-seeder';
import { LicensePlate } from 'src/modules/licence-plate/entities/licensePlate.entity';
import { ParkingHistory } from 'src/modules/vehicles/entities/parking-history.entity';
import { Vehicle } from 'src/modules/vehicles/entities/vehicle.entity';

@Injectable()
export class SeederService implements Seeder {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
    @InjectRepository(LicensePlate)
    private licensePlateRepository: Repository<LicensePlate>,
    @InjectRepository(ParkingHistory)
    private parkingHistoryRepository: Repository<ParkingHistory>,
  ) {}

  async seed() {
    try {
      const licensePlates = [
        { type: 'official', rate_per_minute: 0 },
        { type: 'residents', rate_per_minute: 1 },
        { type: 'no-residents', rate_per_minute: 3 },
      ];

      await this.licensePlateRepository.insert(licensePlates);
      const savedLicensePlates = await this.licensePlateRepository.find();

      const vehicles: Partial<Vehicle>[] = [];

      for (let index = 0; index < 30; index++) {
        const vehicleIdentificationNumber = Math.random()
          .toString(36)
          .substring(2, 9);

        const randomLicensePlate =
          savedLicensePlates[
            Math.floor(Math.random() * savedLicensePlates.length)
          ];

        vehicles.push({
          licensePlate: randomLicensePlate,
          vehicle_identification_number: vehicleIdentificationNumber,
        });
      }

      const savedVehicles = await this.vehicleRepository.save(vehicles);

      const parkingHistories: Partial<ParkingHistory>[] = savedVehicles.map(
        (vehicle) => {
          const now = new Date();
          const past = new Date(
            now.getTime() - Math.floor(Math.random() * 24 * 60 * 60 * 1000),
          );
          const duration = Math.floor(Math.random() * (5 * 60 - 30) + 30);
          const exit = new Date(past.getTime() + duration * 60 * 1000);

          const rate = vehicle.licensePlate?.rate_per_minute ?? 0;
          const amount = duration * rate;

          return {
            vehicle,
            entry_time: past,
            exit_time: exit,
            amount_pay: amount,
          };
        },
      );

      await this.parkingHistoryRepository.save(parkingHistories);

      return `seeder created`;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('el registro ya existe');
      }
    }
  }

  async drop() {
    await this.parkingHistoryRepository.delete({});
    await this.vehicleRepository.delete({});
    await this.licensePlateRepository.delete({});
    return `seeder remove`;
  }
}
