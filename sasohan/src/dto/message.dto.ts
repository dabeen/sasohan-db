export class MessageDto {

  message_id ?: string;
  room_id ?: string;
  user_id !: string;
  message ?: string;
  created_at: string;

}