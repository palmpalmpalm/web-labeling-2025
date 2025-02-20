import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Patch,
} from '@nestjs/common';

import { Data, Prisma } from '@prisma/client';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  async getData(): Promise<Data[]> {
    return this.dataService.getData();
  }

  @Get(':id')
  async getDataById(@Param('id') id: string): Promise<Data | null> {
    return this.dataService.getDataById(id);
  }

  @Post()
  async createData(
    @Body() data: Prisma.DataUncheckedCreateInput,
  ): Promise<Data> {
    return this.dataService.createData(data);
  }

  @Patch(':id')
  async updateData(
    @Param('id') id: string,
    @Body() data: Prisma.DataUpdateInput,
  ): Promise<Data> {
    return this.dataService.updateData(id, data);
  }

  @Delete(':id')
  async deleteData(@Param('id') id: string): Promise<Data> {
    return this.dataService.deleteData(id);
  }
}
