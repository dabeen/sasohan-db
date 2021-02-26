import { IsNumber, IsString } from "class-validator";

export class undeliveredMessageDTO {

  @IsString()
  user_id : string;
  @IsString()
  chat_room_id: string;
  @IsString()
  text: string;
  @IsNumber()
  time: number;
  
}
