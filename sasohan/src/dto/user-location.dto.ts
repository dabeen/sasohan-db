import { IsOptional, IsString } from "class-validator";

export class UserLocationDTO {

  @IsString()
  user_id !: string;

  @IsString()
  @IsOptional()
  location_x : string;

  @IsString()
  @IsOptional()
  location_y : string;

}

export class UpdateUserLocationDTO {
  @IsString()
  @IsOptional()
  location_x ?: string;

  @IsString()
  @IsOptional()
  location_y ?: string;
}