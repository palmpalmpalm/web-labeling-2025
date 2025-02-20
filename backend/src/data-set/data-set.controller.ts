import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Patch,
} from '@nestjs/common';

import { DataSet, Prisma } from '@prisma/client';

import { DataSetService } from './data-set.service';

@Controller('data-sets')
export class DataSetController {
  constructor(private readonly dataSetService: DataSetService) {}

  @Post()
  async createDataSet(
    @Body() data: Prisma.DataSetCreateInput,
  ): Promise<DataSet> {
    return this.dataSetService.createDataSet(data);
  }

  @Get()
  async getDataSets(): Promise<DataSet[]> {
    return this.dataSetService.getDataSets();
  }

  @Get(':id')
  async getDataSetById(@Param('id') id: string): Promise<DataSet | null> {
    return this.dataSetService.getDataSetById(id);
  }

  @Patch(':id')
  async updateDataSet(
    @Param('id') id: string,
    @Body() data: Prisma.DataSetUpdateInput,
  ): Promise<DataSet> {
    return this.dataSetService.updateDataSet(id, data);
  }

  @Delete(':id')
  async deleteDataSet(@Param('id') id: string): Promise<DataSet> {
    return this.dataSetService.deleteDataSet(id);
  }
}
