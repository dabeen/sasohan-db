import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReviewDto } from 'src/dto/review.dto';
import { Repository } from 'typeorm';
import { Review } from '../entity/review.entity';

@Injectable()
export class ReviewService {
  constructor(@InjectRepository(Review) private reviewRepo: Repository<Review>) {}

  findAll(): Promise<Review[]> {
    return this.reviewRepo.find();
  }

  getOne(id: string) {
    return this.reviewRepo.findOne(id);
  }

  createOneReview(ReviewDto: ReviewDto): Promise<ReviewDto> {
    return this.reviewRepo.save(ReviewDto);
  }

  deleteOneReview(id: string) {
    return this.reviewRepo.delete(id);
  }

  updateOneReview(id: string, updateReviewDto: ReviewDto) {
    return this.reviewRepo.update(id, updateReviewDto);
  }
}
