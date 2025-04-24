import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LicensePlate } from './entities/licensePlate.entity';
import { Vehicle } from './entities/vehicle.entity';
import { ParkingHistory } from './entities/parking-history.entity';
import { Repository } from 'typeorm';
const PDFDocument = require('pdfkit-table');

@Injectable()
export class FileReportService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
    @InjectRepository(LicensePlate)
    private licensePlateRepository: Repository<LicensePlate>,
    @InjectRepository(ParkingHistory)
    private parkingHistoryRepository: Repository<ParkingHistory>,
  ) {}

  async generarPDF(day, hour): Promise<Buffer> {
    const history = await this.parkingHistoryRepository.find({
      relations: {
        vehicle: {
          licensePlate: true,
        },
      },
    });

    const pdfBuffer: Buffer = await new Promise((resolve) => {
      const doc = new PDFDocument({ size: 'LETTER', bufferPages: true });

      doc.text(`Reporte de Estacionamiento`, { align: 'center' });
      doc.moveDown();
      doc.text('Este reporte contiene todo el historial registrado.', {
        align: 'left',
      });

      const buffer = [];
      doc.on('data', buffer.push.bind(buffer));
      doc.on('end', () => resolve(Buffer.concat(buffer)));

      doc.table(
        {
          title: 'Historial de Estacionamiento',
          headers: [
            'VIN',
            'Hora Entrada',
            'Hora Salida',
            'Monto Pagado',
            'Placa',
          ],
          rows: history.map((h) => [
            h.vehicle?.vehicle_identification_number ?? '—',
            h.entry_time?.toLocaleString() ?? '—',
            h.exit_time?.toLocaleString() ?? '—',
            `$${h.amount_pay.toFixed(2)}`,
            h.vehicle?.licensePlate?.type ?? '—',
          ]),
        },
        {
          prepareHeader: () => doc.font('Helvetica-Bold'),
          prepareRow: (row, i) => doc.font('Helvetica').fontSize(10),
        },
      );

      doc.end();
    });

    return pdfBuffer;
  }
}
