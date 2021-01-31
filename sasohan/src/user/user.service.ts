import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dto/user.dto';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  getOne(id: string) {
    return this.userRepo.findOne(id);
  }

  createOneUser(UserDto: UserDto): Promise<UserDto> {
    return this.userRepo.save(UserDto);
  }

  deleteOneUser(id: string) {
    return this.userRepo.delete(id);
  }

  updateOneUser(id: string, updateUserDto: UserDto) {
    return this.userRepo.update(id, updateUserDto);
  }
}
