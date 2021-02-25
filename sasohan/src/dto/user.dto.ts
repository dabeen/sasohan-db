import { IsNumber, IsString } from "class-validator";

export class UserDTO {
  @IsString()
  user_id : string;

  @IsString()
  nickname : string;

  @IsString()
  gender : string;

  @IsString()
  birthday : string;

  @IsNumber()
  age : number;

  @IsNumber()
  point : number; 

  @IsString()
  account_type: string;
}

export class UpdateUserDTO {
  @IsString()
  gender ?: string;

  @IsString()
  birthday ?: string;

  @IsNumber()
  age : number;
  
}

export class UpdateUserPointDTO {
  @IsNumber()
  point : number;
}