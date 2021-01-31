import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatRoomDto } from 'src/dto/chat-room.dto';
import { Repository } from 'typeorm';
import { ChatRoom } from '../entity/chat-room.entity';

@Injectable()
export class ChatRoomService {
  constructor(@InjectRepository(ChatRoom) private chatRoomRepo: Repository<ChatRoom>) {}

  findAll(): Promise<ChatRoom[]> {
    return this.chatRoomRepo.find();
  }

  getOne(id: string) {
    return this.chatRoomRepo.findOne(id);
  }

  createOneChatRoom(chatRoomDto: ChatRoomDto): Promise<ChatRoomDto> {
    return this.chatRoomRepo.save(chatRoomDto);
  }

  deleteOneChatRoom(id: string) {
    return this.chatRoomRepo.delete(id);
  }

  updateOneChatRoom(id: string, updateChatRoomDto: ChatRoomDto) {
    return this.chatRoomRepo.update(id, updateChatRoomDto);
  }
}
