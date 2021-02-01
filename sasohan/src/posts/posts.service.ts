import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostsDto } from 'src/dto/posts.dto';
import { Repository } from 'typeorm';
import { Posts } from '../entity/posts.entity';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Posts) private postsRepo: Repository<Posts>) {}

  findAll(): Promise<Posts[]> {
    return this.postsRepo.find();
  }

  getOne(id: string) {
    return this.postsRepo.findOne(id);
  }

  createOnePost(postsDto: PostsDto): Promise<PostsDto> {
    return this.postsRepo.save(postsDto);
  }

  deleteOnePost(id: string) {
    return this.postsRepo.delete(id);
  }

  updateOnePost(id: string, updatePostsDto: PostsDto) {
    return this.postsRepo.update(id, updatePostsDto);
  }
}
