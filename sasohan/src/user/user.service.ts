import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDTO, UserDTO } from 'src/dto/user.dto';
import { createQueryBuilder, Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  getAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  getOne(id: string) {
    return this.userRepo.findOne(id);
  }

  createOneUser(UserDto: UserDTO): Promise<UserDTO> {
    return this.userRepo.save(UserDto);
  }

  deleteOneUser(id: string) {
    
    return this.userRepo.delete(id);
  }

  updateOneUser(id: string, updateUserDto: UpdateUserDTO) {
    return this.userRepo.update(id, updateUserDto);
  }

  

  

  




}
