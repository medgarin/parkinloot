import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { LicensePlate } from './licensePlate.entity';
import { ParkingHistory } from './parking-history.entity';

@Entity()
export class Vehicle {
  @OneToMany(() => ParkingHistory, (history) => history.vehicle)
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => LicensePlate)
  @JoinColumn()
  licensePlate: LicensePlate;

  @Column()
  vehicle_identification_number: string;
}
