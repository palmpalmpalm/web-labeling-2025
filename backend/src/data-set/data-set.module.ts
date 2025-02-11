import { Module } from '@nestjs/common';

import { DataSetController } from './data-set.controller';
import { DataSetService } from './data-set.service';

@Module({
  controllers: [DataSetController],
  providers: [DataSetService],
  exports: [DataSetService],
})
export class DataSetModule {}
