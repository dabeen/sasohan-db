import { IsNumber, IsOptional, IsString } from "class-validator";

export class ReviewDTO {

  @IsString()
  user_id : string;
  @IsString()
  post_id : string;
  @IsString()
  @IsOptional()
  body : string;
  @IsNumber()
  created_at !: number;
  @IsNumber()
  point !: number;

}
