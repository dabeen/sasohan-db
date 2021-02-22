import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostsDTO, UpdateCompletePostDTO, UpdatePostsDTO } from 'src/DTO/posts.dto';
import { Category } from 'src/entity/category.entity';
import { Connection, createQueryBuilder, getConnection, getRepository, QueryBuilder, Repository } from 'typeorm';
import { Posts } from '../entity/posts.entity';
import { Resolver } from '../entity/resolver.entity';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Posts) private postsRepo: Repository<Posts>) {}

  getAll(): Promise<Posts[]> {
    return this.postsRepo.find();
  }

  getOne(id: string) {
    return this.postsRepo.findOne(id);
  }

  createOnePost(postsDTO: PostsDTO): Promise<PostsDTO> {
    return this.postsRepo.save(postsDTO);
  }

  deleteOnePost(id: string) {
    return this.postsRepo.delete(id);
  }

  updateOnePost(id: string, updatePostsDTO: UpdatePostsDTO) {
    return this.postsRepo.update(id, updatePostsDTO);
  }

  updateCompletePost(id: string, updateCompletePost: UpdateCompletePostDTO) {
    return this.postsRepo.update(id,updateCompletePost)
  }

  async getAllWrittenPost(user_id: string) {

    const posts = await getConnection().createQueryBuilder()
    .select("posts")
    .from(Posts, "posts")
    .where("posts.user_id = :user_id", {user_id : user_id})
    .getMany();

    return posts;
  }

  async getAllUserResolvedPosts(user_id: string) {
    // return (await this.postsRepo.query
    // (`SELECT posts.post_id , posts.user_id , posts.title , posts.body , posts.image , posts.visit , posts.category_id , posts.price , posts.created_at ,posts.location_x, posts.location_y, posts.complete 
    // FROM posts 
    // LEFT JOIN resolver ON resolver.post_id  = posts.post_id 
    // WHERE resolver.user_id ='${user_id}';`))

    const posts = await getConnection().createQueryBuilder()
    .select("posts")
    .from(Posts, "posts")
    .leftJoin(Resolver, "resolver", "resolver.post_id = posts.post_id")
    .where("resolver.user_id = :user_id", {user_id : user_id})
    .getMany();

    return posts
    

  }


  async getUnresolvedPosts() {
    const posts = await getConnection().createQueryBuilder().select("posts")
    .from(Posts, "posts")
    .where("posts.complete = false")
    .getMany();

    return posts;
  }

  
  



  
}
