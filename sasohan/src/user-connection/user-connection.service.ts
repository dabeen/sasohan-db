import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserConnectionDto } from 'src/dto/user-connection.dto';
import { Repository } from 'typeorm';
import { UserConnection } from '../entity/user-connection.entity';

@Injectable()
export class UserConnectionService {
  constructor(@InjectRepository(UserConnection) private userConnectionRepo: Repository<UserConnection>) {}

  findAll(): Promise<UserConnection[]> {
    return this.userConnectionRepo.find();
  }

  getOne(id: string) {
    return this.userConnectionRepo.findOne(id);
  }

  createOneUserConnection(UserConnectionDto: UserConnectionDto): Promise<UserConnectionDto> {
    return this.userConnectionRepo.save(UserConnectionDto);
  }

  deleteOneUserConnection(id: string) {
    return this.userConnectionRepo.delete(id);
  }

  updateOneUserConnection(id: string, updateUserConnectionDto: UserConnectionDto) {
    return this.userConnectionRepo.update(id, updateUserConnectionDto);
  }

}
