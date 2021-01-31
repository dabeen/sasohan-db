import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserLocationDto } from 'src/dto/user-location.dto';
import { Repository } from 'typeorm';
import { UserLocation } from '../entity/user-location.entity';

@Injectable()
export class UserLocationService {
  constructor(@InjectRepository(UserLocation) private userLocationRepo: Repository<UserLocation>) {}

  findAll(): Promise<UserLocation[]> {
    return this.userLocationRepo.find();
  }

  getOne(id: string) {
    return this.userLocationRepo.findOne(id);
  }

  createOneUserLocation(UserLocationDto: UserLocationDto): Promise<UserLocationDto> {
    return this.userLocationRepo.save(UserLocationDto);
  }

  deleteOneUserLocation(id: string) {
    return this.userLocationRepo.delete(id);
  }

  updateOneUserLocation(id: string, updateUserLocationDto: UserLocationDto) {
    return this.userLocationRepo.update(id, updateUserLocationDto);
  }

}
