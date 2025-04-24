import { Controller, Get, Param, Res } from '@nestjs/common';
import { FileReportService } from './file-report.service';

@Controller('file-report')
export class FileReportController {
  constructor(private readonly fileReportService: FileReportService) {}

  @Get('/:day/:hour')
  async downloadPDF(
    @Param('day') day: string,
    @Param('hour') hour: string,
    @Res() res,
  ): Promise<void> {
    const buffer = await this.fileReportService.generarPDF(+day, +hour);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=example.pdf',
      'Content-Length': buffer.length,
    });

    res.end(buffer);
  }
}
