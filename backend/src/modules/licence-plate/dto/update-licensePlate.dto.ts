import { PartialType } from '@nestjs/mapped-types';
import { CreateLicensePlate } from './create-licensePlate.dto';

export class UpdateLicensePlate extends PartialType(CreateLicensePlate) {}
