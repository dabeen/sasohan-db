import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UndeliveredMessage } from 'src/entity/undelivered-message.entity';
import { UndeliveredMessageController } from './undelivered-message.controller';
import { UndeliveredMessageService } from './undelivered-message.service';

@Module({
  imports: [TypeOrmModule.forFeature([UndeliveredMessage])],
  controllers: [UndeliveredMessageController],
  providers: [UndeliveredMessageService]
})
export class UndeliveredMessageModule {}
