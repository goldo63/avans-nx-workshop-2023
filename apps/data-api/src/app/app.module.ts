import { Module } from '@nestjs/common';
import { BackendFeaturesMealModule } from '@avans-nx-workshop/backend/features'

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BackendFeaturesMealModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
