import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResolverDto } from 'src/dto/resolver.dto';
import { Repository } from 'typeorm';
import { Resolver } from '../entity/resolver.entity';

@Injectable()
export class ResolverService {
  constructor(@InjectRepository(Resolver) private resolverRepo: Repository<Resolver>) {}

  findAll(): Promise<Resolver[]> {
    return this.resolverRepo.find();
  }

  getOne(id: string) {
    return this.resolverRepo.findOne(id);
  }

  createOneResolver(resolverDto: ResolverDto): Promise<ResolverDto> {
    return this.resolverRepo.save(resolverDto);
  }

  deleteOneResolver(id: string) {
    return this.resolverRepo.delete(id);
  }

  updateOneResolver(id: string, updateResolverDto: ResolverDto) {
    return this.resolverRepo.update(id, updateResolverDto);
  }
}
