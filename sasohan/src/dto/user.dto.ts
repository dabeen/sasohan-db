import { IsNumber, IsOptional, IsString } from "class-validator";

export class UserDTO {
  @IsString()
  user_id : string;

  @IsString()
  nickname : string;

  @IsString()
  gender : string;

  @IsString()
  @IsOptional()
  birthday : string;

  @IsNumber()
  @IsOptional()
  age : number;

  @IsNumber()
  @IsOptional()
  point : number; 

  @IsString()
  account_type: string;
}

export class UpdateUserDTO {
  @IsString()
  @IsOptional()
  gender ?: string;

  @IsString()
  @IsOptional()
  birthday ?: string;

  @IsNumber()
  @IsOptional()
  age ?: number;
  
}

export class UpdateUserPointDTO {
  @IsNumber()
  point : number;
}