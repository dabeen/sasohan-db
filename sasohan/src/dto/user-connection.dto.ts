import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class UserConnectionDTO {

  @IsString()
  user_id !: string;

  @IsNumber()
  connected_at !: number;

  @IsBoolean()
  connection_status !: boolean;

}

export class UpdateUserConnectionDTO {

  @IsNumber()
  @IsOptional()
  connected_at : number;

  @IsOptional()
  @IsBoolean()
  connection_status : boolean;

}