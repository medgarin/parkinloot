import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Vehicle } from './vehicle.entity';

@Entity()
export class ParkingHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  entry_time: Date;

  @Column({ type: 'timestamp', nullable: true })
  exit_time: Date;

  @Column({ default: 0 })
  amount_pay: number;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.id, {
    eager: true,
  })
  @JoinColumn()
  vehicle: Vehicle;
}
