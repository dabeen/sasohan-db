import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReviewDto } from 'src/dto/review.dto';
import { Review } from '../entity/review.entity';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService){}
 
    @Get('all')
    async getAll():Promise<Review[]>{
        return await this.reviewService.findAll();
    }

    @Post()
    async create(@Body() createReviewDto: ReviewDto) {
        const result = await this.reviewService.createOneReview(createReviewDto);
        return result;
    }

    @Get(":id") 
    async getOne(@Param("id") Review_id: string) {
        const result = await this.reviewService.getOne(Review_id);
        return result;
    }

    @Put(":id")
    async setOne(@Param("id") Review_id: string, @Body() updateReviewDto: ReviewDto) {
        const result = await this.reviewService.updateOneReview(Review_id, updateReviewDto);
        return result; 
    }

    @Delete(":id")
    async deleteOne(@Param("id") Review_id: string) {
        const ret = await this.reviewService.deleteOneReview(Review_id);
        return ret;
    }
}
