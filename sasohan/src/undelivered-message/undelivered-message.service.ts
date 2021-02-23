import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { undeliveredMessageDTO } from 'src/dto/undeliveredMessage.dto';
import { UndeliveredMessage } from 'src/entity/undelivered-message.entity';
import { getConnection, Repository } from 'typeorm';

@Injectable()
export class UndeliveredMessageService {
  constructor(@InjectRepository(UndeliveredMessage) private undeliveredMessageRepo: Repository<UndeliveredMessage>) {};

  getAll(): Promise<UndeliveredMessage[]> {
    return this.undeliveredMessageRepo.find();
  }

  getOne(id: string) {
    return this.undeliveredMessageRepo.findOne(id);
  }
  
  createOneMessage(messageDTO: undeliveredMessageDTO): Promise<undeliveredMessageDTO> {
    return this.undeliveredMessageRepo.save(messageDTO);
  }

  deleteOneMessage(id: string) {
    return this.undeliveredMessageRepo.delete(id);
  }

  async getAllFailedMessage(user_id: string) {
    const message = await getConnection().createQueryBuilder()
    .select("undelivered_message")
    .from(UndeliveredMessage, "undelivered_message")
    .where("undelivered_message.user_id = :user_id", {user_id: user_id})
    .getMany();

    return message;
  }

}
