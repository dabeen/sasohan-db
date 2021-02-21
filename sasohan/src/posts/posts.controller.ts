import { Body, Controller, Delete, Get, Param, Put, Post, HttpStatus, Res } from '@nestjs/common';
import { PostsDTO, UpdateCompletePostDTO, UpdatePostsDTO } from 'src/DTO/posts.dto';
import { Posts } from '../entity/posts.entity' ;
import { PostsService } from './posts.service';


@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService){}
 
    @Get('all')
    async getAllPost() {
      // this returns all Post in sasohan database 

        try {
            const allPost = await this.postsService.getAll();
            return {
                Post: allPost,
                success: true
            }
        } catch (e) {
            return {
                success : false,
                error_msg: e
            }
        }
    }

    @Get("/written/:user_id")
    async showAllWrittenPosts(@Param("user_id") user_id: string) {
      // this retruns all posts written by users and whether they are successful.

        try {
            const allUserWrittenPosts = await this.postsService.getAllWrittenPost(user_id);
            return {
                posts: allUserWrittenPosts,
                success: true
            } 
        } catch(e)  {
            return {
                success: false,
                error_msg: e
            }
        } 
    }
  
    @Get("/resolved/:user_id")
    async getAllUserResolvedPosts(@Param("user_id") user_id: string) {
        // this retruns all posts resolved by users and whether they are successful.
        
        try {
            const allUserResolvedPosts = await this.postsService.getAllUserResolvedPosts(user_id);
            return {
                posts: allUserResolvedPosts,
                success: true
            } 
        } catch(e)  {
            return {
                success: false,
                error_msg: e
            }
        } 
    }
    
    @Get("/unresolved")
    async getAllUnresolvedPosts() {
        // this retruns all unresolvedposts and whether they are successful.
        
        try {
            const allUnresolvedPosts = await this.postsService.getUnresolvedPosts();
            return {
                posts: allUnresolvedPosts,
                success: true
            } 
        } catch(e)  {
            return {
                success: false,
                error_msg: e
            }
        } 
    }

    @Get(":id")
    async getOnePost(@Param("id") Post_id: string) {
        // this returns one Post in sasohan database
        try {
            const result = await this.postsService.getOne(Post_id);
            return {
                Post: result,
                success: true
            }
        } catch (e) {
            return {
                success : false,
                error_msg: e
            }
        }

    }
  
    @Post("/register")
    async registerOnePost(@Body()createPostDTO: PostsDTO) {
        // This returns the success of creating (a) new Post(s) and returns an error message if an error occurs.
        try {
            await this.postsService.createOnePost(createPostDTO);
            return {success : true}
        } catch (e) {
            return {
                success: false,
                error_msg: e
            }
        }
    }

    @Delete(":id")
    async deleteOnePost(@Param("id") post_id: string) {
        // This returns the success of the Post deletion, and returns an error message if an error occurs.
        try {
            await this.postsService.deleteOnePost(post_id);
            return { success : true }
        } catch (e) {
            return {
                success: false,
                error_msg: e
            }
        }
    }

    @Put(":id")
    async updateOnePost(@Param("id") post_id: string, @Body() updatePostDTO: UpdatePostsDTO) {
        // This returns whether the Post update is successful or not, and returns an error message if an error occurs.
        try {
            await this.postsService.updateOnePost(post_id, updatePostDTO)
            return {
                success: true
            }
        } catch (e) {
            return {
                success: false,
                error_msg: e
            }
        }
    }

    // 이게 필요한가? 그냥 updateOnePost만 쓰면 되지 않나 ,,,
    @Put("complete/:id")
    async updatePostCompleteStatus(@Param("id") post_id: string, @Body() updateCompletePost : UpdateCompletePostDTO) {
       try {
            await this.postsService.updateCompletePost(post_id, updateCompletePost);
            return {
                success: true
            }
       } catch (e) {
           return {
               success : false,
               error_msg : e
           }
       }
        
    }
}
