import {
  Controller,
  Get,
  Delete,
  Body,
  Param,
  Patch,
  Req,
} from '@nestjs/common';
import { User, Prisma, Data, RedeemCode } from '@prisma/client';

import { UserService } from './user.service';
import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get('/me')
  async getMe(
    @Req() req: Request,
  ): Promise<{ id: string; username: string } | null> {
    const accessToken = req.cookies['access_token'];
    if (!accessToken) throw new Error('Access token not found');
    const res = await this.authService.verifyToken(accessToken);
    return this.userService.getMe(res.userId);
  }

  @Get('/redeem-code/:userId')
  async getRedeemCode(
    @Param('userId') userId: string,
  ): Promise<RedeemCode[] | null> {
    return this.userService.getRedeemCodeByUserId(userId);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User | null> {
    return this.userService.getUserById(id);
  }

  @Get('/labelled-data/:username')
  async getLabelledDataByUsername(
    @Param('username') username: string,
  ): Promise<Data[]> {
    return this.userService.getLabelledDataByUsername(username);
  }

  @Get('/unlabelled-data/:username')
  async getUnlabelledDataByUsername(
    @Param('username') username: string,
  ): Promise<Data[]> {
    return this.userService.getUnlabelledDataByUsername(username);
  }

  // @Post()
  // async createUser(@Body() data: Prisma.UserCreateInput): Promise<User> {
  //   return this.userService.createUser(data);
  // }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.userService.updateUser(id, data);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser(id);
  }
}
