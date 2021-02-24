import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { ReviewDTO, UpdateReviewDTO } from 'src/dto/review.dto';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService){}
 
  @Get('all')
    async getAllReview() {
        // this returns all Review in sasohan database 
        try {
            const allReview = await this.reviewService.getAll();
            return {
              review: allReview,
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
    async getAllUserReview(@Param("user_id") user_id: string) {
        // this retruns all posts written by users and whether they are successful.

        try {
            const result = await this.reviewService.getAllUserWrittenReview(user_id);
            return {
              review: result,
              success: true
            }
        } catch (e) {
            return {
                success : false,
                error_msg: e
            }
        }
    }

    @Get("/toWrite/:user_id")
    async getToWriteReview(@Param("user_id") user_id: string) {

        try {
            const result = await this.reviewService.getToWriteReviews(user_id)
            return {
                post : result,
                success: true
            }
        } catch (e) {
            return {
                success : false,
                error_msg: e
            }
        }
        
    }

    @Get(":id")
    async getOneReview(@Param("id") review_id: string) {
        // this returns one Review in sasohan database
        try {
            const result = await this.reviewService.getOne(review_id);
            return {
              review: result,
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
    async registerOneReview(@Body()createReviewDTO: ReviewDTO) {
        // This returns the success of creating (a) new Review(s) and returns an error message if an error occurs.
        try {
            await this.reviewService.createOneReview(createReviewDTO);
            return {success : true}
        } catch (e) {
            return {
                success: false,
                error_msg: e
            }
        }
    }

    // db에 없는 경우 error를 반환하지 않음 -> 수정해야함
    @Delete(":id")
    async deleteOneReview(@Param("id") review_id: string) {
        // This returns the success of the Review deletion, and returns an error message if an error occurs.
        try {
            await this.reviewService.deleteOneReview(review_id);
            return { success : true }
        } catch (e) {
            return {
                success: false,
                error_msg: e
            }
        }
    }

    @Put(":id")
    async updateOneReview(@Param("id") review_id: string, @Body() updateReviewDTO: UpdateReviewDTO) {
        // This returns whether the Review update is successful or not, and returns an error message if an error occurs.
        try {
            await this.reviewService.updateOneReview(review_id, updateReviewDTO)
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


}
