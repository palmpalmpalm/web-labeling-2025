import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Patch,
} from '@nestjs/common';

import { UserData, Prisma } from '@prisma/client';

import { UserDataService } from './user-data.service';

@Controller('user-data')
export class UserDataController {
  constructor(private readonly userDataService: UserDataService) {}

  @Get()
  async getUserData(): Promise<UserData[]> {
    return this.userDataService.getUserData();
  }

  @Get(':id')
  async getUserDataById(@Param('id') id: string): Promise<UserData | null> {
    return this.userDataService.getUserDataById(id);
  }

  @Post('user/data')
  async getUserDataByUserIdAndDataId(
    @Body() data: { userId: string; dataId: string },
  ): Promise<UserData> {
    const userData = await this.userDataService.getUserDataByUserIdAndDataId(
      data.userId,
      data.dataId,
    );
    if (!userData) throw new Error('User data not found');
    return userData;
  }

  @Post()
  async createUserData(
    @Body() data: Prisma.UserDataUncheckedCreateInput,
  ): Promise<UserData> {
    return this.userDataService.createUserData(data);
  }

  @Patch(':id')
  async updateUserData(
    @Param('id') id: string,
    @Body() data: Prisma.UserDataUncheckedUpdateInput,
  ): Promise<UserData> {
    return this.userDataService.updateUserData(id, data);
  }

  @Post('mark-as-labelled')
  async markAsLabelled(
    @Body()
    data: {
      answers: string[];
      userId: string;
      dataId: string;
    },
  ): Promise<UserData> {
    return this.userDataService.markAsLabelled(
      data.answers,
      data.userId,
      data.dataId,
    );
  }

  @Post('update-answer')
  async updateAnswer(
    @Body()
    data: {
      answers: string[];
      userId: string;
      dataId: string;
    },
  ): Promise<UserData> {
    return this.userDataService.updateAnswer(
      data.answers,
      data.userId,
      data.dataId,
    );
  }

  @Delete(':id')
  async deleteUserData(@Param('id') id: string): Promise<UserData> {
    return this.userDataService.deleteUserData(id);
  }
}
