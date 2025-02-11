import { Injectable } from '@nestjs/common';

import { DataSet, Prisma } from '@prisma/client';

import { PrismaService } from 'src/libs/prisma/prisma.service';

@Injectable()
export class DataSetService {
  constructor(private readonly prisma: PrismaService) {}

  async createDataSet(data: Prisma.DataSetCreateInput): Promise<DataSet> {
    return this.prisma.dataSet.create({ data });
  }

  async getDataSets(): Promise<DataSet[]> {
    return this.prisma.dataSet.findMany();
  }

  async getDataSetById(id: string): Promise<DataSet | null> {
    return this.prisma.dataSet.findUnique({ where: { id } });
  }

  async updateDataSet(
    id: string,
    data: Prisma.DataSetUpdateInput,
  ): Promise<DataSet> {
    return this.prisma.dataSet.update({ where: { id }, data });
  }

  async deleteDataSet(id: string): Promise<DataSet> {
    return this.prisma.dataSet.delete({ where: { id } });
  }
}
