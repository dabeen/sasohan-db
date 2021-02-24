import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReviewDTO, UpdateReviewDTO } from 'src/dto/review.dto';
import { Posts } from 'src/entity/posts.entity';
import { Resolver } from 'src/entity/resolver.entity';
import { getConnection, Repository } from 'typeorm';
import { Review } from '../entity/review.entity';

@Injectable()
export class ReviewService {
  constructor(@InjectRepository(Review) private reviewRepo: Repository<Review>) {}

  getAll(): Promise<Review[]> {
    return this.reviewRepo.find();
  }

  getOne(id: string) {
    return this.reviewRepo.findOne(id);
  }

  createOneReview(ReviewDTO: ReviewDTO): Promise<ReviewDTO> {
    return this.reviewRepo.save(ReviewDTO);
  }

  deleteOneReview(id: string) {
    return this.reviewRepo.delete(id);
  }

  updateOneReview(id: string, updateReviewDTO: UpdateReviewDTO) {
    return this.reviewRepo.update(id, updateReviewDTO);
  }

  async getAllUserWrittenReview(user_id: string) {
    
    const review = await getConnection().createQueryBuilder()
    .select("review")
    .from(Review, "review")
    .where("review.user_id = :user_id", {user_id: user_id})
    .getMany()

    return review;
  }

  // 리뷰를 작성하지 않은 게시물 정보
  async getToWriteReviews(user_id: string) {

    const review = await getConnection().createQueryBuilder()
      .select("posts")
      .from(Posts, "posts")
      .leftJoin(Resolver, "resolver", "posts.post_id = resolver.post_id")
      .where("posts.complete = true")
      .andWhere("posts.user_id = :user_id", { user_id: user_id })
      .where("posts.post_id not in (select post_id from review)").getMany();

    return review

  }
}
