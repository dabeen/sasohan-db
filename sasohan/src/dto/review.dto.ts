
export class ReviewDTO {

  review_id !: string;
  user_id !: string;
  post_id !: string;
  body ?: string;
  created_at !: number;
  point !: number;

}

export class UpdateReviewDTO {
  body ?: string;
  created_at !: number;
  point ?: number;
}