import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatRoomController } from './chat-room.controller';
import { ChatRoom } from '../entity/chat-room.entity';
import { ChatRoomService } from './chat-room.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChatRoom])],
  controllers: [ChatRoomController],
  providers: [ChatRoomService]
})
export class ChatRoomModule {}
