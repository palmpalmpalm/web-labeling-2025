import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './libs/prisma/prisma.module';
import { DataModule } from './data/data.module';
import { UserModule } from './user/user.module';
import { DataSetModule } from './data-set/data-set.module';
import { UserDataModule } from './user-data/user-data.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    DataModule,
    UserModule,
    DataSetModule,
    UserDataModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
