import { Controller, Post, Delete } from '@nestjs/common';
import { SeederService } from './seeder.service';

@Controller('seeder')
export class SeederController {
  constructor(private readonly seederService: SeederService) {}

  @Post()
  create() {
    return this.seederService.seed();
  }

  @Delete()
  delete() {
    return this.seederService.drop();
  }
}
