import { Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common';
import Post from '../entity/post.entity' ;
import { PostDto } from 'src/dto/post.dto';
import { PostService } from './post.service';


@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService){}
 
    @Get('all')
    async getAll():Promise<Post[]>{
        return await this.postService.findAll();
    }

    @Post()
    async create(@Body() createPostDto: PostDto) {
        const result = await this.postService.createOnePost(createPostDto);
        return result;
    }

    @Get(":id") 
    async getOne(@Param("id") Post_id: string) {
        const result = await this.postService.getOne(Post_id);
        return result;
    }

    @Put(":id")
    async setOne(@Param("id") Post_id: string, @Body() updatePostDto: PostDto) {
        const result = await this.postService.updateOnePost(Post_id, updatePostDto);
        return result; 
    }

    @Delete(":id")
    async deleteOne(@Param("id") Post_id: string) {
        const ret = await this.postService.deleteOnePost(Post_id);
        return ret;
    }
    
}
