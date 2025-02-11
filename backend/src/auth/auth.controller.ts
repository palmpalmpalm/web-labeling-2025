import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  BadRequestException,
  Res,
} from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto'; // Create DTO classes for login and register requests
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() registerDto: RegisterDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const data = await this.authService.registerUser(registerDto);
      res.cookie('access_token', data.accessToken, { httpOnly: true });
      return data.accessToken;
    } catch (error) {
      throw new BadRequestException('Failed to register user');
    }
  }

  @Post('map')
  async map(
    @Body() registerDto: RegisterDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const data = await this.authService.mapUser(registerDto);
      res.cookie('access_token', data.accessToken, { httpOnly: true });
      return data.accessToken;
    } catch (error) {
      throw new BadRequestException('Failed to register user');
    }
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const data = await this.authService.loginUser(
      loginDto.username,
      loginDto.password,
    );
    res.cookie('access_token', data.accessToken, { httpOnly: true });
    return data.accessToken;
  }
}
