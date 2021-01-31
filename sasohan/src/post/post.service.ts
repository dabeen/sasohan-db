import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostDto } from 'src/dto/post.dto';
import { Repository } from 'typeorm';
import { Post } from '../entity/post.entity';

@Injectable()
export class PostService {
  constructor(@InjectRepository(Post) private postRepo: Repository<Post>) {}

  findAll(): Promise<Post[]> {
    return this.postRepo.find();
  }

  getOne(id: string) {
    return this.postRepo.findOne(id);
  }

  createOnePost(postDto: PostDto): Promise<PostDto> {
    return this.postRepo.save(postDto);
  }

  deleteOnePost(id: string) {
    return this.postRepo.delete(id);
  }

  updateOnePost(id: string, updatepostDto: PostDto) {
    return this.postRepo.update(id, updatepostDto);
  }
}
