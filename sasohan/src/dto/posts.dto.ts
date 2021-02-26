import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class PostsDTO {s

  @IsString()
  user_id : string;

  @IsString()
  title : string;

  @IsString()
  body : string;

  @IsString()
  @IsOptional()
  image : string;

  @IsBoolean()
  visit : boolean;

  @IsString()
  category_id : string;

  @IsNumber()
  price : number;

  @IsNumber()
  created_at : number;

  @IsBoolean()
  complete : boolean;

  @IsString()
  @IsOptional()
  location_x : string;

  @IsString()
  @IsOptional()
  location_y : string;
  
}

export class UpdatePostsDTO {

  @IsString()
  @IsOptional()
  title : string;

  @IsString()
  @IsOptional()
  body : string;

  @IsString()
  @IsOptional()
  image : string;

  @IsBoolean()
  @IsOptional()
  visit : boolean;

  @IsNumber()
  @IsOptional()
  price : number;

  @IsString()
  @IsOptional()
  category_id : string;

  @IsNumber()
  @IsOptional()
  created_at : number;

  @IsString()
  @IsOptional()
  location_x : string;

  @IsString()
  @IsOptional()
  location_y : string;

}

export class UpdateCompletePostDTO {
  @IsBoolean()
  complete : boolean;
}