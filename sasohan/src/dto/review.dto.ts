
export class ReviewDto {

  review_id?: string;
  user_id!: string;
  post_id?: string;
  body!: string;
  created_at: string;
  point!: number;

}