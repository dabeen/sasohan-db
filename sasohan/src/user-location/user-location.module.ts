import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserLocationController } from './user-location.controller';
import { UserLocation } from '../entity/user-location.entity';
import { UserLocationService } from './user-location.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserLocation])],
  controllers: [UserLocationController],
  providers: [UserLocationService]
})
export class UserLocationModule {}
