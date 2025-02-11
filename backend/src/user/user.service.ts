import { Injectable } from '@nestjs/common';
import { User, Prisma, Data, RedeemCode } from '@prisma/client';

import { PrismaService } from 'src/libs/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getUserById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  // async createUser(data: Prisma.UserCreateInput): Promise<User> {
  //   return this.prisma.user.create({ data });
  // }

  async updateUser(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async deleteUser(id: string): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }

  async getLabelledDataByUsername(username: string): Promise<Data[]> {
    const users = await this.prisma.user.findUnique({
      where: { username },
      select: {
        userData: {
          where: { isLabelled: true },
          select: {
            data: true,
          },
        },
      },
    });
    return users?.userData.map((userData) => userData.data);
  }

  async getUnlabelledDataByUsername(username: string): Promise<Data[]> {
    const users = await this.prisma.user.findUnique({
      where: { username },
      select: {
        userData: {
          where: { isLabelled: false },
          select: {
            data: true,
          },
        },
      },
    });
    return users?.userData.map((userData) => userData.data);
  }

  async getMe(userId: string): Promise<{ id: string; username: string }> {
    if (userId == null) {
      throw new Error('User not found');
    }
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (user == null) {
      throw new Error('User not found');
    }

    return { id: user.id, username: user.username };
  }

  async getRedeemCodeByUserId(userId: string): Promise<RedeemCode[]> {
    return this.prisma.user
      .findUnique({
        where: { id: userId },
      })
      .RedeemCode();
  }
}
