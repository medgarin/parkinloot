import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LicensePlateService } from './licensePlate.service';
import { CreateLicensePlate } from './dto/create-licensePlate.dto';
import { UpdateLicensePlate } from './dto/update-licensePlate.dto';

@Controller('LicensePlate')
export class LicensePlateController {
  constructor(private readonly licensePlateService: LicensePlateService) {}
}
