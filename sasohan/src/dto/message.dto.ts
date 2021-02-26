import { IsNumber, IsString } from "class-validator";

export class MessageDTO {

  @IsString()
  chat_room_id: string;
  @IsString()
  user_id: string;
  @IsString()
  text: string;
  @IsNumber()
  created_at: number;
}