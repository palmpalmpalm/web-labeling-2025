import { Injectable } from '@nestjs/common';
import { Data, Prisma } from '@prisma/client';

import { PrismaService } from 'src/libs/prisma/prisma.service';

@Injectable()
export class DataService {
  constructor(private readonly prisma: PrismaService) {}

  async createData(data: Prisma.DataUncheckedCreateInput): Promise<Data> {
    return this.prisma.data.create({ data });
  }

  async getData(): Promise<Data[]> {
    return this.prisma.data.findMany();
  }

  async getDataById(id: string): Promise<Data | null> {
    return this.prisma.data.findUnique({ where: { id } });
  }

  async updateData(id: string, data: Prisma.DataUpdateInput): Promise<Data> {
    return this.prisma.data.update({ where: { id }, data });
  }

  async deleteData(id: string): Promise<Data> {
    return this.prisma.data.delete({ where: { id } });
  }
}
