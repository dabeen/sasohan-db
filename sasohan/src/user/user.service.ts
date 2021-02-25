import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { json } from 'express';
import { get } from 'http';
import { UpdateUserDTO, UpdateUserPointDTO, UserDTO } from 'src/dto/user.dto';
import { createQueryBuilder, getConnection, Repository } from 'typeorm';
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

  async updateUserPoint(user_id: string, updateUserPointDTO : UpdateUserPointDTO) {
    const userPoint = await this.userRepo.createQueryBuilder()
    .select("user.point")
    .from(User, "user")
    .where("user.user_id = :user_id", {user_id: user_id})
    .getOne();
    
    const updatePoint = {"point" : userPoint.point + updateUserPointDTO.point}

    return this.userRepo.update(user_id, updatePoint)
  }

}
