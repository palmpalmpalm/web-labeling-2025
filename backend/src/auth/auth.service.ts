import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, Prisma } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'src/libs/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(
    data: Prisma.UserCreateInput,
  ): Promise<{ accessToken: string }> {
    const hashedPassword = await this.hashPassword(data.password);

    const userData: Prisma.UserCreateInput = {
      ...data,
      password: hashedPassword,
    };

    const user = await this.prisma.user.create({ data: userData });
    const payload = { userId: user.id };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }

  async mapUser(
    data: Prisma.UserCreateInput,
  ): Promise<{ accessToken: string }> {
    const userList = await this.prisma.user.findMany({
      where: { isMapped: false },
    });

    if (userList && userList.length === 0) {
      throw new UnauthorizedException('No user to map');
    }

    const mappedUser = await this.prisma.user.findUnique({
      where: { username: data.username },
    });

    if (mappedUser) {
      throw new UnauthorizedException('User already mapped');
    }

    const hashedPassword = await this.hashPassword(data.password);

    const user = await this.prisma.user.update({
      where: { id: userList[0].id },
      data: { ...data, password: hashedPassword, isMapped: true },
    });

    const payload = { userId: user.id };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }

  async loginUser(
    username: string,
    password: string,
  ): Promise<{ accessToken: string }> {
    const user = await this.prisma.user.findUnique({ where: { username } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordMatch = await this.verifyPassword(password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { userId: user.id };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  private async verifyPassword(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  async verifyToken(token: string): Promise<{ userId: string }> {
    const res = await this.jwtService.verify<{ userId: string }>(token);
    return res;
  }
}
