import { IsString } from "class-validator";

export class CategoryDTO {

  @IsString()
  category_id : string;

  @IsString()
  category_name : string;
}