import { IsNumber, IsString } from "class-validator";

export class ChatRoomDTO {
  
  @IsString()
  chat_room_id !: string;
  @IsString()
  post_id !: string;
  @IsNumber()
  created_at !: number;
}