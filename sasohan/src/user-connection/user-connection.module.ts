import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserConnectionController } from './user-connection.controller';
import { UserConnection } from '../entity/user-connection.entity';
import { UserConnectionService } from './user-connection.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserConnection])],
  controllers: [UserConnectionController],
  providers: [UserConnectionService]
})
export class UserConnectionModule {}
