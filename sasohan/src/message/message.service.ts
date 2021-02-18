import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { MessageDTO } from 'src/DTO/message.dto';
import { Repository } from 'typeorm';
import { Message } from '../entity/message.entity';

@Injectable()
export class MessageService {
  constructor(@InjectRepository(Message) private messageRepo: Repository<Message>) {};
  
  getAll(): Promise<Message[]> {
    return this.messageRepo.find();
  }

  getOne(id: string) {
    return this.messageRepo.findOne(id);
  }
  
  createOneMessage(messageDTO: MessageDTO): Promise<MessageDTO> {
    return this.messageRepo.save(messageDTO);
  }

  deleteOneMessage(id: string) {
    return this.messageRepo.delete(id);
  }

  updateOneMessage(id: string, updateMessageDTO: MessageDTO) {
    return this.messageRepo.update(id, updateMessageDTO);
  }


}
