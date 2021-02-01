import { Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common';
import { Posts } from '../entity/posts.entity' ;
import { PostsDto } from 'src/dto/posts.dto';
import { PostsService } from './posts.service';


@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService){}
 
    @Get('all')
    async getAll():Promise<Posts[]>{
        return await this.postsService.findAll();
    }

    @Post()
    async create(@Body() createPostsDto: PostsDto) {
        const result = await this.postsService.createOnePost(createPostsDto);
        return result;
    }

    @Get(":id") 
    async getOne(@Param("id") Posts_id: string) {
        const result = await this.postsService.getOne(Posts_id);
        return result;
    }

    @Put(":id")
    async setOne(@Param("id") Posts_id: string, @Body() updatePostsDto: PostsDto) {
        const result = await this.postsService.updateOnePost(Posts_id, updatePostsDto);
        return result; 
    }

    @Delete(":id")
    async deleteOne(@Param("id") Posts_id: string) {
        const ret = await this.postsService.deleteOnePost(Posts_id);
        return ret;
    }
    
}
