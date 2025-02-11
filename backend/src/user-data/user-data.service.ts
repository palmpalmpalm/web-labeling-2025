import { Injectable } from '@nestjs/common';

import { UserData, Prisma } from '@prisma/client';

import { PrismaService } from 'src/libs/prisma/prisma.service';

@Injectable()
export class UserDataService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserData(): Promise<UserData[]> {
    return this.prisma.userData.findMany();
  }

  async getUserDataById(id: string): Promise<UserData | null> {
    return this.prisma.userData.findUnique({ where: { id } });
  }

  async createUserData(
    data: Prisma.UserDataUncheckedCreateInput,
  ): Promise<UserData> {
    return this.prisma.userData.create({ data });
  }

  async updateUserData(
    id: string,
    data: Prisma.UserDataUncheckedUpdateInput,
  ): Promise<UserData> {
    return this.prisma.userData.update({ where: { id }, data });
  }

  async deleteUserData(id: string): Promise<UserData> {
    return this.prisma.userData.delete({ where: { id } });
  }

  generateRandomString(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    let randomString = '';

    // Generate two random letters
    for (let i = 0; i < 2; i++) {
      const randomLetter = letters.charAt(
        Math.floor(Math.random() * letters.length),
      );
      randomString += randomLetter;
    }

    // Generate five random numbers
    for (let i = 0; i < 5; i++) {
      const randomNumber = numbers.charAt(
        Math.floor(Math.random() * numbers.length),
      );
      randomString += randomNumber;
    }

    return randomString;
  }

  async markAsLabelled(
    answers: string[],
    userId: string,
    dataId: string,
  ): Promise<UserData> {
    const userData = await this.prisma.userData.findFirst({
      where: { userId, dataId },
    });

    if (userData?.isLabelled) {
      throw new Error('Data is already labelled');
    }

    const userDateUpdated = await this.prisma.userData.update({
      where: { id: userData.id },
      data: {
        isLabelled: true,
        answers,
      },
    });

    //count user data labelled
    const countUserDataLabelled = await this.prisma.userData.count({
      where: { userId, isLabelled: true },
    });

    if (countUserDataLabelled > 0 && countUserDataLabelled === 30) {
      const redeemCode = 'CA03XIBV';

      await this.prisma.redeemCode.create({
        data: {
          userId,
          code: redeemCode,
        },
      });
    }

    return userDateUpdated;
  }

  async updateAnswer(
    answers: string[],
    userId: string,
    dataId: string,
  ): Promise<UserData> {
    const userData = await this.prisma.userData.findFirst({
      where: { userId, dataId },
    });

    if (!userData?.isLabelled) {
      throw new Error('Data is not labelled');
    }

    return this.prisma.userData.update({
      where: { id: userData.id },
      data: { answers },
    });
  }

  async getUserDataByUserIdAndDataId(
    userId: string,
    dataId: string,
  ): Promise<UserData | null> {
    return this.prisma.userData.findFirst({ where: { userId, dataId } });
  }
}
