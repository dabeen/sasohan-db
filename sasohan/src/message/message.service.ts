import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/dto/message.dto';
import { Repository } from 'typeorm';
import { Message } from '../entity/message.entity';

@Injectable()
export class MessageService {
  constructor(@InjectRepository(Message) private messageRepo: Repository<Message>) {}

  findAll(): Promise<Message[]> {
    return this.messageRepo.find();
  }
  getOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  createOneMessage(messageDto: MessageDto): Promise<MessageDto> {
    return this.messageRepo.save(messageDto);
  }

  deleteOneMessage(id: string) {
    return this.messageRepo.delete(id);
  }

  updateOneMessage(id: string, updateMessageDto: MessageDto) {
    return this.messageRepo.update(id, updateMessageDto);
  }
}
