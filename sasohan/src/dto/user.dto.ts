import { IsEmail, IsNotEmpty } from "class-validator";


export class UserDto {

  user_id: string;
  nickname: string;
  gender: string;
  birthday: string;

  @IsEmail()
  email: string;
  
  age_arange: string;
  point: number;
  account_type: string;

}